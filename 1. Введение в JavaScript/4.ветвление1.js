// Условие: В этом задании вам нужно вписать в указанное место код, который будет присваивать переменной "х" значение суммы переменных "a" и "b" в случае если  a > b или их произведение в остальных случаях.
// Решение: 
function testIf(a, b) {
    var x;
    if (a>b){
        x=a+b;
    }
    else{
        x=a*b;
    }
    return x;
}
