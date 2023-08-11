function velocidade(){
var vel = document.getElementById('vel');
var vl = document.getElementById('vla');
var mlt = document.getElementById('multa');
var atc = document.getElementById('atencao');
var ve = Number(vel.value)
if (ve > 60) {
    vl.innerHTML = `A atual velocidade e ${ve}.`;
    mlt.innerHTML = `Você foi multado pelo excesso de velocidade.`;
    atc.innerHTML = "Aviso! Você esta ultrapassando a velocidade.";
}
else if (ve == 60){
    vl.innerHTML = `A atual velocidade e ${ve}.`;
    mlt.innerHTML = "Você ainda não foi multado.";
    atc.innerHTML = "sem aviso.";
}
else{
    vl.innerHTML = `A atual velocidade e ${ve}.`;
    mlt.innerHTML = `Você ainda não foi multado.`;
    atc.innerHTML = "sem aviso.";
}
}
