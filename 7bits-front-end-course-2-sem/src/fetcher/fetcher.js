function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

export function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: new Headers( {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            return error;
        });
}