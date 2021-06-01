import AccountServices from './AccountServices';

// test by passing all SignUp data
const data = {
  first_name: 'menna',
  last_name: 'kamel',
  age: '22',
  email: 'menna@gmail.com',
  password: '11111111111111111',
};
test('Correct SignUp data', () => {
  expect(AccountServices.addUser(data)).toBeTruthy();
});

// test by passing all Login data
const info = {
  email: 'menna@gmail.com',
  password: '11111111111111111',
};
test('Correct Login data', () => {
  expect(AccountServices.LoginUser(info)).toBeTruthy();
});

// test by passing all correct email
const emailToResetPassword = {
  email: 'menna@gmail.com',

};
test('Correct Login data', () => {
  expect(AccountServices.emailToResetPassword(emailToResetPassword)).toBeTruthy();
});

// test by passing correct new password
const newPassword = {
  password: '11111111111111111',
};
test('Correct new password', () => {
  expect(AccountServices.addNewPassword(newPassword)).toBeTruthy();
});
