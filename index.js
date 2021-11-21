const mainImageDOM = document.querySelector('.main-image');
const mainDivDOM = document.querySelector('.my-center');
const pettingDOM = document.querySelector('.petting');
const petCountDOM = document.querySelector('#pet-count');
const messageDOM = document.querySelector('#message');



let petCount = window.localStorage.getItem('petCount') ?? 0;
const lastDay = window.localStorage.getItem('lastDay');
petCountDOM.textContent = petCount;
if (!lastDay) {
    messageDOM.textContent = `Who are you?`;
}
else {
    const dateDiff = Math.floor((Date.now() - lastDay) / (1000 * 60 * 60 * 24));
    if (dateDiff >= 3) {
        messageDOM.textContent = `Where are you?`;
        mainImageDOM.src = './assets/keqsad.png';
    }
    else {
        messageDOM.textContent = `Pet me`;
    }
}

mainDivDOM.addEventListener('click', () => {
    window.localStorage.setItem('petCount', Number(petCount) + 1);
    window.localStorage.setItem('lastDay', Date.now());
    petCount++;

    petCountDOM.textContent = window.localStorage.getItem('petCount');
    messageDOM.textContent = `Humu humu`;

    mainDivDOM.style.pointerEvents = 'none';
    mainImageDOM.src = './assets/happy.png';

    pettingDOM.classList.remove('d-none');
    setTimeout(() => {
        mainImageDOM.src = './assets/keqingStare.png';
        pettingDOM.classList.add('d-none');
        mainDivDOM.style.pointerEvents = 'auto';
    }, 2000);
});

