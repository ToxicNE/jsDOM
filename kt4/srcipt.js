const slider = document.querySelector('.slider');
const thumb = slider.querySelector('.thumb');
const range = slider.querySelector('.range');

let isDragging = false;

thumb.addEventListener('mousedown', (event) => {
  isDragging = true;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    let thumbPosition = event.clientX - slider.getBoundingClientRect().left;
    let rangeWidth = range.offsetWidth;
    let thumbWidth = thumb.offsetWidth;
    
    if (thumbPosition < 0) {
      thumbPosition = 0;
    } else if (thumbPosition > rangeWidth - thumbWidth) {
      thumbPosition = rangeWidth - thumbWidth;
    }
    
    thumb.style.left = thumbPosition + 'px';
  }
});

document.addEventListener('mouseup', (event) => {
  isDragging = false;
});
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const thumb = slider.querySelector('.thumb');
  
});

