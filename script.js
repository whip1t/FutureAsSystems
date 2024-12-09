const videoContainer = document.getElementById('video-container');
const revealSize = 400; // mouse size 


//track mouse movement 
function updateReveal(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

//clip path and reveal 
  videoContainer.style.clipPath = `circle(${revealSize / 2}px at ${mouseX}px ${mouseY}px)`;
  console.log(`Clip-path: circle(${revealSize / 2}px at ${mouseX}px ${mouseY}px)`);

  // video starts playing/fading when mouse moves 
  if (videoContainer.style.opacity !== '1') {
    videoContainer.style.opacity = '1'; 
    console.log('Video faded in');
  }
}
document.addEventListener('mousemove', updateReveal);
