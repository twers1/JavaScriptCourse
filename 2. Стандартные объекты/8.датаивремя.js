// Условие: В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17". Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
// Решение: 
function testDateTime(a, b) {
    let date1 = new Date(a);
    let date2 = new Date(b);
    let daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    if (date1 > date2)
        return daysArr[date1.getDay()];
    else
        return daysArr[date2.getDay()];
}
