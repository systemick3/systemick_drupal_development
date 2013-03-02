(function ($) {
  Drupal.behaviors.kh = {
    attach: function(context, settings) {
      var text = 'Search this site';
      $('#search-block-form .form-text').focus(function() {
        //var text = 'Join our newsletter: Enter email here'
        if ($(this).val() == text) {
          $(this).val('');
        }
      });
      $('#search-block-form .form-text').blur(function() {
        //var text = 'Join our newsletter: Enter email here'
        if ($(this).val() == '') {
          $(this).val(text);
        }
      });
    }
  }
})(jQuery);