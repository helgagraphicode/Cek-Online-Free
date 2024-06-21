document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loaderWrapper = document.getElementById('loader-wrapper');
        var content = document.getElementById('content');
        
        loaderWrapper.classList.add('fade-out');
        
        setTimeout(function() {
            loaderWrapper.style.display = 'none';
            content.style.display = 'block';
        }, 500); // match this timeout with the CSS transition duration
    }, 3000); // change this timeout to simulate loading time
});
