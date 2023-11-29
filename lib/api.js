
export class ApiError extends Error {
    constructor(url, status) {
        super(`'${url}' returned ${status}`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace((this, ApiError))
        }
        this.name = 'API Error';
        this.status = status;
    }
}


export async function fetchJSON(url, options) {
    console.log('********************', url);
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new ApiError(url, response.status);
    }
    return response.json();
}