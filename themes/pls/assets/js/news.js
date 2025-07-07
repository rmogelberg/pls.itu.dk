(() => {
  // Get references to the news list, toggles, and current index
  const newslist = document.querySelector('.newslist');
  const toggles = document.querySelector('.toggles');
  var currentIndex = 0;

  function select() {
    newslist.querySelector('.active').classList.remove('active');
    newslist.children[currentIndex].classList.add('active');
    toggles.querySelector('.active').classList.remove('active');
    toggles.children[currentIndex].classList.add('active');
  }

  const toggleItem = (event) => {
    currentIndex = Array.prototype.indexOf.call(toggles.children, event.target.parentNode);
    select();
  };

  const prev = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = toggles.childredn.length - 1;
    }
    select();
  };

  const next = () => {
    if (currentIndex < toggles.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    select();
  };

  Array.prototype.forEach.call(toggles.children, (item) => {
    item.children[0].addEventListener('click', toggleItem);
  });

  document.querySelector('.prev').addEventListener('click', prev);
  document.querySelector('.next').addEventListener('click', next);
})();