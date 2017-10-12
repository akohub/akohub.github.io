(function($){

  $(document).ready(function(){
    $('.btn-shopify-login').on('click', function(e){
      e.preventDefault();
      var storeName = $('#store-name').val();
      if (storeName === '') return alert('Please enter your store name.');
      var app = $('#store-name').attr('data-app');
      $.ajax({
        url: 'https://www.akohub.com/api/v1.0/shopify/login',
        method: 'POST',
        data: { App: app, ShopName: storeName }
      }).done(function(response) {
        if (response.AuthUrl) {
          window.location = response.AuthUrl;
        }
      });
    });
  });

}(jQuery));