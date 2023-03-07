const getUp = () => {
    const up = document.querySelector(".get-up");

    window.onscroll = function () {
        if (window.scrollY >= 600) {
            up.style.cssText = "display: flex";
        } else {
            up.style.cssText = "display: none";
        }
    }
};
getUp();
