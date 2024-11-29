/* eslint-disable max-len */
import AccountServices from './AccountServices';

// const AccountServices = require('./AccountServices');

const data = {
  first_name: 'sara',
  last_name: 'ossama',
  age: '22',
  email: 'talatawf@gmail.com',
  password: 'Saraossama11111',
};
test('good Local SignUp request', async () => {
  expect(await AccountServices.addUser(data)).toBeTruthy();
});

test('good Back SignUp request', async () => {
  expect(await AccountServices.backaddUser(data)).toBeTruthy();
});

const emailAddress = {
  email: 'menna.nawar99@gmail.com',
};
test('good local SendVerificationLink request', async () => {
  expect(await AccountServices.CompleteSignup(emailAddress)).toBe();
});

test('good Back SendVerificationLink request', async () => {
  expect(await AccountServices.backCompleteSignup(emailAddress.email)).toEqual(201);
});

const info = {
  email: 'menna.nawar99@gmail.com',
  password: 'Mennakamel123456',
};

test('good Local Login request', async () => {
  expect(await AccountServices.LoginUser(info)).toBeTruthy();
});

test('good Back Login request', async () => {
  expect(await AccountServices.backLoginUser(info)).toBeTruthy();
});

const email = {
  email: 'menna.nawar99@gmail.com',
};
test('good Local EmailToresetPassword request', async () => {
  expect(await AccountServices.emailToResetPassword(email)).toBeTruthy();
});

test('good Back EmailToresetPassword request', async () => {
  expect(await AccountServices.backemailToResetPassword(email)).toBeTruthy();
});

const ResendemailToReset = {
  email: 'menna.nawar99@gmail.com',
};
test('good Local ResendEmailToReset request', async () => {
  expect(await AccountServices.ResendEmailsToReset(ResendemailToReset)).toBe();
});

test('good Back ResendEmailToReset request', async () => {
  expect(AccountServices.backResendEmailsToReset('menna.nawar99@gmail.com')).resolves.toEqual(200);
});

const newPassword = {
  password: '11111111111111111',
};
test('good set new password request', async () => {
  expect(await AccountServices.addNewPassword(newPassword)).toBeTruthy();
});
