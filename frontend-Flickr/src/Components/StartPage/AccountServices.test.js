import AccountServices from './AccountServices';

// test by passing all Login data
const data = {
  first_name: 'menna',
  last_name: 'kamel',
  age: '22',
  email: 'menna@gmail.com',
  password: '11111111111111111',
};
test('complete Login data', () => {
  expect(AccountServices.addUser(data)).toBeTruthy();
});
