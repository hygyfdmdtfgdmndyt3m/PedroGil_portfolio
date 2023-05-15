function chama() {
    //document.body.style.backgroundColor = "red";
    let a = 3;
    let b = 5;
    let soma = a + b;
    //alert("Soma igual a " + soma);
    console.log("SOMA IGUAL A " + soma)
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}

//conversão de temperatura
function exercicio2(){
    //alert("teste");
    let t = document.getElementById('temp').value;
    console.log("TEMP=" + t)
    let escala = document.getElementById("converter").value;
    console.log("PARA= " + escala);
    if(escala == "c"){
        //C = (F-32) * 5 /9
        resultado = (t-32)*5/9;
        document.getElementById("saida").innerHTML = temp
        t + "F vale" + resultado + "C"
    }
    else{
        resultado = (temp-32)*5/9;
        document.getElementById("saida").innerHTML = temp
        t + "C vale" + resultado + "F"
    }
}