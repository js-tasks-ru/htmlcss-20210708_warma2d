(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const darkLayer = document.getElementById('darkLayer');

    if (!close || !modalOpen || !modal || !darkLayer) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
        darkLayer.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
        darkLayer.style.display = 'none';
    });
})();
