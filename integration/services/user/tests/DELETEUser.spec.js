import * as Requests from '../../../helpers/requests.request';

const payloadUser = require('../payloads/user.json');
const UserBaseUrl = 'users';

describe('DELETE User', () => {

    before(() => {
        
            Requests.addPayload(UserBaseUrl, payloadUser);
       
    });

    it('Delete an existent user by username', () => {
        Requests.deletePayloadByCode(`${UserBaseUrl}/${payloadUser.userName}`).should((responseDeleteUser) => {
            expect(responseDeleteUser.status).to.eq(200);
        });
    });

});