import { permutations,findOddInt,countSmileys } from './main';

it('Permutations case1', () => {
  expect(permutations('a')).toEqual(['a']);
});

it('Permutations case2', () => {
  expect(permutations('ab')).toEqual([ 'ab', 'ba' ]);
});

it('Permutations case3', () => {
  expect(permutations('abc')).toEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
});

it('Permutations case4', () => {
  expect(permutations('aabb')).toEqual([ 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa' ]);
});

it('Find odd int case1', () => {
  expect(findOddInt([7])).toEqual(7)
})

it('Find odd int case2', () => {
  expect(findOddInt([0])).toEqual(0)
})

it('Find odd int case3', () => {
  expect(findOddInt([1, 1, 2])).toEqual(2)
})

it('Find odd int case4', () => {
  expect(findOddInt([0, 1, 0, 1, 0])).toEqual(0)
})

it('Find odd int case5', () => {
  expect(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4)
})

it('Count smileys case1', () => {
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toEqual(2)
})

it('Count smileys case2', () => {
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3)
})

it('Count smileys case3', () => {
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1)
})