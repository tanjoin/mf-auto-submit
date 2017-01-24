(function() {
  var content = $('[name=commit]').filter(function(e, i) {
    return i.value == "更新";
  });
  var count = 0;
  setInterval(function() {
    if (content.length <= count) {
      return;
    }
    var s = content[count];
    s.click();
    count++;
  }, 3000);
})();
