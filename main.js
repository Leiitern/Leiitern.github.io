var num = 1;

function adelante(){
    num++;
    if(num > 22)
        num = 1;
    var foto = document.getElementById("foto");
    foto.src = "foto" + num + ".jpeg";
}

function atras(){
    num--;
    if(num < 1)
        num = 22;
    var foto = document.getElementById("foto");
    foto.src ="foto" + num + ".jpeg";
}
