function getPayload(token){
    var payload = token.split('.')[1]; //pegar a segunda parte do token
    return JSON.parse(window.atob(payload)); //atob decodifica uma string base64
}

export { getPayload };