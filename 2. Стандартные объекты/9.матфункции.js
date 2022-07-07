// Условие: В этом задании в нашу функцию передается угол в градусах. Вам нужно вернуть из функции значение его синуса. Не забывайте, что тригонометрические функции в JavaScript принимают аргументы только в радианах!
// Решение: 
function testMath(a) {
    var radian = a*Math.PI/180;
    return Math.sin(radian);
}
