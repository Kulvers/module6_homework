const expTon = (x, n) => {
    if (x <= 0) throw new Error("Ошибка! Только положительные числа!");
    return Math.pow(x, n);
};

console.log(expTon(3, 2));