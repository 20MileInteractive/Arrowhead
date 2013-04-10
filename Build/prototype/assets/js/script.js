(function() {

  $(function() {
    return $(document).foundation(function(response) {
      console.log('Start Logging');
      return console.log(response.errors);
    });
  });

}).call(this);
