/// <reference types="cypress" />

function addPayload(url, payload){
    return cy.request({
        method: 'POST',
        url: url,
        failOnStatusCode: false,
        body: payload
    })
}

function addMultiplePayloads(url, payloads){
    return cy.request({
        method: 'POST',
        url: url,
        failOnStatusCode: false,
        body: payloads
    })
}

function getAllPayloads(url){
    return cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false
    })
}

function getPayloadByCode(url){
    return cy.request({
        method: 'GET',
        url: url,
        failOnStatusCode: false
    })
}

function updatePayloadByCode(url, payload){
    return cy.request({
        method: 'PUT',
        url: url,
        failOnStatusCode: false,
        body: payload
    })
}

function updateWithoutPayload(url){
    return cy.request({
        method: 'PUT',
        url: url,
        failOnStatusCode: false
    })
}

function deletePayloadByCode(url){
    return cy.request({
        method: 'DELETE',
        url: url,
        failOnStatusCode: false
    })
}

export { addPayload, addMultiplePayloads, getAllPayloads, getPayloadByCode, updatePayloadByCode, deletePayloadByCode, updateWithoutPayload };