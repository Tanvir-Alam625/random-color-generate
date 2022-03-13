// button Selection
const button = document.getElementById('random-btn');
button.addEventListener('click',function(){
    // create the random color
    const red = Math.round(Math.random()*256);
    const green = Math.round(Math.random()*256);
    const blue = Math.round(Math.random()*256);
    // add multiple box 
    const parent = document.getElementById('parent');
    const otherDiv = document.createElement('div')
    otherDiv.classList.add('other');
    const child = `
    <div id="color-display" style="background-color: rgb(${red},${green},${blue}); cursor: pointer" class="color">
        <h3 id="color-text" disabled >rgb(${red},${green},${blue});</h3>
    </div>
        <span style="color: rgb(${red},${green},${blue}); display:none">Copied</span>
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
    navigator.clipboard.writeText(input.value)
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
