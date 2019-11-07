const mock = require('mock-fs');

const { concatFiles } = require('../../lib/concatFiles');

beforeAll(() => {
  return mock({
    '/tmp/a.csv': 'username,email,organization,password\nsachin.grover,sachin@gmail.com,StackRoute,password@123\n',
    '/tmp/b.csv': 'username,email,organization,password\nsagar.patke,sagar.patke@gmail.com,StackRoute,password@123\n',
  });
});

test('Given set of csv files it should return the merged json', (done) => {
  const testCb = (err, values) => {
    const userSachin = {
      username: 'sachin.grover',
      email: 'sachin@gmail.com',
      organization: 'StackRoute',
      password: 'password@123',
    };

    const userSagar = {
      username: 'sagar.patke',
      email: 'sagar.patke@gmail.com',
      organization: 'StackRoute',
      password: 'password@123',
    };
    const expected = [userSachin, userSagar];
    expect(values).toEqual(expect.arrayContaining(expected));
    done(err);
  };
  concatFiles(['/tmp/a.csv', '/tmp/b.csv'])(testCb);
});

test('Given a non existing path it should throw error', (done) => {
  const testCb = (err, values) => {
    if (err) done();
  };
  concatFiles(['/tmp/d.csv'])(testCb);
});

afterAll(async () => {
  mock.restore();
});
