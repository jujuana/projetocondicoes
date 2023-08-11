function nacioenviar(){
    var p = document.getElementById('txt');
    var res = document.getElementById('txtr');
    p.value = p.value.toLowerCase();
    if(p.value == 'Brasil'){
        res.innerHTML = ("Você é Brasileiro")
    }
    else{
        res.innerHTML = ("Você é estrangeiro")
    }                                  
}