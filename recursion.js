function power_(num1,num2){
    if (num2 == 1){
        return num1;
    }
    else {
        return num1 * power_(num1,num2-1);
    }
}

x = power_(2,3);
console.log(x)