// Проверка поддержка webp, добавление класса webp или no-webp для HTML
export function isWebP() {
    // проверка поддержки webp
    function testWebP(callback){
        let webP = new Image();
        webP.onload = webP.onerror =function () {
            callback(webP.height == 2);
        };
        webP.src = data //* какой то код картинка data/image
    }
 // добавление класса _webp или _nowebp для HTML
 testWebP(function (support){
     let className = support === true ? 'webp' : 'no-webp';
     document.documentElement.classList.add(className);
 });
}