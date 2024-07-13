// ? тип enum
// ! Создайте перечисление (enum) `DaysOfWeek`, содержащее названия дней недели (понедельник, вторник и т.д.). Выведите все значения этого перечисления в консоль
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A"] = 0] = "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
    DaysOfWeek[DaysOfWeek["\u0432\u0442\u043E\u0440\u043D\u0438\u043A"] = 1] = "\u0432\u0442\u043E\u0440\u043D\u0438\u043A";
    DaysOfWeek[DaysOfWeek["\u0441\u0440\u0435\u0434\u0430"] = 2] = "\u0441\u0440\u0435\u0434\u0430";
})(DaysOfWeek || (DaysOfWeek = {}));
function Days(A, B, C) {
    console.log(A, B, C);
}
console.log(Days('понедельник', 'вторник', 'среда'));
// ! Создайте перечисление Months, содержащее названия месяцев (январь, февраль и т.д.). 
// ! Напишите функцию, которая принимает в качестве аргумента число от 1 до 12 и возвращает название соответствующего месяца в консоль.
var Months;
(function (Months) {
    Months[Months["\u042F\u043D\u0432\u0430\u0440\u044C"] = 1] = "\u042F\u043D\u0432\u0430\u0440\u044C";
    Months[Months["\u0424\u0435\u0432\u0440\u0430\u043B\u044C"] = 2] = "\u0424\u0435\u0432\u0440\u0430\u043B\u044C";
    Months[Months["\u041C\u0430\u0440\u0442"] = 3] = "\u041C\u0430\u0440\u0442";
    Months[Months["\u0410\u043F\u0440\u0435\u043B\u044C"] = 4] = "\u0410\u043F\u0440\u0435\u043B\u044C";
    Months[Months["\u041C\u0430\u0439"] = 5] = "\u041C\u0430\u0439";
    Months[Months["\u0418\u044E\u043D\u044C"] = 6] = "\u0418\u044E\u043D\u044C";
    Months[Months["\u0418\u044E\u043B\u044C"] = 7] = "\u0418\u044E\u043B\u044C";
    Months[Months["\u0410\u0432\u0433\u0443\u0441\u0442"] = 8] = "\u0410\u0432\u0433\u0443\u0441\u0442";
    Months[Months["\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C"] = 9] = "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
    Months[Months["\u041E\u043A\u0442\u044F\u0431\u0440\u044C"] = 10] = "\u041E\u043A\u0442\u044F\u0431\u0440\u044C";
    Months[Months["\u041D\u043E\u044F\u0431\u0440\u044C"] = 11] = "\u041D\u043E\u044F\u0431\u0440\u044C";
    Months[Months["\u0414\u0435\u043A\u0430\u0431\u0440\u044C"] = 12] = "\u0414\u0435\u043A\u0430\u0431\u0440\u044C";
})(Months || (Months = {}));
function chislo(number) {
    console.log(Months[number]);
}
chislo(11);
// ! Создайте перечисление `Colors`, содержащее несколько цветов (красный, синий, зеленый и т.д.). 
// ! Напишите функцию, которая принимает в качестве аргумента цвет и выводит в консоль сообщение вида "Выбран [цвет] цвет".
var Colors;
(function (Colors) {
    Colors[Colors["\u043A\u0440\u0430\u0441\u043D\u044B\u0439"] = 0] = "\u043A\u0440\u0430\u0441\u043D\u044B\u0439";
    Colors[Colors["\u0441\u0438\u043D\u0438\u0439"] = 1] = "\u0441\u0438\u043D\u0438\u0439";
    Colors[Colors["\u0437\u0435\u043B\u0435\u043D\u044B\u0439"] = 2] = "\u0437\u0435\u043B\u0435\u043D\u044B\u0439";
})(Colors || (Colors = {}));
function color(A) {
    console.log(Colors[A]);
}
color(0);
// ! Создайте перечисление Planets, содержащее названия планет (Меркурий, Венера, Земля и т.д.). 
// ! Напишите функцию, которая принимает в качестве аргумента название планеты и возвращает порядковый номер этой планеты в солнечной системе.
var Planets;
(function (Planets) {
    Planets[Planets["\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439"] = 0] = "\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439";
    Planets[Planets["\u0412\u0435\u043D\u0435\u0440\u0430"] = 1] = "\u0412\u0435\u043D\u0435\u0440\u0430";
    Planets[Planets["\u0417\u0435\u043C\u043B\u044F"] = 2] = "\u0417\u0435\u043C\u043B\u044F";
})(Planets || (Planets = {}));
function planet(b) {
    console.log(Planets[b]);
}
planet(Planets[2]);
// ! Создайте перечисление `Fruits`, содержащее названия фруктов (яблоко, груша, апельсин и т.д.)
// ! Напишите функцию, которая принимает в качестве аргумента фрукт и проверяет, входит ли он в перечисление `Fruits`. 
// ! Если фрукт есть в перечислении, выведите в консоль сообщение "Этот фрукт вкусный!". Если фрукта нет в перечислении, выведите сообщение "Неизвестный фрукт!".
var Fruits;
(function (Fruits) {
    Fruits["Apple"] = "Apple";
    Fruits["Banana"] = "Banana";
    Fruits["Qiwi"] = "Qiwi";
})(Fruits || (Fruits = {}));
function fruct(c) {
    if (c === Fruits.Banana) {
        console.log("Этот фрукт вкусный!");
    }
    else {
        console.log("Неизвестный фрукт!");
    }
}
fruct('Banana');
