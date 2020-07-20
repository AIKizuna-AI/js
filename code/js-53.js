if (typeof koe_53_style === 'undefined') {
  var koe_53_style = document.createElement('style');
  koe_53_style.innerText = `
  .koe_53_iframe_box_1,
  .koe_53_iframe_box_2 {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    overflow: hidden;
    z-index: 9999999;
  }

  .koe_53_iframe_box_1 {
    -webkit-transform: translate(-100%,-50%);
    -moz-transform: translate(-100%,-50%);
    transform:translate(-100%,-50%);
  }

  .koe_53_iframe_box_2 {
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    transform:translate(0,-50%);
  }

  .koe_53_iframe_1,
  .koe_53_iframe_2 {
    width: 100%;
    height: 100%;
  }
`;

  document.head.appendChild(koe_53_style);

  var koe_53_iframe_box_1 = document.createElement('div');
  var koe_53_iframe_box_2 = document.createElement('div');

  koe_53_iframe_box_1.setAttribute('class', 'koe_53_iframe_box_1');
  koe_53_iframe_box_2.setAttribute('class', 'koe_53_iframe_box_2');

  var koe_53_audio = document.createElement('audio');
  koe_53_audio.src =
    'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBcDVHUVdqS1ViZm5nLXNuaTJjNlQzVFk2aHBtWnc=.mp3';
  koe_53_audio.setAttribute('autoplay', '');
  koe_53_audio.addEventListener('canplaythrough', function () {
    koe_53_create_iframe();
    setInterval(function () {
      koe_53_create_iframe();
    }, 3350);
  });
  document.body.appendChild(koe_53_audio);

  function koe_53_create_iframe() {
    koe_53_scale(1, 0);

    koe_53_iframe_box_2.style.width = '50%';
    koe_53_iframe_box_2.style.height = '50%';

    var koe_53_iframe_1 = document.createElement('iframe');
    var koe_53_iframe_2 = document.createElement('iframe');

    koe_53_iframe_1.setAttribute('class', 'koe_53_iframe_1');
    koe_53_iframe_2.setAttribute('class', 'koe_53_iframe_2');

    koe_53_iframe_1.src = window.location.href;
    koe_53_iframe_2.src = window.location.href;

    koe_53_iframe_1.onload = function () {
      koe_53_iframe_1.contentDocument.documentElement
        .querySelector('body')
        .setAttribute('style', 'zoom: 0.5');
    };

    koe_53_iframe_2.onload = function () {
      koe_53_iframe_2.contentDocument.documentElement
        .querySelector('body')
        .setAttribute('style', 'zoom: 0.5');
    };

    koe_53_iframe_box_1.appendChild(koe_53_iframe_1);
    koe_53_iframe_box_2.appendChild(koe_53_iframe_2);

    document.body.appendChild(koe_53_iframe_box_1);
    document.body.appendChild(koe_53_iframe_box_2);

    setTimeout('koe_53_scale(1.1, -25)', 300);
    setTimeout('koe_53_scale(1.2, -50)', 700);

    setTimeout(function () {
      var cale = 50;
      var i_cale = 0.5;
      var koe_53_timer_2 = setInterval(function () {
        i_cale += 0.05;
        cale += 2;
        if (i_cale <= 1) {
          if (
            koe_53_iframe_2.contentDocument &&
            koe_53_iframe_2.contentDocument.documentElement
          )
            koe_53_iframe_2.contentDocument.documentElement
              .querySelector('body')
              .setAttribute('style', 'zoom: ' + i_cale);
        }

        koe_53_iframe_box_2.style.width = cale + '%';
        koe_53_iframe_box_2.style.height = cale + '%';
        if (cale >= 85) {
          koe_53_scale(1, 0);
          koe_53_iframe_1.remove();
          koe_53_iframe_2.remove();
          clearInterval(koe_53_timer_2);
        }
      }, 50);
    }, 1300);
  }

  function koe_53_scale(cale, translate) {
    koe_53_iframe_box_2.setAttribute(
      'style',
      '-webkit-transform:translate(' +
        translate +
        '%,-50%);-moz-transform:translate(' +
        translate +
        '%,-50%);transform:translate(' +
        translate +
        '%,-50%)'
    );
    document.body.setAttribute(
      'style',
      'transform:scale(' +
        cale +
        '); -webkit-transform:scale(' +
        cale +
        '); -moz-transform:scale(' +
        cale +
        ');'
    );
  }
}
