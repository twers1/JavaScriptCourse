// Условие: В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s), а вторым - случайная подстрока(переменная sub_s), которую нужно использовать в качестве шаблона регулярного выражения. Вам нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой.
// Sample Input 1:Andsirdaarrevarariarewbutovearrmararan ar
//Sample Output 1: ar,ar,ar,ar,ar,ar,ar
// Решение:
function testRegExp(s, sub_s) {
var arr = s.match( new RegExp(sub_s, 'g') ) || [];
return arr.join();
}
