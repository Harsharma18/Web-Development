let p = document.createElement('p');
p.innerText = "Hey i'm Red";
//p.innerText.style.color = "red";
let body = document.querySelector('body');
body.append(p);
p.classList.add('.red');
let h3 = document.createElement('h3');
h3.innerText = "Hey i am blue";
body.append(h3);
h3.classList.add('.blue');
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p1 = document.createElement('p1');
let body1 = document.querySelector('body');
body1.append(div);
h1.innerText = "i am a div";
p1.innerText = "ME TOO!";
div.append(h1);
div.append(p1);
// div.appendChild(h1);
// div.appendChild(p1);
body.append(div);
div.classList.add('.div');
let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "clickme";
let body2 = document.querySelector('button');
body.append(input);
body.append(btn);
btn.setAttribute('id','button');
input.setAttribute('placeholder','username');
let btn1 = document.querySelector('#button');
btn1.classList.add('.btnStyle');
let head = document.createElement('h1');
head.innerHTML = '<u>DOM Practice</u>'
body.append(head);
let p2 = document.createElement('p');
p2.innerHTML = "Apna College <b>Delta</b> Practice"
body.append(p2);