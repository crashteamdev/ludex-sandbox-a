const test = require("node:test");
const assert = require("node:assert");

test("always fails", () => {
  assert.strictEqual(1, 2);
});
