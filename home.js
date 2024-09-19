let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

var strings = ["Welcome to pahari home solution ,Millions of people make won home and our home solutions pvtLimited"];
var typed = new Typed('#type-text', {
    strings: strings,
    typeSpeed: 40,
    backSpeed: 10,
    loop: true
});

