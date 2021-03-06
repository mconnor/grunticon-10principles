(function () {
    var icons = [].slice.call(document.querySelectorAll("div.icon"));
    var activeIcon;
    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            if (!activeIcon) {
                this.classList.add('spin');
            }
            else if (activeIcon === this) {
                this.classList.toggle('spin');
            }
            else {
                activeIcon.classList.remove('spin');
                this.classList.add('spin');
            }
            activeIcon = this;
        });
    });
})();
