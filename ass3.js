document.getElementById("fact_while").onclick = function(){

    let fact = 1;
    let i = 1;
    let n;
    n = Number(document.getElementById("n1").value);
    
    while(i <= n) {
    fact = fact * i;
    i++; 
    }
 console.log(n1)

 document.getElementById("result_fact").value = fact;
}

document.getElementById("sum_dowhile").onclick = function(){

    let sum = 0;
    let i = 1;
    let n;
    n = Number(document.getElementById("n2").value);
    
    do{
        sum = sum + i;
        i++;
    }
    while(i <= n)
 console.log(n2)

 document.getElementById("result_sum").value = sum;
}

document.getElementById("avg_for").onclick = function(){

    let sum = 0;
    let i = 1;
    let n;
    n = Number(document.getElementById("n3").value);
    
    for(i = 0; i <= n; i++){
        sum = sum + i;
    }
    let avg = sum/n;
 console.log(n3)

 document.getElementById("result_avg").value = avg;
}