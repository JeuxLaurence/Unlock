import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | machines', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:machines');
    assert.ok(controller);
  });
});
