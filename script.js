const subscribe = document.getElementById('subscribe');
const optionsHeader = document.getElementById('options-header')


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


function InitializePage(){
    subscribedButtonRender();
}

InitializePage();

subscribe.addEventListener('click', subscribedButtonClicked);