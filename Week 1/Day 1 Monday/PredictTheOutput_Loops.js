for(var num = 0; num < 15; num++) {
    console.log(num);
}

console.log("\n");

for(var i = 1; i < 10; i+=2) {
    if(i % 3 == 0) { // if you can divide i by 3
        console.log(i);
    }    
}

console.log("\n");

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
