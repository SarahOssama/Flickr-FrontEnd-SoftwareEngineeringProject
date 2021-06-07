import AccountServices from './AccountServices';
// test by passing all SignUp data
const data = {
  first_name: 'sara',
  last_name: 'ossama',
  age: '22',
  email: 'menna.nawar99@gmail.com',
  password: 'Saraossama11111',
};
test('good Local SignUp request', () => {
  expect(AccountServices.addUser(data)).toBeTruthy();
});

test('good Back SignUp request', () => {
  expect(AccountServices.backaddUser(data)).toBeTruthy();
});

// test by passing passing correct email
const emailAddress = {
  email: 'menna.nawar@gmail.com',
};
test('good local SendVerificationLink request', () => {
  expect(AccountServices.CompleteSignup(emailAddress)).toBeTruthy();
});

test('good Back SendVerificationLink request', () => {
  expect(AccountServices.backCompleteSignup(emailAddress.email)).toBeTruthy();
});

// test by passing all Login data
const info = {
  email: 'menna.nawar@gmail.com',
  password: 'Mennakamel123456',
};

test('good Local Login request', () => {
  expect(AccountServices.LoginUser(info)).toBeTruthy();
});

test('good Back Login request', () => {
  expect(AccountServices.backLoginUser(info)).toBeTruthy();
});

// test by passing correct email
const email = {
  email: 'menna.nawar@gmail.com',
};
test('good Local EmailToresetPassword request', () => {
  expect(AccountServices.emailToResetPassword(email)).toBeTruthy();
});

test('good Back EmailToresetPassword request', () => {
  expect(AccountServices.backemailToResetPassword(email)).toBeTruthy();
});

// test by passing correct email
const ResendemailToReset = {
  email: 'menna.nawar@gmail.com',
};
test('good Local ResendEmailToReset request', () => {
  expect(AccountServices.ResendEmailsToReset(ResendemailToReset)).toBeTruthy();
});

test('good Back ResendEmailToReset request', () => {
  expect(AccountServices.backResendEmailsToReset(ResendemailToReset)).toBeTruthy();
});

// test by passing correct new password
const newPassword = {
  password: '11111111111111111',
};
test('good set new password request', () => {
  expect(AccountServices.addNewPassword(newPassword)).toBeTruthy();
});
