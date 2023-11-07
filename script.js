document.addEventListener('DOMContentLoaded', () => {
  const blogForm = document.getElementById('blogForm');
  const titleDisplay = document.getElementById('title-display');
  const videoDisplay = document.getElementById('video-display');
  const imageDisplay = document.getElementById('image-display');
  const contentDisplay = document.getElementById('content-display');
  
  

  blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const video = document.getElementById('video').files[0];
    const image = document.getElementById('image').files[0];
    const content = document.getElementById('content').value;
   
    titleDisplay.textContent = title;
    videoDisplay.src = URL.createObjectURL(video);
    imageDisplay.src = URL.createObjectURL(image);
    contentDisplay.textContent = content;

    document.getElementById('submitted-content').style.display = 'block';
    blogForm.reset();
  });
});