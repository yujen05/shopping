let db = [];

beforeAll(() => {
  // 테스트 전체 전에 1회 실행
  db = ['user1', 'user2'];
});

beforeEach(() => {
  console.log('테스트 시작');
});

afterEach(() => {
  console.log('테스트 종료');
});

afterAll(() => {
  db = [];
});

test('user1이 db에 포함되어 있어야 한다', () => {
  expect(db).toContain('user1');
});
