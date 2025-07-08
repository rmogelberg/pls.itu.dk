(() => {
  // Get references to the news list, toggles, and current index
  const newslist = document.querySelector('.newslist'); // Element containing the news items
  const toggles = document.querySelector('.toggles'); // Element containing toggle buttons
  var currentIndex = 0; // Index of the currently selected item

  /**
   * Selects the specified item in both the news list and toggles.
   */
  function select() {
    // Remove active class from previously selected item
    newslist.querySelector('.active').classList.remove('active');
    newslist.children[currentIndex].classList.add('active');

    // Remove active class from previously selected toggle
    toggles.querySelector('.active').classList.remove('active');
    toggles.children[currentIndex].classList.add('active');
  }

  /**
   * Toggles the specified item when clicked.
   * @param {Event} event - Click event on a toggle button
   */
  const toggleItem = (event) => {
    // Get index of the newly selected item from its parent in the toggles list
    currentIndex = Array.prototype.indexOf.call(toggles.children, event.target.parentNode);
    select();
  };

  /**
   * Goes to the previous item.
   */
  const prev = () => {
    // Move to the previous item, wrapping around if necessary
    currentIndex = (currentIndex + toggles.children.length - 1) % toggles.children.length;
    select();
  };

  /**
   * Goes to the next item.
   */
  const next = () => {
    // Move to the next item, wrapping around if necessary
    currentIndex = (currentIndex + 1) % toggles.children.length;
    select();
  };

  // Add event listeners to toggle buttons in the toggles list
  Array.prototype.forEach.call(toggles.children, (item) => {
    item.children[0].addEventListener('click', toggleItem);
  });

  // Add event listeners for navigation buttons
  document.querySelector('.prev').addEventListener('click', prev);
  document.querySelector('.next').addEventListener('click', next);
})();
