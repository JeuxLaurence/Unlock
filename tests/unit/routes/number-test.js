import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | number', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:number');
    assert.ok(route);
  });
});
