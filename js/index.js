const btn = document.querySelector('.btn_introduce');

btn.addEventListener('click', () => {
  window.location.href = './introduce.html'
})
function slider() {
  const skills = document.querySelector('.artic_skills');
  const slide = skills.querySelector('.list_skills');
  let press = false;
  let startX = 0;
  let nowX = 0;
  let calcX = 0;
  // 어려운 부분
  slide.addEventListener('mousedown', (e) => {
    press = true;
    slide.style.cursor = 'grabbing';
    startX = e.offsetX;
  })
  slide.addEventListener('mouseup', () => {
    slide.style.cursor = 'default';
    press = false;
  })
  slide.addEventListener('mouseout', () => {
    slide.style.cursor = 'default';
    press = false;
  })
  slide.addEventListener('mousemove', (e) => {
    slide.style.cursor = 'grabbing'
    nowX = e.offsetX;
    
    if(!press) {
      return e.preventDefault()
    }
    calcX += (startX - nowX);
    slide.style.transform = `translate(-${calcX}px, 0)`
    
    if(calcX < 0) {
      calcX = 0;
    } else if(calcX > 2400) {
      calcX = 2400;
      slide.style.transform = `translate(-2400px, 0)`
    }
  })  
}
slider()


