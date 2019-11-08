const fs = require('fs');
const mock = require('mock-fs');
const { mergeGroups } = require('../../lib/mergeGroups');

beforeAll(() => mock({
  '/tmp/a.group.csv': 'group_name,group_description\ncgi-wave-1,A Group for entire CGI Wave 1\n',
  '/tmp/b.group.csv': 'group_name,group_description\nNorthwindTraders-mentors,Group Created for NorthwindTraders mentors\n',
  '/tmp/groups.json': '',
}));

test('Test Merge Groups', (done) => {
  const groupFiles = [
    '/tmp/a.group.csv',
    '/tmp/b.group.csv',
  ];

  const testCb = (err) => {
    const expected = {
      'cgi-wave-1': {
        group_name: 'cgi-wave-1',
        group_description: 'A Group for entire CGI Wave 1',
      },
      'NorthwindTraders-mentors': {
        group_name: 'NorthwindTraders-mentors',
        group_description: 'Group Created for NorthwindTraders mentors',
      },
    };
    const actual = JSON.parse(fs.readFileSync('/tmp/groups.json', 'utf8'));
    expect(actual).toMatchObject(expected);
    done(err);
  };

  mergeGroups(groupFiles, '/tmp/groups.json', testCb);
});

afterAll(() => {
  mock.restore();
});
