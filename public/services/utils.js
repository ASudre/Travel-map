import config from '../config/config';

function fetchQuery(query, variables) {
    return fetch(`${config.server.baseUrl}/api`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

export default {
    fetchQuery: fetchQuery,
};