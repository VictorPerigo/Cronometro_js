var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var começar = document.getElementById('cronometro');
var temporizador = document.getElementById('temporizador');

var minutoatual;
var segundoatual;

var minutodesejado;
var segundodesejado;

var interval;

for(var i = 0; i<=60 ; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>' ;
}

for(var i = 1; i<=60 ; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>' ;
}

começar.addEventListener('click',function(){
    minutoatual  = minutos.value;
    segundoatual = segundos.value;
    display.childNodes[1].innerHTML = minutoatual + ":"+segundoatual;

    interval = setInterval(function(){

        segundoatual--;
        if(segundoatual <=0 ){
            if(minutoatual>0){
                minutoatual--;
                segundoatual = 59;
            }else{
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoatual + ":"+segundoatual;
    },1000);
});

 temporizador.addEventListener('click',function(){
    var minutoatual = 0;
    var segundoatual = 0;
    var minutodesejado = minutos.value;
    var segundodesejado = segundos.value
    display.childNodes[1].innerHTML = minutoatual +':'+segundoatual;
 
interval = setInterval(function(){
    if(segundoatual!==segundodesejado){
    if(minutoatual!==minutodesejado){
        segundoatual++;}}
        if(segundoatual >=59 ){
           minutoatual++;
            segundoatual = 0;

        }else if(minutoatual==minutodesejado && segundoatual==segundodesejado){
                clearInterval(interval);
                document.getElementById("sound").play();

            }
        
        display.childNodes[1].innerHTML = minutoatual + ":"+segundoatual;
    },1000);

});