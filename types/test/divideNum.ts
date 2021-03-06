import * as RA from 'ramda-adjunct';

RA.divideNum(2, 1); // $ExpectType number
RA.divideNum(2.0, 1.0); // $ExpectType number
RA.divideNum(0, 2.0); // $ExpectType number
RA.divideNum(0.0, 2.0); // $ExpectType number
RA.divideNum(-0.0, 2.0); // $ExpectType number

RA.divideNum(2)(1); // $ExpectType number
RA.divideNum(2.0)(1.0); // $ExpectType number
RA.divideNum(0)(2.0); // $ExpectType number
RA.divideNum(0.0)(2.0); // $ExpectType number
RA.divideNum(-0.0)(2.0); // $ExpectType number

RA.divideNum('a', 'b'); // $ExpectError
RA.divideNum('a')('b'); // $ExpectError
RA.divideNum(1, undefined); // $ExpectError
RA.divideNum(1)(undefined); // $ExpectError
RA.divideNum(1, {}); // $ExpectError
RA.divideNum(1)({}); // $ExpectError
RA.divideNum({}, 1); // $ExpectError
RA.divideNum({})(1); // $ExpectError
