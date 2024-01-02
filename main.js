var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var addbtn = document.getElementById("add");
var numRes = [];
function Add(n1, n2) {
    return n1 + n2;
}
function printResult(obj) {
    console.log(obj.val, obj.timestamp);
}
addbtn.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = Add(+num1, +num2);
    numRes.push(result);
    console.log(result);
    printResult({ val: result, timestamp: new Date() });
});
