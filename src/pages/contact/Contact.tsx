import React, { useRef } from "react";

// stylesheet
import styles from "./contact.module.css";

const Contact = () => {
  const firstName = useRef<HTMLInputElement | null>(null);
  const lastName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const tel = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  const street = useRef<HTMLInputElement | null>(null);
  const city = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLInputElement | null>(null);

  // eslint-disable-next-line
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM__SUBMITTED!");
  };

  return (
    <div>
      <div className={styles.contact__info}>
        <h1>Need Help On Something?</h1>
        <h4>
          Leave us a message we will get back to you as soon as we receive your
          message.
        </h4>
      </div>

      <div className={styles.form}>
        <h2>We are here for you</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__control}>
            <h4>Title</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="title" value="Ms." />
                <span>Ms.</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="title" value="Mr." />
                <span>Mr.</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="title" value="N/A." />
                <span>N/A.</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <h4>First Name</h4>
            <input
              ref={firstName}
              type="text"
              placeholder="First Name"
              name="firstName"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Last Name</h4>
            <input
              ref={lastName}
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Street</h4>
            <input
              ref={street}
              type="text"
              placeholder="Street"
              name="street"
            />
          </div>

          <div className={styles.form__control}>
            <h4>City</h4>
            <input ref={city} type="text" placeholder="City" name="city" />
          </div>

          <div className={styles.form__control}>
            <h4>Country</h4>
            <input
              ref={country}
              type="text"
              placeholder="Country"
              name="country"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Email</h4>
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Tel</h4>
            <input
              ref={tel}
              type="number"
              placeholder="Phone Number"
              name="tel"
            />
          </div>

          <div className={styles.form__control}>
            <h4>Your Message</h4>
            <textarea
              ref={message}
              placeholder="Your Message"
              name="message"
              id="message"
              cols={30}
              rows={5}
            ></textarea>
          </div>

          <div className={styles.form__control}>
            <h4>Please send me information on the following programmes:</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="program" value="HND" />
                <span>HND</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Master" />
                <span>Master</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Bachelor" />
                <span>Bachelor</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="program" value="Preparation" />
                <span>Preparation</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <h4>How did you hear about us:</h4>
            <div className={styles.radio__boxes}>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Social Media" />
                <span>Social Media</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Internet Search" />
                <span>Internet Search</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Family or Friend" />
                <span>Family or Friend</span>
              </div>
              <div className={styles.radio}>
                <input
                  type="radio"
                  name="medium"
                  value="SLUI Student of Alumni"
                />
                <span>SLUI Student of Alumni</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Agent" />
                <span>Agent</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="SLUI Presentations" />
                <span>SLUI Presentations</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="TV" />
                <span>TV</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Radio Announcement" />
                <span>Radio Announcement</span>
              </div>
              <div className={styles.radio}>
                <input type="radio" name="medium" value="Flyer or Banner" />
                <span>Flyer or Banner</span>
              </div>
            </div>
          </div>

          <div className={styles.form__control}>
            <button type="submit">Submit Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
