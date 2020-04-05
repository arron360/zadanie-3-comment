let money = +prompt("Ваш бюджет на месяц?",""); // + перевод в число
let	data = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {  // объект 
	budget: money,
	timeData: data,
	expenses: {},  // объект в объекте 
	optionalExpenses: {},
	income: [], // массив
	savings:false
};


for (let i = 0; i < 2; i++) {  // цикл шаг +1 до 2 , спрашивает два вопроса по два раза 
	let a = prompt("Введите обязательную статью расходов в этом месяце","");
	let	b = prompt("Во сколько обойдется?", "");	

if ((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50 ) {
		console.log("done"); // проверка на ввод , и перевод в строку
		appData.expenses[a] = b; // идет в в объект appData , в его внутренйи объет expenses [a] ключ б значение 
	} else {                            
        console.log ("bad result"); // если не прошел проверку
		i--; // возврат к началу цикла 
    }

};



appData.moneyPerDay=appData.budget/30 // добавление нового объекта в appData , ключ и значение 

alert("Ежедневный бюджет: " + appData.moneyPerDay ); // вывод значеняи объъекта 

if (appData.moneyPerDay < 100){
	console.log("Минимальный уровень достатка");

} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
	console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
	console.log("Высокий уровень достатка");
} else { 
	console.log ("Ошибка");
};