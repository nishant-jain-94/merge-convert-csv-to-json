const { listToMapBy } = require('../../utils/listToMap');

test('listToMap :: Should convert the listToMap', (done) => {
  const users = [
    {
      username: 'sachin.grover',
      email: 'sachin.grover@stackroute.in',
      organization: 'StackRoute',
      password: 'password@123'
    }
  ];
  const testCb = (err, actualValue) => {
    const expectedValue = { "sachin.grover@stackroute.in": {
        username: 'sachin.grover',
        email: 'sachin.grover@stackroute.in',
        organization: 'StackRoute',
        password: 'password@123'
      } 
    };
    expect(actualValue).toMatchObject(expectedValue);
    done(err);
  }
  listToMapBy("email")(users, testCb)
});