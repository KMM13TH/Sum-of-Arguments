function sumAll() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        return sum;
    }

}

document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88);

var value = Math.sin(45);
document.write("Sin 45 is : " + value + "<br>");
var value = Math.cos(45);
document.write("Cos 45 is : " + value1 + "<br>");
var value = Math.tan(45);
document.write("Tan 45 is : " + value2 + "<br>");