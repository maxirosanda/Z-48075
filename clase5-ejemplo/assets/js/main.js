//----------------loading--------------------------------
const loaderContainer = document.querySelector('.loading');
let inicio = new Date;

window.addEventListener('load', () => {
    
    let fin = new Date;
    let segundos = (fin-inicio);

    if(segundos < 2000){
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 2000);
    }else{
        loaderContainer.style.display = 'none';
    }
   console.log(segundos)
    
});
//--------------------------------------------------------
//----------------video youtube--------------------------
(function() {
    var v = document.getElementsByClassName("reproductor");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();
 
function labnolThumb(id) {
    return '<img src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><button class="youtube-play"><i class="fa-brands fa-youtube"></i></button>';
}
 
function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&muted=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.setAttribute("autoplay", "1");
    this.parentNode.replaceChild(iframe, this);
}
//------------------------------------------------------------------