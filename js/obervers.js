window.addEventListener('scroll' ,function(){
    let content = document.getElementById('animation1');
    let pos = content.getBoundingClientRect().top;

    icon1 = document.getElementById('animIcon');
    icon2 = document.getElementById('animIcon2');

    let sizeScreen = window.innerHeight/3;

    if (pos < sizeScreen){

        icon1.style.animation  = "to-turn-right 3s none 0s 3 alternate ";
        icon2.style.animation  = "to-turn-left 3s ";


    }
})