const correctPassword = '070424';

document.getElementById('submit-button').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input').value;

    if (passwordInput === correctPassword) {
        const questionPage = document.getElementById('opening-page');
        questionPage.style.animation = 'slideUp 1s forwards'; 

        setTimeout(() => {
            questionPage.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); 
    } else {
        alert('incorrect baby...not expected');
    }
});

function createFlowers() {
    const flowersContainer = document.createElement('div');
    flowersContainer.className = 'flowers';
    document.getElementById('opening-page').appendChild(flowersContainer);

    for (let i = 0; i < 4; i++) {
        const flower = document.createElement('div');
        flower.className = 'lily';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flowersContainer.appendChild(flower);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createFlowers();
});
