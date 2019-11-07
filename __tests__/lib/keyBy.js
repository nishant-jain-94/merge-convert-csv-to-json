const { keyBy } = require('../../lib/keyBy');

test('listToMap :: Should convert the listToMap', (done) => {
  const users = [
    {
      username: 'sachin.grover',
      email: 'sachin.grover@stackroute.in',
      organization: 'StackRoute',
      password: 'password@123',
    },
  ];
  const testCb = (err, actualValue) => {
    const expectedValue = {
      'sachin.grover@stackroute.in': {
        username: 'sachin.grover',
        email: 'sachin.grover@stackroute.in',
        organization: 'StackRoute',
        password: 'password@123',
      },
    };
    expect(actualValue).toMatchObject(expectedValue);
    done(err);
  };
  keyBy('email')(users, testCb);
});
