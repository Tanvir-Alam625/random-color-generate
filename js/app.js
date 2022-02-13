// button Selection
const button = document.getElementById('random-btn');
// console.log(button);
button.addEventListener('click',function(){
    // color calling function
    const myColor1 = coloGenerate1()
    const myColor2 = coloGenerate3()
    const myColor3 = coloGenerate3()
    // add multiple box 
    const parent = document.getElementById('parent');
    const otherDiv = document.createElement('div')
    otherDiv.classList.add('other');
    const child = `
    <div id="color-display" style="background-color: rgb(${myColor1},${myColor2},${myColor3})" class="color">
        <h3 id="color-text">rgb(${myColor1},${myColor2},${myColor3});</h3>
    </div>
    `;
    // set value
    otherDiv.innerHTML = child;
    parent.appendChild(otherDiv);
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
