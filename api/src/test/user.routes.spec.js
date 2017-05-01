/* eslint-disable no-undef */

import fetch from 'node-fetch';
import logger from '../../conf/logger';
import withRunningServer from './runningServer';
import User from '../main/models/User/User';

describe('Create user and add country', async () => {
    beforeAll(() => {
        try {
            User.remove({})
            .then(() => {
                logger.info('Database erased');
            });
        } catch (e) {
            logger.error('Failed to erase database :', e.message);
        }
    });

    it('Should create user', withRunningServer(async ({ baseUrl, port }) => {
        // Given
        const email = 'arthursudre@travelmap.com';
        const password = 'passw0rd';

        // When
        const response = await fetch(`${baseUrl}:${port}/api/user`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                }),
            },
        );

        // Then
        expect(response.status).toBe(200);
        const user = await response.json();
        expect(user).toHaveProperty('email');
        expect(user.email).toBeDefined();
        expect(user).toHaveProperty('password');
        expect(user.password).toBeDefined();
        expect(user).toHaveProperty('countries');
        expect(user.countries).toBeDefined();
        expect(user).toHaveProperty('_id');
        expect(user._id).toBeDefined();
    }));
});
