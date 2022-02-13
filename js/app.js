// button Selection
const button = document.getElementById('random-btn');
// console.log(button);
button.addEventListener('click',function(){
    const myColor1 = coloGenerate1()
    const myColor2 = coloGenerate3()
    const myColor3 = coloGenerate3()
    console.log(myColor1);
    console.log(myColor2);
    console.log(myColor3);
    const colorDisplay = document.getElementById('color-display');
    colorDisplay.style.backgroundColor = `rgb(${myColor1},${myColor2},${myColor3})`;
    document.getElementById('color-text').innerText = `rgb(${myColor1},${myColor2},${myColor3});`;

});
function coloGenerate1(){
    const color = Math.round(Math.random()*256);
    return color
    // console.log(color);
}function coloGenerate2(){
    const color = Math.round(Math.random()*256);
    return color
    // console.log(color);
}function coloGenerate3(){
    const color = Math.round(Math.random()*256);
    return color
    // console.log(color);
}
