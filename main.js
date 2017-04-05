

const icons = [...document.querySelectorAll('div.icon')];
let activeIcon;
icons.forEach((icon) => {
  icon.addEventListener('click', function () {
    if (!activeIcon) {
      this.classList.add('spin');
    } else if (activeIcon === this) {
      this.classList.toggle('spin');
    } else {
      activeIcon.classList.remove('spin');
      this.classList.add('spin');
    }
    activeIcon = this;
  });
});
