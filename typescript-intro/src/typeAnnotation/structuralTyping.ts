type VerifyUser = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUser = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'gabinmd', password: '1234' };
const sentUser = { username: 'gabinmd', password: '1234', permissions: 'Admin' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
