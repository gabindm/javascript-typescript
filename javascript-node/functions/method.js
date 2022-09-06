const fulano = {
  username: "fulano",
  domain: "gmail.com",
  getFullAdress: (item) => {
    return item.username + "@" + item.domain;
  },
};

console.log(fulano.getFullAdress(fulano));
