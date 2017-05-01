import portfinder from 'portfinder';

import defaultServerConfiguration from '../../conf/server-configuration';
import startServer from '../main/server';

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function findPort() {
    return new Promise((resolve, reject) => {
        portfinder.basePort = getRandomIntInclusive(1024, 65535);
        portfinder.getPort((err, port) => {
            if (err) {
                reject(err);
            } else {
                resolve(port);
            }
        });
    });
}

const withRunningServer = asyncTest => (
    async () => {
        const portNumber = await findPort();
        const serverConfiguration = defaultServerConfiguration;
        serverConfiguration.server.port = portNumber;

        const server = await startServer(serverConfiguration);
        try {
            await asyncTest(serverConfiguration.server);
        } finally {
            await server.stop();
        }
    }
);

export default withRunningServer;
