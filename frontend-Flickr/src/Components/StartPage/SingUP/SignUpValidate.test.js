const SignUpValidate = require('./SignUpValidate');

// test by passing all data
const data = {
  firstname: 'menna',
  lastname: 'kamel',
  age: '22',
  emailaddress: 'menna@gmail.com',
  password: '11111111111111111',
};
test('complete all data', () => {
  expect(SignUpValidate(data)).toEqual({});
});

// test by passing no data
const allNull = {
  firstname: '',
  lastname: '',
  age: '',
  emailaddress: '',
  password: '',
};
test('missing all data', () => {
  expect(SignUpValidate(allNull)).toEqual({
    firstname: 'Required',
    lastname: 'Required',
    age: 'Required',
    emailaddress: 'Required',
    password: 'Required',
  });
});

// test by passing complete data with invalid email
const invalideEmail = {
  firstname: 'ahmed',
  lastname: 'kamel',
  age: '30',
  emailaddress: 'ahmedgmail',
  password: 'ggggggggggggggggg',
};
test('email is not valid', () => {
  expect(SignUpValidate(invalideEmail)).toEqual({
    emailaddress: 'invalid email',
  });
});

// test by passing complete data with short password
const invalidePassword = {
  firstname: 'sara',
  lastname: 'osama',
  age: '21',
  emailaddress: 'sara@gmail.com',
  password: 'mmmm',
};
test('password is too short', () => {
  expect(SignUpValidate(invalidePassword)).toEqual({
    password: 'Please use at least: 12 characters',
  });
});
