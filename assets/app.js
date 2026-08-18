// 复制按钮：天赋导入码 / 宏
function cp(btn) {
  var pre = btn.parentElement.querySelector('pre');
  var t = pre.textContent.trim();
  function done() { btn.textContent = '已复制'; setTimeout(function () { btn.textContent = '复制'; }, 1600); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(t).then(done, fallback);
  } else { fallback(); }
  function fallback() {
    var r = document.createRange(); r.selectNodeContents(pre);
    var s = getSelection(); s.removeAllRanges(); s.addRange(r);
    try { document.execCommand('copy'); done(); } catch (e) { }
    s.removeAllRanges();
  }
}
