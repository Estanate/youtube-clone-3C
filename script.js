const subscribe = document.getElementById('subscribe');
const optionsHeader = document.getElementById('options-header');
const optBtn = document.getElementById('options-header-button');
const opt = document.getElementById('options-header');
const fundoCinza = document.getElementById('fundocinza');
const menuBtn = document.getElementById('menu-button')
const barraLateral = document.getElementById('nav-extended');


let subscribed = JSON.parse(localStorage.getItem('subscribed')) ?? false;



function subscribedButtonRender(){
    if(subscribed === true){
        subscribe.style.setProperty('--color-subscribe', 'var(--cinza-escuro)');
        subscribe.style.setProperty('--color-text', 'var(--branco)');
        subscribe.innerHTML = '<i class="bi bi-bell"></i>Subscribed<i class="bi bi-chevron-down"></i>';
    }
    else{
        subscribe.style.setProperty('--color-subscribe', 'var(--branco)');
        subscribe.style.setProperty('--color-text', 'var(--preto)');
        subscribe.innerText = "Subscribe"
    }
}


function subscribedButtonClicked(){
    if(subscribed === false){
        subscribed = true;
    }
    else{
        subscribed = false;
    }
    subscribedButtonRender();
    localStorage.setItem('subscribed', JSON.stringify(subscribed));
}

function toggleMenu(){
    if(opt.style.display === 'flex'){
        opt.style.display = 'none'
        fundoCinza.style.display = 'none'
    }
    else{
        opt.style.display = 'flex'
        fundoCinza.style.display = 'block'
    }
}

function toggleSideBar(){

    if(barraLateral.style.display === 'flex'){
        barraLateral.style.display = 'none'
    }
    else{
        barraLateral.style.display = 'flex'
    }
}

function InitializePage(){
    subscribedButtonRender();
}

InitializePage();

subscribe.addEventListener('click', subscribedButtonClicked);
optBtn.addEventListener('click', toggleMenu)
fundoCinza.addEventListener('click', toggleMenu)
menuBtn.addEventListener('click', toggleSideBar)