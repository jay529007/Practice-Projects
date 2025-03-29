const image = document.getElementById('userImage');
const btn = document.getElementById('reloadBtn');

const loadRandomImage = () => {
  const randomnum = Math.floor(Math.random() * 99) + 1;  
  const imageUrl = `https://randomuser.me/api/portraits/women/${randomnum}.jpg`;
  image.src = imageUrl; 
  image.alt = imageUrl,randomnum; 
};

// Initial load
loadRandomImage();

// Reload image on button click
btn.addEventListener('click', loadRandomImage);
