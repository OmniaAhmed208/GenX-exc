// ========================= menu-bar
let closeMenu = document.querySelector('.menu-bar .navbar .close i');
let menuBox = document.querySelector('.menu-bar');
let menuBtn = document.querySelector('.collapse span i');

closeMenu.addEventListener('click',function(){
    menuBox.style.height = 0;
    menuBox.style.overflow = 'hidden';
});

menuBtn.addEventListener('click',function(){
    menuBox.style.height = '100%';
    menuBox.style.overflow = 'auto';
});


// =========================== Features

let featuresBtn = document.querySelectorAll('.features .btn');
let featuresDesc = document.querySelector('.features .desc');

featuresBtn.forEach((ele,index) => {
    ele.addEventListener('mouseover',()=>{
        featuresDesc.classList.add('show-desc');
        if(index==0){
            featuresDesc.innerHTML = "Btn";
        }
        if(index==1){
            featuresDesc.innerHTML = "Btn";
        }
        if(index==2){
            featuresDesc.innerHTML = "Btn";
        }
        if(index==3){
            featuresDesc.innerHTML = "Btn";
        }
        if(index==4){
            featuresDesc.innerHTML = "Btn";
        }
        if(index==5){
            featuresDesc.innerHTML = "Btn";
        }
    });

    ele.addEventListener('mouseout',()=>{
        featuresDesc.classList.remove('show-desc');
        featuresDesc.innerHTML = "";
    });
});

