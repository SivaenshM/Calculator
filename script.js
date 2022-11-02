// get a result a field through id and store it in a variable
let outputScreen = document.getElementById("result");

// Function Created to dispaly each a value according to the click event of the button
function display(num) {
    outputScreen.value+=num;
}
// Function Created to clear the display values completely
function erase() {
    outputScreen.value="";
    one.innerText = "";
    two.innerText = "";
    three.innerText = "";

}
// Function Created to remove the last entered button value from display
function del() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}
// Function Created for addition
function addition(one,two) {
    return Number(one) + Number(two);
}
// Function Created for subtraction
function subtract(one,three) {
    return Number(one) - Number(three);;
}
// Function Created for multiplication

function multiplication(one,two) {
    return Number(one) * Number(two);
}
// Function Created for divison

function divison(one,three) {
    return Number(one) / Number(three);;
}
// Function Created for modulus

function modulus(one,three) {
    return Number(one) % Number(three);;
}
// Function Created for get the display value for further calculation
function click() {
    one.innerText = outputScreen.value.slice(0,-1);           
    two.innerText = outputScreen.value.slice(-1);
    outputScreen.value="";
}
//field to show the current performing operation and inputs
let buttons = document.querySelectorAll('.button');
let one = document.getElementById("1");
let two  = document.getElementById("2");
let add = document.getElementById("add");
let three  = document.getElementById("3");
//calling predefined functional calls as per user click button events + - * / & %
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "+") {
            click()  
        }else if(e.target.innerHTML == "-") {
            click()
        }else if (e.target.innerHTML == "x") {
            click()
        }else if (e.target.innerHTML == "/") {
            click()
        }else if (e.target.innerHTML == "%") {
            click()
        }
        if(e.target.innerHTML == "=")   {
            //if the given values are valid input the math operation will taken and resilts will be displayed
            try {
                three.innerText = outputScreen.value;
                if(two.innerText=="+") {
                    outputScreen.value= addition(one.innerText,three.innerText)
                }else if (two.innerText=="-") {
                    outputScreen.value= subtract(one.innerText,three.innerText)
                }else if (two.innerText=="*") {
                    outputScreen.value= multiplication(one.innerText,three.innerText)
                }else if (two.innerText=="/") {
                    outputScreen.value= divison(one.innerText,three.innerText)
                }else if (two.innerText=="%") {
                    outputScreen.value= modulus(one.innerText,three.innerText)
                }
            }
            //for wrong inputs alert the user with message
            catch(err) 
            {
                alert("Only numbers are allowed")
            }
            
        }else if (e.target.innerHTML == "%")    {
            outputScreen.value= outputScreen.value ;

        }
    })
})
