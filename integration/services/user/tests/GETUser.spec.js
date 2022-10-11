import * as Requests from '../../../helpers/requests.request';

const payloadUser = require('../payloads/user.json');
const UserBaseUrl = 'users';

describe('GET User', () => {

    before(() => {

            Requests.addPayload(UserBaseUrl, payloadUser)
       
    });

    it('Get all users', () => {
        Requests.getAllPayloads(UserBaseUrl).should((responseGetAllUsers) => {
            expect(responseGetAllUsers.status).to.eq(200);
            expect(responseGetAllUsers.body).to.be.not.null;
        });
    });

    it('Get user by Id', () => {
        Requests.getPayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`).should((responseGetUserById) => {
            expect(responseGetUserById.status).to.eq(200);
            expect(responseGetUserById.body).to.be.not.null;
            expect(responseGetUserById.body.username).to.eq(payloadUser.username);
            expect(responseGetUserById.body.name).to.eq(payloadUser.name);
        });
    });

    after(() => {
        Requests.deletePayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`);
    });

});