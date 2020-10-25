const heapId =
  typeof location != "undefined" && location.origin.match("localhost")
    ? "2203907515"
    : "3669941276";
(window.heap = window.heap || []),
  (heap.load = function (e, t) {
    (window.heap.appid = e), (window.heap.config = t = t || {});
    var r = document.createElement("script");
    (r.type = "text/javascript"),
      (r.async = !0),
      (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(r, a);
    for (
      var n = function (e) {
          return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          "addEventProperties",
          "addUserProperties",
          "clearEventProperties",
          "identify",
          "resetIdentity",
          "removeEventProperty",
          "setEventProperties",
          "track",
          "unsetEventProperty",
        ],
        o = 0;
      o < p.length;
      o++
    )
      heap[p[o]] = n(p[o]);
  });
heap.load(heapId);

(function () {
  window.sib = {
    equeue: [],
    client_key: "l5n0qnkno8m9lox4yq4stm2s",
  };
  /* OPTIONAL: email for identify request*/
  // window.sib.email_id = 'example@domain.com';
  window.sendinblue = {};
  for (
    var j = ["track", "identify", "trackLink", "page"], i = 0;
    i < j.length;
    i++
  ) {
    (function (k) {
      window.sendinblue[k] = function () {
        var arg = Array.prototype.slice.call(arguments);
        (
          window.sib[k] ||
          function () {
            var t = {};
            t[k] = arg;
            window.sib.equeue.push(t);
          }
        )(arg[0], arg[1], arg[2]);
      };
    })(j[i]);
  }
  var n = document.createElement("script"),
    i = document.getElementsByTagName("script")[0];
  (n.type = "text/javascript"),
    (n.id = "sendinblue-js"),
    (n.async = !0),
    (n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key),
    i.parentNode.insertBefore(n, i),
    window.sendinblue.page();
})();
