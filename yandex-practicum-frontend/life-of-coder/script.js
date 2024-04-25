document.addEventListener('DOMContentLoaded', function () {
    const cover = document.querySelector('.cover');

    function moveParallax(e) {
        let offsetX = 0.5 - e.pageX / window.innerWidth;
        let offsetY = 0.5 - e.pageY / window.innerHeight;

        cover.style.transform = `translate(${offsetX * 50}px, ${offsetY * 50}px)`;
    }

    document.addEventListener('mousemove', moveParallax);
});