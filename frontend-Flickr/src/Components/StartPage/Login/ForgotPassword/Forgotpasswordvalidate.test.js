const Forgotpasswordvalidate = require('./Forgotpasswordvalidate');

// test by passing all data
const data = {

  email: 'menna@gmail.com',
};
test('correct email', () => {
  expect(Forgotpasswordvalidate(data)).toEqual({});
});

// test by passing emipty form
const Null = {

  email: '',
};
test('missing email', () => {
  expect(Forgotpasswordvalidate(Null)).toEqual({

    email: 'Required',
  });
});

// test by passing invalid email
const invalid = {
  email: 'mmmm@gmail',
};
test('invalid email', () => {
  expect(Forgotpasswordvalidate(invalid)).toEqual({

    email: 'invalid email',
  });
});
