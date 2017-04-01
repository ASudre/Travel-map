const routes =
    [
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply('Hello, world!');
            }
        },
        {
            method: 'GET',
            path: '/{name}',
            handler: (request, reply) => {
                reply('hello, ' + encodeURIComponent(request.params.name) + '!');
            },
        },
    ];

export default routes;