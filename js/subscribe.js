(function($){

  $(document).ready(function(){
    $('.btn-subscribe').on('click', function(e){
      e.preventDefault();
      var name = $('#subscribe-name').val();
      if (name === '') return alert('Please enter your name.');
      var email = $('#subscribe-email').val();
      if (email === '') return alert('Please enter your email.');
      $.ajax({
        url: 'https://www.akohub.com/api/v1.0/subscribe',
        method: 'POST',
        data: { Name: name, Email: email }
      }).done(function() {
        $('#subscribe-ok').removeClass('hide').addClass('animated zoomIn');
        $('#subscribe-form').addClass('animated zoomOut hide');
        $('.btn-subscribe').addClass('disabled').prop('disabled', true);
      });
    });
  });

}(jQuery));