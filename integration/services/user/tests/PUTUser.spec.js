import * as Requests from '../../../helpers/requests.request';

const payloadUser = require('../payloads/user.json');
const UserBaseUrl = 'users';


describe('PUT User', () => {

    before(() => {      
            Requests.addPayload(UserBaseUrl, payloadUser);
    });

    it('Updates an user by Id', () => {
        var payloadUserUpdated = payloadUser;
        payloadUserUpdated.name = "Leanne Graham";

        Requests.updatePayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`, payloadUserUpdated).should((responsePutUser) => {
            expect(responsePutUser.status).to.eq(200);
            Requests.getPayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`).should((responseGetUserByUsername) => {
                if(responseGetUserByUsername.status == 200){
                    expect(responseGetUserByUsername.body.name).to.eq(payloadUserUpdated.name);
                }
            });
        });
    });

    after(() => {
        Requests.deletePayloadByCode(`${UserBaseUrl}/${payloadUser.Id}`);
    });

});