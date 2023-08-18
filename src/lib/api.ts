import { API_URL, API_KEY } from '$env/static/private';

const buildApiUrl = (path: string) => {
    return API_URL + path + "?api_key=" + API_KEY;
}

export {
    buildApiUrl
}