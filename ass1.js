document.getElementById("convert1").onclick = function(){
    
    let celsius;
    celsius = Number(document.getElementById("celsius").value);
    let f = (celsius*9/5) + 32;

    console.log(celsius)

    document.getElementById("result1").value = f;
}

document.getElementById("convert2").onclick = function(){
    
    let fahrenheit;
    fahrenheit = Number(document.getElementById("fahrenheit").value);
    let c = (fahrenheit-32) * 5/9;

    console.log(fahrenheit)

    document.getElementById("result2").value = c;
}

document.getElementById("convert3").onclick = function(){
    
    let meters;
    meters = Number(document.getElementById("meters").value);
    let feet = meters * 3.280;

    console.log(meters)

    document.getElementById("result3").value = feet;
}

document.getElementById("convert4").onclick = function(){
    
    let feet;
    feet = Number(document.getElementById("feet").value);
    let meters = feet * 0.305;

    console.log(feet)

    document.getElementById("result4").value = meters;
}