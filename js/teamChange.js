function changeTeam (){
    team = document.getElementById('fileStyle');

    if(document.getElementById('currenTeam').innerHTML=='Claro') {
        document.getElementById('fileStyle').href = 'css/lightStyle.css';
        document.getElementById('currenTeam').innerHTML='Oscuro';
    }else{
        document.getElementById('fileStyle').href = 'css/style-main.css';
        document.getElementById('currenTeam').innerHTML='Claro';

    }
}