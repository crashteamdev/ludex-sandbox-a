require('node:test')('OPS-005 controlled failure', () => { throw new Error('expected fixture failure'); });
