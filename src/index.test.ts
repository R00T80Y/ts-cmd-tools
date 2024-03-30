import { assert, it } from 'vitest';

import { init } from './index';

it('Demo test', async () => {
  assert.equal(await init(), 0);
});
