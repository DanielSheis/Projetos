let R = document.getElementById('R');
let G = document.getElementById('G');
let B = document.getElementById('B');

// R

R.addEventListener('mouseover', ()=>{
    R.id = 'R_on';
});
R.addEventListener('mouseout', ()=>{
    R.id = 'R';
});

// G

G.addEventListener('mouseover', ()=>{
    G.id = 'G_on';
});
G.addEventListener('mouseout', ()=>{
    G.id = 'G';
});

// B

B.addEventListener('mouseover', ()=>{
    B.id = 'B_on';
});
B.addEventListener('mouseout', ()=>{
    B.id = 'B';
});