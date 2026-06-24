function checkEvenOdd() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
        result.style.color = "red";
    } 
    else if (num % 2 === 0) {
        result.innerHTML = num + " is an Even Number.";
        result.style.color = "green";
    } 
    else {
        result.innerHTML = num + " is an Odd Number.";
        result.style.color = "blue";
    }
}