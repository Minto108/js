function sum(...theArgs) {
    let total = 0;
    for(var arg of theArgs){
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3));

console.log(sum(1,2,3,4));