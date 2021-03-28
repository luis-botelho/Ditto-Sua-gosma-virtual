function touchditto(){
    var name = prompt("Qual é seu nome ?", "Digite seu nome aqui.")
    if (name) {
        alert("Pazer em te conhecer ," + name + "!");
        document.getElementById("dittoimg").src = "img/ditto2.png";
    }
}