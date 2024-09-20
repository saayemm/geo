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