const cardList = document.querySelector('.cardList');
buildBoard();
addCard('test');
specialCard('extraCard');

let intervalTwo = setInterval(function(){
    specialCard( cardList.children.length + 1)
}, 5000);
let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 1000);

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        point +=1;
        points.innerHTML = `${point}`;
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        clearInterval(intervalTwo);
    }
    if (e.target.classList.contains('inactive')){
        point +=2;
        points.innerHTML = `${point}`;
    }
    if (e.target.classList.contains('extraCard')){
        point += 5;
        points.innerHTML = `${point}`;
    }
});

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}
function specialCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('extraCard');
    card.innerHTML = value;
    cardList.appendChild(card);
}

let point = 0;