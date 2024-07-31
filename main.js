let nextdom = document.getElementById('next');
let prevdom = document.getElementById('prev');
let carouseldom = document.querySelector('.carousel');
let listitemdom = document.querySelector('.carousel .list');
let thumbnaildom = document.querySelector('.carousel .thumbnail');


nextdom.onclick = function(){
    showslider('next');
}

prevdom.onclick = function(){
    showslider('prev')
}

let timerunning = 3000;
let timeautonext = 7000;
let runtimeout;
let runautorun = setTimeout(()=>{
    nextdom.click();

}, timeautonext);

function showslider(type){
    let itemslider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        listitemdom.appendChild(itemslider[0]);
        thumbnaildom.appendChild(itemthumbnail[0]);
        carouseldom.classList.add('next');
    }else{
        let positionlastitem = itemslider.length - 1;
        listitemdom.prepend(itemslider[positionlastitem])
        thumbnaildom.prepend(itemthumbnail[positionlastitem]);
        carouseldom.classList.add('prev')
    }

    clearTimeout(runtimeout);
    runtimeout = setTimeout(() =>{
        carouseldom.classList.remove('next')
        carouseldom.classList.remove('prev')

    }, timerunning)

    clearTimeout(runautorun);
    runautorun = setTimeout(()=>{
        nextdom.click();

    }, timeautonext);
}