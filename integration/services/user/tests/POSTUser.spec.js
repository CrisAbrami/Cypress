import * as Requests from '../../../helpers/requests.request';

const payloadUser = require('../../user/payloads/user.json');
const UserBaseUrl = 'users';

describe('POST User', () => {

    before(() => {
        
    });

    it('Creates an user', () => {
        Requests.addPayload(UserBaseUrl, payloadUser).should((responseAddUser) => {
            expect(responseAddUser.status).to.eq(201);
        });
    });

    after(() => {
        Requests.deletePayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`);
    });

});