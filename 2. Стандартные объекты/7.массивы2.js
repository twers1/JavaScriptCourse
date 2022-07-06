// Условие: В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания. Вам нужно составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива), затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, преобразовав в строку. Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!

// Sample Input: 4326 297515
// Sample Output: 5157926234Иванов
// Решение: 
function testArray(a, b) {
    let myArray = new Array()
    let ab = a+''+b
    for (let i = 0; i < ab.length; i++)
    {
        myArray[i] = ab.charAt(i)
    }
    myArray.unshift('Иванов') 
    return myArray.reverse().join('')
}
