let box=document.querySelector('.box');
let elementWidth=box.clientWidth;
let leftPos=0;
function rengiDeyis(){
    box.style.background='black'
}

function olcunuDeyis(){
    box.style.width='900px'
}

function hereketEletdir(){
    box.style.left='200px'
}

function yoxOlsun(){
    box.style.opacity='0'
}
function geriGelsin(){
    box.style.opacity='1'
}

function daimiHereketEle(){
    box.style.left=`${leftPos}px`
    leftPos+=1;
    if(leftPos>(window.innerWidth-elementWidth)){
        clearInterval(interval)
    }
    console.log(`letfPos=${leftPos}`)
}

let interval=setInterval(daimiHereketEle,1) 