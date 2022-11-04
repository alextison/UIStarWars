containerArrows = document.getElementsByClassName("arrows");
containerLogo = document.getElementsByClassName("logo");
containerPoster = document.getElementsByClassName("poster");
containerBar = document.getElementsByClassName("bar");

function previous(){
    which = 'previous';
    i = parseInt(containerArrows[0].getAttribute('data-position'));
    if( i != 0){
        logo();
        poster();
        bar();
        containerArrows[0].setAttribute('data-position', i-1);
    }
}

function next(){
    which = 'next';
    i = parseInt(containerArrows[0].getAttribute('data-position'));
    if(i != 2){
        logo();
        poster();
        bar();
        containerArrows[0].setAttribute('data-position', i+1);
    }
}

function logo(){
    if(which == 'previous'){
        containerLogo[0]['children'][i].style.display = 'none';
        containerLogo[0]['children'][i-1].style.display = 'flex';
    }else{
        containerLogo[0]['children'][i].style.display = 'none';
        containerLogo[0]['children'][i+1].style.display = 'flex';
    }
}

function poster(){
    if(which == 'previous'){
        containerPoster[0]['children'][i].style.width = '0';
        containerPoster[0]['children'][i].style.left = '100%';
    }else{
        containerPoster[0]['children'][i+1].style.width = '100%';
        containerPoster[0]['children'][i+1].style.left = '0';
        containerPoster[0]['children'][i].style.width = '0';
    }
}

function bar(){
    if(which == 'previous'){
        containerBar[0]['children'][i-1].style.backgroundPosition = 'right';
        containerBar[0]['children'][i]['children'][0].style.backgroundColor = '#827B68';
    }else{
        containerBar[0]['children'][i].style.backgroundPosition = 'left';
        containerBar[0]['children'][i+1]['children'][0].style.backgroundColor = '#FFF38A';
    }
}