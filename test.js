import test from 'ava';
import fn from './';

test(async t => {
	const packStat = await fn('twifo');

	t.is(packStat.lastDay, '0 downloads');
});

