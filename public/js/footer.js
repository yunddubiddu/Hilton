function list() {
    if(document.getElementById('sitelist').style.display == 'block') {
      document.getElementById('sitelist').style.display = 'none';
      document.getElementById('footerMore').src = "../img/footer_down.png"
    } else {
      document.getElementById('sitelist').style.display = 'block';
      document.getElementById('footerMore').src = "../img/footer_up.png"
    }

  };

