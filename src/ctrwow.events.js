(function(document, window) {
  "use strict";

  var CTRWOWEvents = {
    register: function(eventName) {
      this[eventName] && this[eventName]();
    },
    showHide: function(target) {
      console.log("show hide function");
      target.classList.toggle("visible");
    }
  };

  window.CTRWOWEvents = CTRWOWEvents;
})(document, window);
