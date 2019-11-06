const fs = require('fs');
const mock = require('mock-fs');
const { mergeUsers } = require('../../utils/mergeUsers');

beforeAll(() => {
  return mock({
    '/tmp/a.users.csv': 'username,email,organization,password\nsachin.grover,sachin@gmail.com,StackRoute,password@123\n',
    '/tmp/b.users.csv': 'username,email,organization,password\nsagar.patke,sagar.patke@gmail.com,StackRoute,password@123\n',
    '/tmp/users.json': '',
  })
});

test('Test Merge Groups', (done) => {
  const userFiles = [
    '/tmp/a.users.csv',
    '/tmp/b.users.csv',
  ];

  const testCb = (err) => {
    const expected = {
      'sachin@gmail.com': {
        username: 'sachin.grover',
        email: 'sachin@gmail.com',
        organization: 'StackRoute',
        password: 'password@123',
      },
      'sagar.patke@gmail.com': {
        username: 'sagar.patke',
        email: 'sagar.patke@gmail.com',
        organization: 'StackRoute',
        password: 'password@123',
      }
    };
    const actual = JSON.parse(fs.readFileSync('/tmp/users.json', 'utf8'));
    expect(actual).toMatchObject(expected);
    done(err);
  }

  mergeUsers(userFiles, '/tmp/users.json', testCb);
});

afterAll(() => {
  mock.restore();
});
