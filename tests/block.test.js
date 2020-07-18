// block.test.js
const Block = require('../js/block');
test('Block constructs with a model and actual JSON', () => {
  let testBlock = new Block('{"id" : "id_56789"}', '{"colors" : "#996633"}')
  expect(testBlock).toEqual({blockJSON: {"id" : "id_56789"}, themeJSON: {"colors" : "#996633"}});
});
test('target returns Block instance of blockJSON id', () => {
  let testBlock = new Block('{"id" : "id_56789"}', '{"colors" : "#996633"}')
  expect(testBlock.target()).toBe('id_56789');
});
