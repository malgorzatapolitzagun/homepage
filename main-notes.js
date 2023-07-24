const firstName = "Małgosia";
console.log(`Hej, jestem ${firstName} i witam Cię na mojej stronie :)`)

let wtfPlayground3
wtfPlayground3 = document.querySelector('.playground__wtf--js').innerHTML;
console.log(wtfPlayground3);
document.querySelector('.playground__wtf--js').innerHTML = 'JAVA SCRIPT'
wtfPlayground3 = document.querySelector('.playground__wtf--js').innerHTML;
console.log(wtfPlayground3);
console.log('Zmienione przez JS!');