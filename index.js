const saturdayFun = (n="roller-skate") => {
    return `This Saturday, I want to ${n}!`
}

const mondayWork = (n="go to the office") => `This Monday, I will ${n}.`

const wrapAdjective = (style="*") => {
    return (adj="||") => `You are ${style}${adj}${style}!`
}

const Calculator = {
    add: function(x, y) {return x + y},
    subtract: function(x, y) {return x - y},
    multiply: function(x, y) {return x * y},
    divide: function(x, y) {return x / y}
};

const actionApplyer = (n, arr) => {
    if (arr.length === 0) return n;
    let a = n;
    for (let num of arr) {
        a = num(a)
    }
    return a
}