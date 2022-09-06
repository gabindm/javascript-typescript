const fulano = {
    username: 'fulano',
    domain: 'gmail.com',
    getFullAdress: (item) => {
        return item.username + '@' + item.domain
    }
}

const sicrano = {
    username: 'sicrano',
    domain: 'hotmail.com',
    getFullAdress: (item) => {
        return item.username + '@' + item.domain
    }
}

//console.log(fulano.getFullAdress(fulano))
console.log(sicrano.getFullAdress(sicrano))
console.log(sicrano.getFullAdress(fulano))
//console.log(fulano)