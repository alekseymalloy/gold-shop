document.querySelector('.img-gallery') ? INSTALL_GALLERY() : null;
function INSTALL_GALLERY() {
    var IMG_GALLERY = document.querySelector('.img-gallery')
    var MAIN_IMG = document.querySelector('.img-gallery__main-img img')
    var IMG_GALLERY_ITEM = document.querySelectorAll(".img-gallery__nav-item")

    function REMOVE_ACTIVE() {
        IMG_GALLERY_ITEM.forEach(item => item.classList.remove('active'));
    }

    IMG_GALLERY_ITEM.forEach(picture => picture.addEventListener('click', function() {
        REMOVE_ACTIVE();
        picture.classList.add('active');
        var img = picture.querySelector('img');
        var newSRC = img.getAttribute('src')
        MAIN_IMG.setAttribute('src', newSRC);
    }))
}