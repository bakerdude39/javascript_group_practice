
var color = ["#ff0000", "#009933"]
//gets the button and when clicked it uses the respond function to change the page
document.getElementById('submit').addEventListener('click', respond())

function respond(){
    //the var places the text which is done with .value then uses the if statement to check it
    var answer = document.getElementById('txtArea').value;
    if (answer === 'test')
    {
        document.querySelector('body').style.background = color[1];
        alert('correct');
        adding();
    }
    else
    {
        document.querySelector('body').style.background = color[0];
        alert("this is the " + answer);
        document.querySelector('body').appendChild
    }       
}
//this creates a button to go to the next riddle with the text next riddle
function adding(){
    //creates the button and adds the text
    var next = document.createElement('button');
    var title = document.createTextNode('next riddle');
    //puts the text in the button
    next.appendChild(title);
    /*finds the text box and submit button's div then inserts the 
    new button right before the submit button in the div*/
    var area = document.getElementById('respond');
    var sub = document.getElementById('submit');
    area.insertBefore(next, sub);
}