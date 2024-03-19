import axios from 'axios';

const base_url = `${process.env.REACT_APP_BASE_URL}/api/${process.env.REACT_APP_API_VERSON}`;

export const getTeam = async () => {
    try {
        const response = await axios.get(`${base_url}/team/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return message
    }
}

export const getTeamSingle = async (id) => {
    try {
        const response = await axios.get(`${base_url}/team/${id}`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return message
    }
}

export const getEvents = async () => {
    try {
        const response = await axios.get(`${base_url}/events/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getEventSingle = async (id) => {
    try {
        const response = await axios.get(`${base_url}/events/${id}`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getProgrammes = async () => {
    try {
        const response = await axios.get(`${base_url}/programmes/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getProgrammeSingle = async (id) => {
    try {
        const response = await axios.get(`${base_url}/programmes/${id}`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getCategories = async () => {
    try {
        const response = await axios.get(`${base_url}/categories/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getCourses = async () => {
    try {
        const response = await axios.get(`${base_url}/courses/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getCourseSingle = async (id) => {
    try {
        const response = await axios.get(`${base_url}/courses/${id}`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getCampuses = async () => {
    try {
        const response = await axios.get(`${base_url}/campuses/`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}

export const getCampusSingle = async (id) => {
    try {
        const response = await axios.get(`${base_url}/campuses/${id}`);
        return response;
    } catch (error) {
        const message =
            (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        return (message);
    }
}
