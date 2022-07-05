// Условие: В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами. Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
// Sample Input: [0, 1, 5, 3]  [3]
// Sample Output: 12
// Решение: 
function testArray(a, b) {
     const sum = (total, el) => total + el;
  return a.reduce(sum, 0) + b.reduce(sum, 0);
}
