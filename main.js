const operator = ["+", "-", "*", "/"];
let myinput = "0";


function get_calc(myData) {
    if(myData== "=") {
        document.myForm.myLine.value = eval(document.myForm.myLine.value);　　
    } else if(myData == "C") {
        document.myForm.myLine.value = "0";
    } else if(document.myForm.myLine.value == "0") {    // 表示している値が「0」か？
        if(myData == ".") {                             // 入力された値が小数点
            document.myForm.myLine.value += myData;  
        } else {
            document.myForm.myLine.value = myData;　  
        }  
    } else if(operator.includes(myData)) {
        if(operator.includes(document.myForm.myLine.value.slice(-1))) {
            myinput= document.myForm.myLine.value.slice(0,-1);
            document.myForm.myLine.value = myinput + myData;
        } else {
            document.myForm.myLine.value += myData;
        }
    } else{
        document.myForm.myLine.value += myData;
        }
}