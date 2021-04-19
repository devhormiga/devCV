/*This script  pretends simulate the party
 of all the  elements of this page */

 function party(){
     
     if (document.getElementById('party').innerHTML == 'Fiesta'){
        document.getElementById('party').innerHTML = 'Fiesta!!!'
        var img = document.createElement('img');
        img.setAttribute('src','images/zoombieFest.gif');
        //elements = document.querySelectorAll('*');
        //for (let i=0; i < divs.length; i++){
        //   animate = 'animate:rotate()'
           
        //   divs[i].style=style;
       //}
       newNode= document.createElement('div').appendChild(img);
       newNode.setAttribute('id','divParty');
       newNode.style ='position:fixed;top:0px;z-index:900; width:100%; height:100%;max-widht:200px;max-height:800px; justify-element:center'
       document.querySelector('body').appendChild(newNode);
     }else{
         document.getElementById('divParty').remove();
         document.getElementById('party').innerHTML = 'Fiesta';
    }
    
 }