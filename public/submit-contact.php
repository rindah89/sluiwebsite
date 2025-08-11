<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['fullName', 'email', 'programme'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields)
    ]);
    exit;
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Sanitize input data
$fullName = filter_var($input['fullName'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($input['phone']) ? filter_var($input['phone'], FILTER_SANITIZE_STRING) : 'Not provided';
$programme = filter_var($input['programme'], FILTER_SANITIZE_STRING);
$message = isset($input['message']) ? filter_var($input['message'], FILTER_SANITIZE_STRING) : 'No message provided';

// Programme names mapping
$programme_names = [
    'foundation' => 'International Foundation Year',
    'year-one-business' => 'International Year One - Business Management',
    'year-one-cs' => 'International Year One - Computer Science',
    'year-one-engineering' => 'International Year One - Engineering',
    'masters-prep' => 'Masters Preparation Programme',
    'english' => 'English Language Preparation'
];

$programme_full_name = isset($programme_names[$programme]) ? $programme_names[$programme] : $programme;

// Email configuration
$to_email = 'rindahluanga@slui.org';
$subject = 'New International Programme Inquiry - ' . $programme_full_name;

// Email content
$email_body = "
New International Programme Inquiry

Student Information:
- Full Name: {$fullName}
- Email: {$email}
- Phone: {$phone}
- Programme of Interest: {$programme_full_name}

Message:
{$message}

---
This inquiry was submitted through the St. Louis University International Study Centre website.
Submitted on: " . date('Y-m-d H:i:s') . "
";

// Email headers
$headers = [
    'From: noreply@slui.org',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8'
];

// Send email
try {
    $mail_sent = mail($to_email, $subject, $email_body, implode("\r\n", $headers));
    
    if ($mail_sent) {
        // Log successful submission (optional)
        error_log("Contact form submission successful: {$email} - {$programme_full_name}");
        
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for your inquiry! We will contact you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
} catch (Exception $e) {
    // Log error
    error_log("Contact form submission failed: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at rindahluanga@slui.org'
    ]);
}
?>