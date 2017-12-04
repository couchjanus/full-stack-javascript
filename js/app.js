function toggle_panel(panel, background_layer) {
            if (panel.classList.contains('speed-in')) {
                panel.classList.remove('speed-in');
                background_layer.classList.remove('is-visible');
            } else {
                panel.classList.add('speed-in');
                background_layer.classList.add('is-visible');
            }
     }

  function ready() {
      let buy = document.querySelector('.buy');
      // console.log(buy);

      buy.addEventListener('click', function () {
        document.querySelector('.singleMember p').style.display = 'none';
        document.querySelector('.singleMember .icon').style.display = 'none';
        document.querySelector('.singleMember .buy').style.display = 'none';
        document.querySelector('.singleMember .detail').style.display = 'block';
        document.querySelector('.menu').style.top = '40%';
        });

      let cancel = document.querySelector('.cancel');

      cancel.addEventListener('click', function () {
        document.querySelector('.singleMember p').style.display = 'block';
        document.querySelector('.singleMember .icon').style.display = 'block';
        document.querySelector('.singleMember .buy').style.display = 'block';
        document.querySelector('.singleMember .detail').style.display = 'none';
        document.querySelector('.menu').style.top = '80%';
        });

      var addcart = document.querySelector('.addcart');
        addcart.addEventListener('click', function (e) {
        
      var promise = new Promise(function(resolve, reject) {
      
        resolve(1);
        var y = 180;
        
        document.querySelector('.contentItem').style.transform = 'rotateY(' + y + 'deg)';
        });

        promise.then(function(val) {
          setTimeout(function() {
            document.querySelector('.contentItem').style.transform = 'rotateY(0deg)';
            document.querySelector('.singleMember p').style.display = 'block';
            document.querySelector('.singleMember .icon').style.display = 'block';
            document.querySelector('.singleMember .buy').style.display = 'block';
            document.querySelector('.singleMember .detail').style.display = 'none';
            document.querySelector('.menu').style.top = '80%';
          }, 2000);
        }).then(function(val) {
        });
      });
    }