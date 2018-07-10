//Функція обрахунку годин та хвилин
function convert(a){
	  hours = Math.trunc(a/60);
	  minutes = a % 60;
	  console.log(hours +":"+ minutes);
	}
var min = document.querySelector('#min'),
	minutes, hours,	a,
	send = document.querySelector('#send'),
	result = document.querySelector('#res'),
	hour = 60,
	res = document.querySelector('#res');
	

min.focus();

send.addEventListener('click', function (e) {
 e.preventDefault();
 minutes = min.value;

 //Рахуємо кількість годин
if ( minutes < hour ) {
		return result.value = minutes + ' ' + 'min';
} else {
		a = minutes; //Берем значення поля min
		convert(a); // надаєм фунцкції значення поля мін зі змінної а
		//Вивід результату
		if (minutes < 10 ) {
			result.value = hours + ':' + 0 + minutes;
		} else {
			result.value = hours + ':' + minutes;
			}
	}
});


/*for (i=1; i<=24; i++) {
	s = hour * i;
	if ( s <= min ) {
		god = i;
		hvy = min - s;//Рахуємо кількісто хвилин
	}
}*/