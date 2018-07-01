var min = document.querySelector('#min'),
		 send = document.querySelector('#send'),
		 result = document.querySelector('#hour'),
		 hour = 60;

		 min.focus();

		 send.addEventListener('click', function (e) {
		 	e.preventDefault();
		 	min.focus();
		 	min = min.value;

		 	//Рахуємо кількість годин
			if ( min < 60 ) {
					result.value = min;
			} else {
				for (i=1; i<=24; i++) {
					s = hour * i;
					if ( s <= min ) {
						god = i;
						hvy = min - s;//Рахуємо кількісто хвилин
					}
				}
				//Вивід результату
				result.value = god + ':' + hvy;
				min = document.querySelector('#min');
			}
		 });