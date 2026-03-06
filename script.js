const subscribe = document.getElementById('subscribe');


let subscribed = false;

function subscribedButtonRender(){
    if(subscribed === false){
        subscribe.style.setProperty('--color-subscribe', 'var(--cinza-escuro)');
        subscribe.style.setProperty('--color-text', 'var(--branco)');
        subscribe.innerHTML = 'Subscribed <i class="bi bi-bell"></i>';
        subscribed = true;
    }
    else{
        subscribe.style.setProperty('--color-subscribe', 'var(--branco)');
        subscribe.style.setProperty('--color-text', 'var(--preto)');
        subscribe.innerText = "Subscribe"
        subscribed = false;
    }
};

subscribe.addEventListener('click', subscribedButtonRender);