(function() {
  $.each($('[name=commit]'), function(i, val) {
      if (val.value == '更新') {
          val.click();
      }
  });
})();
