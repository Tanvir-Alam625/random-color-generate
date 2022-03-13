// button Selection
const button = document.getElementById('random-btn');
button.addEventListener('click',()=>{
    // create the random color
    const red = Math.round(Math.random()*256);
    const green = Math.round(Math.random()*256);
    const blue = Math.round(Math.random()*256);
    // add multiple box 
    const parent = document.getElementById('parent');
    const otherDiv = document.createElement('div')
    otherDiv.classList.add('other');
    const child = `
    <div id="color-display" style="background-color: rgb(${red},${green},${blue});" class="color">
        <h3 id="color-text" disabled >rgb(${red},${green},${blue});</h3>
        <img class="copy-icon" src="./images/copy-solid.svg" width="20" alt="icon">
    </div>
        <span style="color: rgb(${red},${green},${blue}); display:none">Copied</span>
    `;
    // set value
    otherDiv.innerHTML = child;
    parent.appendChild(otherDiv);
    getColorValue();
    /////////////////////////////////////
    // const colorItems = document.getElementsByClassName('copy-icon');
    // for(const item of colorItems){
    //     item.addEventListener('click',function(event){
    //         const events = event.target.parentNode.childNodes[1].innerText;
    //         event.stopImmediatePropagation();
    //         getColorValue(events);
    //     });
    // }
});
// get color value function 
const getColorValue = ()=>{
    const colorItems = document.getElementsByClassName('copy-icon');
    for(const item of colorItems){
        item.addEventListener('click',function(event){
            const events = event.target.parentNode.childNodes[1].innerText;
            event.stopImmediatePropagation();
            copyToClipboard(events);
        });
    }
}
// copy to clipboard color code function 
const copyToClipboard=(text)=>{
    let input = document.body.appendChild(document.createElement('input'));
    input.value = text;
    input.focus();
    input.select();
    navigator.clipboard.writeText(input.value)
    input.parentNode.removeChild(input);

}