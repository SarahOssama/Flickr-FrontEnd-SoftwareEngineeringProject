const SetnewpasswordValidate = require('./SetnewpasswordValidate');

// test by passing correct password
const data = {

  password: '11111111111111111',
};
test('correct new password', () => {
  expect(SetnewpasswordValidate(data)).toEqual({});
});

// test by passing emipty form
const allNull = {

  password: '',
};
test('missing all data', () => {
  expect(SetnewpasswordValidate(allNull)).toEqual({
    password: 'Required',
  });
});

// test by passing invalid password
const invalidePassword = {

  password: 'mmmm',
};
test('password is too short', () => {
  expect(SetnewpasswordValidate(invalidePassword)).toEqual({
    password: 'Please use at least: 12 characters',
  });
});
