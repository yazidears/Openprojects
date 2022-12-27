window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('preloader').classList.add('loaded');
    }, 7000);
    setTimeout(function() {
    document.getElementById('subloader').classList.remove('wait');
    }, 2500);

  });
  