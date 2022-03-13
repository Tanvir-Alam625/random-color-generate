// button Selection
const button = document.getElementById('random-btn');
button.addEventListener('click',()=>{
    // create the random color
    const red = Math.round(Math.random()*256);
    const green = Math.round(Math.random()*256);
    const blue = Math.round(Math.random()*256);
    // add multiple box 
    const parent = document.getElementById('parent');
    const otherDiv = document.createElement('div');
    otherDiv.classList.add('other');
    const rgb = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    const child = `
    <div class="color-container">
    <span class="message show-message" style="color:${rgb};">copied</span>
        <div id="color-display" style="background-color: ${rgb};" class="color">
            <h3 id="color-text" disabled >${rgb}</h3>
            <img title="copy to clipboard" class="copy-icon" src="./images/copy-solid.svg" width="20" alt="icon">
        </div> 
    </div>
    `;
    // set value
    otherDiv.innerHTML = child;
    parent.appendChild(otherDiv);
    getColorValue();
});
// get color value function 
const getColorValue = ()=>{
    const colorItems = document.getElementsByClassName('copy-icon');
    for(const item of colorItems){
        item.addEventListener('click',function(event){
            const events = event.target.parentNode.childNodes[1].innerText;
            const messages = event.target.parentNode.parentNode.childNodes[1];
            event.stopImmediatePropagation();
            copyToClipboard(events);
            showMessage(messages);
            setTimeout(()=>{
                messages.classList.remove('showMsg');
                messages.classList.add('removeMsg');
            },3000)
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
// show message function
const showMessage = (msg)=>{
    msg.classList.add('showMsg');
    msg.classList.remove('removeMsg');

}