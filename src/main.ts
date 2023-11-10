// Test 1
export const permutations = (value: string) => {
  if (value) {
    const resultArr = [];
    const charArr = [];
    return permute(value.split(''), resultArr, charArr);
  }
  return [];
};

const permute = (input, resultArr, charArr) => {
  let i, char;
  for (i = 0; i < input.length; i++) {
    char = input.splice(i, 1)[0];

    charArr.push(char);

    if (input.length == 0) {
      resultArr.push(charArr.slice().join(''));
    }
    permute(input, resultArr, charArr);
    input.splice(i, 0, char);
    charArr.pop();
  }
  const uniqueArray = resultArr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return uniqueArray;
};

// console.log('permutations', permutations('a'));
// console.log('permutations', permutations('ab'));
// console.log('permutations', permutations('abc'));
// console.log('permutations', permutations('aabb'));

// Test 2
export const findOddInt = (values: number[]) => {
  for (let i = 0; i < values.length; i++) {
    const count = values.filter((item) => item === values[i]).length;
    if (count % 2 === 1) {
      return values[i];
    }
  }
  return -1;
};

// console.log('Find Odd Int', findOddInt([7]));
// console.log('Find Odd Int', findOddInt([0]));
// console.log('Find Odd Int', findOddInt([1, 1, 2]));
// console.log('Find Odd Int', findOddInt([0, 1, 0, 1, 0]));
// console.log(
//   'Find Odd Int',
//   findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]),
// );

// Test 3
const eyes = [':', ';'];
const noses = ['-', '~'];
const mouths = [')', 'D'];

export const countSmileys = (values: string[]) => {
  if (values.length > 0) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      const value = values[i].split('');
      if (value.length === 2) {
        if (eyes.includes(value[0]) && mouths.includes(value[1])) {
          count++;
        }
      } else if (value.length === 3) {
        if (
          eyes.includes(value[0]) &&
          noses.includes(value[1]) &&
          mouths.includes(value[2])
        ) {
          count++;
        }
      }
    }
    return count;
  }
  return 0;
};

// console.log('Count Smileys', countSmileys([':)', ';(', ';}', ':-D']));
// console.log('Count Smileys', countSmileys([';D', ':-(', ':-)', ';~)']));
// console.log('Count Smileys', countSmileys([';]', ':[', ';*', ':$', ';-D']));
