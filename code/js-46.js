if (typeof koe_46_is_add_listener === 'undefined') {
  document.title = '√ ' + document.title;
  var koe_46_is_add_listener = true;

  document.addEventListener('webkitvisibilitychange', function (e) {
    if (e.target.webkitHidden) {
      document.querySelectorAll('iframe').forEach(function (doc) {
        if (
          doc.contentDocument !== null &&
          doc.contentDocument.documentElement !== null
        ) {
          doc.contentDocument.documentElement
            .querySelectorAll('audio,video')
            .forEach(function (element) {
              element.pause();
            });
        }
      });
      document.querySelectorAll('audio,video').forEach(function (element) {
        element.pause();
      });
    } else {
      document.querySelectorAll('iframe').forEach(function (doc) {
        if (
          doc.contentDocument !== null &&
          doc.contentDocument.documentElement !== null
        ) {
          doc.contentDocument.documentElement
            .querySelectorAll('audio,video')
            .forEach(function (element) {
              element.play();
            });
        }
      });
      document.querySelectorAll('audio,video').forEach(function (element) {
        element.play();
      });
    }
  });
}
