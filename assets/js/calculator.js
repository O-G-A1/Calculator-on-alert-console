
let permission = confirm("Do you want to perform basic calculations?");

if(permission===true){
    let num1 = parseFloat(prompt("Enter your first number"));
    let operator = prompt("What operation would you like to do? \nChoose between +, -, *, /" );
    let num2 = parseFloat(prompt("Enter your second number"));
    
    var result;
    
    switch(operator){
        case "+":
        result=num1+num2;
        alert("The addition of " + num1 + " and " + num2 + " = " + result); 
        console.log("The addition of " + num1 + " and " + num2 + " = " + result);
    
        break;
    
        case "*":
        result=num1*num2;
        alert("The multiplication of " + num1 + " and " + num2 + " = " + result); 
        console.log("The multiplication of " + num1 + " and " + num2 + " = " + result);
    
        break;
    
        case "-":
        if(num1>num2){
            result=num1-num2;
            alert("The subtraction of " + num2 + " from " + num1 + " = " + result); 
            console.log("The subtraction of " + num2 + " from " + num1 + " = " + result);
        }
        else if(num2>num1){
            result=num1-num2;
            alert("You will get a negative value when you subtract a big value from a small one. " + "Your result is  " + result);
            console.log("You will get a negative value when you subtract a big value from a small one. " + "Your result is  " + result);
        }
        break;
    
        case "/":
            if(num2>0){
                result=num1/num2;
                alert("The division of " + num1 + " by " + num2 + " is " + result);
                console.log("The division of " + num1 + " by " + num2 + " is " + result);
            }
            else if(num2 ===0){
            result=num1/num2;
            alert("Error! The result of dividing a value by zero is infinity, try again with a number greater than 0");
            console.log("Error! The result of dividing a value by zero is infinity, try again with a number greater than 0");
        
            }
    
    }
    




}


