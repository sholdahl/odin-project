let menus = {
    setUpDDMenus: () => {
        let ddMenus = document.querySelectorAll(".navbar-drop-down");
        ddMenus.forEach(menu => {
            menu.addEventListener("click", menus.toggleDropDown)
        })
    },
    toggleDropDown: e => {
        if(Array.from(e.path[1].classList).includes("navbar-drop-down")) {
            let subMenu = e.path[1].childNodes[3]
            subMenu.classList.toggle("hidden");
        }
    },
    setUpMobileToggler: () => {
        let toggler = document.querySelector(".hamburger");
        let closeMenu = document.querySelector(".close-mobile");

        closeMenu.addEventListener("click", menus.toggleMobileMenu)
        toggler.addEventListener("click", menus.toggleMobileMenu)
    },
    toggleMobileMenu: () => {
        let closeMenu = document.querySelector(".close-mobile-wrapper");
        let menu = document.querySelector(".navbar-nav");
        menu.classList.toggle("hidden-mobile");
        closeMenu.classList.toggle("hidden-mobile");

    }
}

menus.setUpDDMenus();
menus.setUpMobileToggler();