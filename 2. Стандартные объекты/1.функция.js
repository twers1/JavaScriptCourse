// Условие: Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом. Основная сложность задачи заключается в том, что ее необходимо решить с использованием рекурсии.
// Решение: 
function my_function(n) {
      if (n <= 1) return 1;
        return my_function(n-1) + " " + n;
}
