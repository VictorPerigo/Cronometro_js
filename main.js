var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var começar = document.getElementById('começar');

var cronometroseg;
var minutoatual;
var segundoatual;

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
})