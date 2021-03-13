/*스크롤 감지 헤더 표현*/
let header = document.querySelector('header')

let currentScroll; 
let lastScroll =0;
let scroll; 
// let currentScroll;

window.addEventListener('scroll',()=>{
    scroll = true;
    // console.log("스크롤");
})

setInterval(()=>{
    if(scroll){
        playScrolled();
        scroll=false;
    }
}, 150);


function playScrolled(){
    currentScroll = document.documentElement.scrollTop
  if(currentScroll <= header.offsetHeight ){
      return;
  }

  if(lastScroll< currentScroll ){
  /*Scroll down */
    header.classList.add('remove');
  
    
  }else{
      if(lastScroll > currentScroll )
     /*Scroll up */
      header.classList.remove('remove');
      header.classList.add('sticky');
    }
  lastScroll = currentScroll; 
}
    