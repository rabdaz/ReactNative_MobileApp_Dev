var x = 10;
var y = 5;
var output ="";
for(var i= 1; i<= y; i++){
    for(var j = 1; j<= i; j++){
        output += j+ " ";
    }
    console.log(output);
    output ="";
}
