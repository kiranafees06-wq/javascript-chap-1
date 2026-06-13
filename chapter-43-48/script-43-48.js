// prob # 01

function next(){
    alert('You are leaving this page');
}

function purchase(){
    alert('Thanks for purchasing a phone from us');
}

// let buttn = document.getElementsByTagName('button');
function deletePart(btn){
btn.parentElement.parentElement.remove();
}

// counter
let count = 0;

function increment(){
    count++;
    document.getElementById('counter').innerHTML = count;
}

function decrement(){
    if (count > 0) {
        count--;
        document.getElementById('counter').innerHTML = count;
    }
}