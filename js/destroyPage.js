/*This script  pretends simulate the destruction of all the  elements of this page */
function destroyPage(){
    divs = document.querySelectorAll('div');
    const btnLabel = document.getElementById('destroy');
    if (btnLabel.innerHTML == 'Destruir'){
        style = 'transform: skewx(25deg)'
        for (let i=0; i < divs.length; i++){
            
            divs[i].style=style;
        }
        btnLabel.innerHTML='Recomponer'

       
    }else{

        for (let i=0; i < divs.length; i++){
            
            divs[i].style.removeProperty('transform');
        }
        console.log('en el elseen ')
        btnLabel.innerHTML='Destruir'

    }
}