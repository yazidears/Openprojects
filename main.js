window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('preloader').classList.add('loaded');
      setTimeout(function() {
        document.getElementById('subloader').innerHTML = "";
        document.getElementById('preloader').innerHTML = "";
        document.getElementById('preloader').remove();  // delete the preloader element
      }, 500);
    }, 7000);
    setTimeout(function() {
      document.getElementById('subloader').classList.remove('wait');
    }, 2500);
});
