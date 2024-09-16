// fetch helper is used for fetching another web api, if the API was made in same project.
// Then we don't need to utilize the helper

interface Props{
    endpoint: string;
    body?: any;

    contentType?: string;
}

export const POST = async ({endpoint, body, contentType = 'application/json'} : Props) => {
    return await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': contentType
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => error.json);
}

export const GET = async ({endpoint, contentType = 'application/json'} : Props) => {
    return await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': contentType
        }
    })
    .then(response => response.json())
    .catch(error => error.json);
}

export const PUT = async ({endpoint, body, contentType = 'application/json'} : Props) => {
    return await fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': contentType
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => error.json);
}

export const DELETE = async ({endpoint, contentType = 'application/json'} : Props) => {
    return await fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': contentType
        }
    })
    .then(response => response.json())
    .catch(error => error.json);
}