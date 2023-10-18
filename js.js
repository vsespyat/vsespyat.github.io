    let left = document.getElementById('left');
    let rigth = document.getElementById('right');


rigth.addEventListener('click', editColor);
left.addEventListener('click', editColorY);

    function editColor(){
        left.classList.add('left-hov');
        rigth.classList.add('right-hov');
    }

    function editColorY(){
        left.classList.remove('left-hov');
        rigth.classList.remove('right-hov');
    }

let imgclk = document.getElementById("img-clk");
let pic = document.querySelector('img');
imgclk.addEventListener('click', showHideImg);


function showHideImg(){
imgclk.classList.add('i-hide');
pic.classList.remove('i-hide');
}


let command = document.getElementById('command');
let hi_command = document.getElementById('hide-command');
let skills = document.getElementById('skills');
let hi_skills = document.getElementById('hide-skills');
let serious = document.getElementById('serious');
let hi_serious = document.getElementById('hide-serious');


command.addEventListener('click', function(){
    hi_command.classList.toggle('comm-hide');
})  ;          

skills.addEventListener('click', function(){
    hi_skills.classList.toggle('comm-hide');
})  ;          

serious.addEventListener('click', function(){
    hi_serious.classList.toggle('comm-hide');
})  ;          
