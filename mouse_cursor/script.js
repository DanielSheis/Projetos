// capturar a DOM da div cursor
let cursor = document.querySelector('.cursor');

// Captura a movimentação do mouse
document.addEventListener('mousemove', (e) =>{
    let xPos = e.pageX - 12;
    let yPos = e.pageY - 12;

    cursor.style.left = xPos + 'px';
    cursor.style.top = yPos + 'px';
});