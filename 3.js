var date = new Date('2023-05-14');
 switch (date.getMonth()) {
            case 1:
            case 2:
            case 12:
                res = "Зима";
                break;
            case 3:
            case 4:
            case 5:
                res = "Весна";
                break;
            case 6:
            case 7:
            case 8:
                res = "Лето";
                break;
            case 9:
            case 10:
            case 11:
                res = "Осень";
                break;
            default:
                res = "Нет такого месяца!";
        }
  let date2 = new Date(date.getFullYear(), 2, 0);

  if (date2.getDate() == 29) {
  	console.log('високосный');
  } else {
  	console.log('обычный');
  }
console.log(res);