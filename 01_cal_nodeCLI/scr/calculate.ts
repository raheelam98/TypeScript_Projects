console.log("Calculation");


function Add(num1 : number, num2 : number){
    let addresult = num1 + num2;
    return addresult;
}

function Subtract(num1 : number, num2 : number){
    let subresutl = num1 - num2;
    return subresutl;
}

function Multiply(num1 : number, num2 : number){
    let mulresult = num1 * num2;
    return mulresult;
}

function Divide(num1 : number, num2 : number){
    let divresult = num1 / num2;
    return divresult;
}

export{Add}
export{Subtract}
export{Multiply}
export{Divide}
