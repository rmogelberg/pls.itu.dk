(() => {
  // Get references to the news list, toggles, and current index
  const newslist = document.querySelector('.newslist');
  const toggles = document.querySelector('.toggles');
  let currentIndex = 0;

  const toggleItem = () => {
    const activeNewsItemClass = 'active';
    const newslist = document.querySelector('.newslist');
    const toggles = document.querySelector('.toggles');

    // Get the index of the currently active item
    let activeIndex = -1;
    Array.prototype.forEach.call(newslist.children, (item) => {
      if (item.classList.contains(activeNewsItemClass)) {
        activeIndex = Array.prototype.indexOf.call(newslist.children, item);
      }
    });

    // Toggle the active state on the news list and toggles
    const currentToggle = document.querySelector(`.toggleitem:nth-child(${activeIndex + 1})`);
    currentToggle.classList.toggle(activeNewsItemClass);

    const nextActiveIndex = activeIndex === -1 ? 0 : (activeIndex + 1) % 3;
    const nextToggle = document.querySelector(`.toggleitem:nth-child(${nextActiveIndex + 1})`);

    Array.prototype.forEach.call(newslist.children, (newsItem) => {
      newsItem.classList.remove(activeNewsItemClass);
    });
    Array.prototype.forEach.call(toggles.children, (toggle) => {
      toggle.classList.remove(activeNewsItemClass);
    });

    const nextNewsItem = document.querySelector(`#newsitem${nextActiveIndex}`);
    nextNewsItem.classList.add(activeNewsItemClass);

    nextToggle.classList.add(activeNewsItemClass);
  };

  const prev = () => {
    // Decrement the current index and wrap around if necessary
    currentIndex = (currentIndex - 1 + newslist.children.length) % newslist.children.length;

    const currentNewsItemClass = 'active';
    const nextToggle = document.querySelector(`.toggleitem:nth-child(${currentIndex + 1})`);

    // Toggle active state on the news list and toggles
    Array.prototype.forEach.call(newslist.children, (newsItem) => {
      if (newsItem.id === `newsitem${currentIndex}`) {
        newsItem.classList.add(currentNewsItemClass);
      } else {
        newsItem.classList.remove(currentNewsItemClass);
      }
    });

    nextToggle.classList.add('active');
    Array.prototype.forEach.call(toggles.children, (toggle) => {
      toggle.classList.remove('active');
    });
    document.querySelector(`.toggleitem:nth-child(${currentIndex + 1})`).classList.add('active');

    // Update the href of the current toggle to point to the correct news item
    const currentToggle = document.querySelector('.toggles a.active');
    currentToggle.href = `#newsitem${currentIndex}`;
  };

  const next = () => {
    // Increment the current index and wrap around if necessary
    currentIndex = (currentIndex + 1) % newslist.children.length;

    const currentNewsItemClass = 'active';
    const nextToggle = document.querySelector(`.toggleitem:nth-child(${currentIndex + 1})`);

    // Toggle active state on the news list and toggles
    Array.prototype.forEach.call(newslist.children, (newsItem) => {
      if (newsItem.id === `newsitem${currentIndex}`) {
        newsItem.classList.add(currentNewsItemClass);
      } else {
        newsItem.classList.remove(currentNewsItemClass);
      }
    });

    nextToggle.classList.add('active');
    Array.prototype.forEach.call(toggles.children, (toggle) => {
      toggle.classList.remove('active');
    });
    document.querySelector(`.toggleitem:nth-child(${currentIndex + 1})`).classList.add('active');

    // Update the href of the current toggle to point to the correct news item
    const currentToggle = document.querySelector('.toggles a.active');
    currentToggle.href = `#newsitem${currentIndex}`;
  };

  Array.prototype.forEach.call(toggles.children, (item) => {
    item.children[0].addEventListener('click', toggleItem);
  });

  document.querySelector('.prev').addEventListener('click', prev);
  document.querySelector('.next').addEventListener('click', next);
})();