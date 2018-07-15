//Функція обрахунку годин та хвилин
function convert(a){
	  hours = Math.trunc(a/60);
	  minutes = a % 60;
	  console.log(hours +":"+ minutes);
	}
var min = document.querySelector('#min'),
		 send = document.querySelector('.send'),
		 reset = document.querySelector('.reset'),
		 result = document.querySelector('#hour'),
		 hour = 60;

		 min.focus();
		 result.value = '0' + ':' + '00';

		 send.addEventListener('click', function (e) {
		 	e.preventDefault();
		 	minutes = min.value;
 			if (~minutes.indexOf('.') || minutes < 0) {
			  result.value = 'Error';
			} else
		 	//Рахуємо кількість годин
			if ( minutes < hour ) {
					return result.value = minutes + ' ' + 'min';
			} else if ( minutes == '') {
				result.value = '0' + 'min';
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
		 //Подія reset для кнопки reset
		 reset.addEventListener('click', function (e) {
		 	e.preventDefault();
		 	min.value = '';
		 	result.value = '0' + ':' + '00';
		 	min.focus();
		 });


/*for (i=1; i<=24; i++) {
					s = hour * i;
					if ( s <= min ) {
						god = i;
						hvy = min - s;//Рахуємо кількісто хвилин
					}
				}*/