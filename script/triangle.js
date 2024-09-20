function calculateTraingleArea(){
    const triBaseInput = document.getElementById('tri-base');
    const triBaseText = triBaseInput.value;
    const base = parseFloat(triBaseText);

    const triHeightInput = document.getElementById('tri-height');
    const triHeightText = triHeightInput.value;
    const height = parseFloat(triHeightText);

    const area = .5*base*height;
    console.log('area', area);

    const triAreaspan = document.getElementById('tri-area');
    triAreaspan.innerText = area;

}

function calculateRectangleArea(){
    const recWideInput = document.getElementById('rec-wide');
    const recWideText = recWideInput.value;
    const wide = parseFloat(recWideText);

    const recHeightInput = document.getElementById('rec-height')
    const recheightText = recHeightInput.value;
    const height = parseFloat(recheightText);

    const area = wide*height

    const recAreaSpan = document.getElementById('rec-area');
    recAreaSpan.innerText = area;
}

function calculatePentaArea(){
    const pentaInput = document.getElementById('pen-peri');
    const pentaText = pentaInput.value;
    const perimeter = parseFloat(pentaText);

    const pentaSideInput = document.getElementById('pen-side');
    const pentaSideText = pentaSideInput.value;
    const side = parseFloat(pentaSideText);

    const area = 0.5*perimeter*side;

    const pentaAreaSpan = document.getElementById('pen-area');
    pentaAreaSpan.innerText = area;
}

function ellipsAreaCal(){
    const elipsInput = document.getElementById('elips-peri');
    const elipsText = elipsInput.value;
    const a = parseFloat(elipsText);

    const elipsSideInput = document.getElementById('elips-side');
    const elipsTxt = elipsSideInput.value;
    const as = parseFloat(elipsTxt);
    
    const area = 3.1416*a*as;

    const ellipsAreaSpan = document.getElementById('elips-area');
    ellipsAreaSpan.innerText = area;
}