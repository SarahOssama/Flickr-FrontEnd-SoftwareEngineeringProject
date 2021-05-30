const SignUpValidate = require('./Validate');

// test by passing all data
const data = {
  first_name: 'menna',
  last_name: 'kamel',
  age: '22',
  email: 'menna@gmail.com',
  password: '11111111111111111',
};
test('complete all data', () => {
  expect(SignUpValidate(data)).toEqual({});
});

// test by passing no data
const allNull = {
  first_name: '',
  last_name: '',
  age: '',
  email: '',
  password: '',
};
test('missing all data', () => {
  expect(SignUpValidate(allNull)).toEqual({
    first_name: 'Required',
    last_name: 'Required',
    age: 'Required',
    email: 'Required',
    password: 'Required',
  });
});

// test by passing complete data with invalid email
const invalideEmail = {
  first_name: 'ahmed',
  last_name: 'kamel',
  age: '30',
  email: 'ahmedgmail',
  password: 'ggggggggggggggggg',
};
test('email is not valid', () => {
  expect(SignUpValidate(invalideEmail)).toEqual({
    email: 'invalid email',
  });
});

// test by passing complete data with short password
const invalidePassword = {
  first_name: 'sara',
  last_name: 'osama',
  age: '21',
  email: 'sara@gmail.com',
  password: 'mmmm',
};
test('password is too short', () => {
  expect(SignUpValidate(invalidePassword)).toEqual({
    password: 'Please use at least: 12 characters',
  });
});
