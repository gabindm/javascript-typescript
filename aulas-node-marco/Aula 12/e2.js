function EmailGenerator(u,d) {
    let username = u
    let domain = d
    /*const result = {
        getFullAddress: () => {
            return username + '@' + domain
        }
    }
    return result*/
    /*return {
        getFullAddress: () => {
            return username + '@' + domain
        }
    }*/
    return {
        'get full address': () => {
            return username + '@' + domain
        }
    }
}

//const fulano = EmailGenerator('fulano', 'gmail.com')
const gabriela = EmailGenerator('gabindm', 'gmail.com')

//console.log(fulano.getFullAddress())
//console.log(gabriela.getFullAddress())

console.log(gabriela['get full address']())