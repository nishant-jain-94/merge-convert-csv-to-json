const fs = require('fs');
const mock = require('mock-fs');
const { mergeUsers } = require('../../lib/mergeUsers');

beforeAll(() => mock({
  '/tmp/a.users.csv': 'username,email,organization,password\ntommy.jones,tommy.jones@northwindtraders.com,NorthwindTraders,password@123\n',
  '/tmp/b.users.csv': 'username,email,organization,password\nanne.frank,anne.frank@northwindtraders.com,NorthwindTraders,password@123\n',
  '/tmp/users.json': '',
}));

test('Test Merge Groups', (done) => {
  const userFiles = [
    '/tmp/a.users.csv',
    '/tmp/b.users.csv',
  ];

  const testCb = (err) => {
    const expected = {
      'tommy.jones@northwindtraders.com': {
        username: 'tommy.jones',
        email: 'tommy.jones@northwindtraders.com',
        organization: 'NorthwindTraders',
        password: 'password@123',
      },
      'anne.frank@northwindtraders.com': {
        username: 'anne.frank',
        email: 'anne.frank@northwindtraders.com',
        organization: 'NorthwindTraders',
        password: 'password@123',
      },
    };
    const actual = JSON.parse(fs.readFileSync('/tmp/users.json', 'utf8'));
    expect(actual).toMatchObject(expected);
    done(err);
  };

  mergeUsers(userFiles, '/tmp/users.json', testCb);
});

afterAll(() => {
  mock.restore();
});
