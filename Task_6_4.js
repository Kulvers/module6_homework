function PrimeNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "is not correct!";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return " Составное";
            }
        }
        return " Простое";
    }
}

let randNum = Math.floor(Math.random() * 1000);
let p = PrimeNumber(randNum);
console.log("Число " + randNum  +  p);