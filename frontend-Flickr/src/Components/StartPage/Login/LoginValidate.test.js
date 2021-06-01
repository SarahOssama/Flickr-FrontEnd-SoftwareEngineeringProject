const LoginValidate = require('./LoginValidate');

// test by passing all Login data
const data = {

  email: 'menna@gmail.com',
  password: '11111111111111111',
};
test('complete Login data', () => {
  expect(LoginValidate(data)).toEqual({});
});

// test by passing emipty login form
const allNull = {

  email: '',
  password: '',
};
test('missing all Login data', () => {
  expect(LoginValidate(allNull)).toEqual({

    email: 'Required',
    password: 'Required',
  });
});

// test by passing valid password with invalid email
const invalideEmail = {
  email: 'ahmedgmail',
  password: 'ggggggggggggggggg',
};
test('email in Login is not valid', () => {
  expect(LoginValidate(invalideEmail)).toEqual({
    email: 'invalid email',
  });
});

// test by passing valid email with invalid password
const invalidePassword = {

  email: 'sara@gmail.com',
  password: 'mmmm',
};
test('password in Login is too short', () => {
  expect(LoginValidate(invalidePassword)).toEqual({
    password: 'invalid password',
  });
});
