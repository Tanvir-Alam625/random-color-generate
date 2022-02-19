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
    <div id="color-display" style="background-color: rgb(${myColor1},${myColor2},${myColor3}); cursor: pointer" class="color">
        <h3 id="color-text" disabled >rgb(${myColor1},${myColor2},${myColor3});</h3>
    </div>
        <span style="color: rgb(${myColor1},${myColor2},${myColor3}); display:none">Copied</span>
    `;
    // set value
    otherDiv.innerHTML = child;
    parent.appendChild(otherDiv);
    /////////////////////////////////////
    const colorItems = document.getElementsByClassName('color');
    for(const item of colorItems){
        item.addEventListener('click',function(event){
            const events = event.target.childNodes[1].innerText;
            console.log(events);
            event.stopImmediatePropagation();
            getColorValue(events)

        });
    }
});

function getColorValue(text){
    let input = document.body.appendChild(document.createElement('input'));
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);

}





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
