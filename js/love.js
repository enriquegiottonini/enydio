!(function (h, q, b) {
  function k() {
      l(),
      m();
  }
  function m() {
    for (var a = 0; a < g.length; a++) {
      g[a].alpha <= 0
        ? (q.body.removeChild(g[a].el), g.splice(a, 1))
        : (g[a].y--,
          (g[a].scale += 0.004),
          (g[a].alpha -= 0.013),
          (g[a].el.style.cssText =
            "left:" +
            g[a].x +
            "px;top:" +
            g[a].y +
            "px;opacity:" +
            g[a].alpha +
            ";transform:scale(" +
            g[a].scale +
            "," +
            g[a].scale +
            ") rotate(45deg);background:" +
            g[a].color +
            ";z-index:99999"));
    }
    requestAnimationFrame(m);
  }
  function l() {
    var a = "function" == typeof h.onclick && h.onclick;
    h.onclick = function (c) {
      a && a(), j(c);
    };
  }
  function j(d) {
    var c = q.createElement("div");
    (c.className = "love"),
      g.push({
        el: c,
        x: d.clientX - 5,
        y: d.clientY - 5,
        scale: 1,
        alpha: 1,
        color: p(),
      }),
      q.body.appendChild(c);
  }

  function p() {
    return "#cc2a5d";
  }
  var g = [];
  (h.requestAnimationFrame = (function () {
    return (
      h.requestAnimationFrame ||
      h.webkitRequestAnimationFrame ||
      h.mozRequestAnimationFrame ||
      h.oRequestAnimationFrame ||
      h.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1000 / 60);
      }
    );
  })()),
    k();
})(window, document);
