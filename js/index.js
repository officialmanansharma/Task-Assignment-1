const tabItems = document.querySelectorAll('.tab-bar li');
const imageItems = document.querySelectorAll('.masonry-grid-layout div');
const imageWidth = document.querySelectorAll('.items img');
const menuBar = document.getElementById("menubar");
const menuList = document.getElementById('menulist');

menuBar.addEventListener('click', function() {
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});

tabItems.forEach(tabItem => {
  tabItem.addEventListener('click', () => {
    const category = tabItem.className;
    
    // Loop through all image items and hide/show them based on the category
    imageItems.forEach(imageItem => {
      if (category === 'all' || imageItem.classList.contains(category)) {
        imageItem.style.display = 'block';  // Show the image
      } else {
        imageItem.style.display = 'none';   // Hide the image
      }
    });
    imageWidth.forEach(image => {
      if (category !== 'all') {
        image.style.maxWidth = 'max-content';
      } else {
        image.style.maxWidth = 'none';
      }
    });
  });
});
