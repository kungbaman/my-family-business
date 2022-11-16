/* ============ Scroll Header ============ */
function scrollHeader(){
    const header = document.querySelector('#header')
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader)