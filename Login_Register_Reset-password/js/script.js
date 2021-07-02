/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

var Site = (function($, window, undefined) {
  'use strict';

  // $('[data-toggle="tooltip"]').tooltip();
  
  return {};

})(window.jQuery, window);

window.jQuery(function() {});

;(function($){
  $('.slick-block').slick({
    dots: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });
  var output = document.querySelectorAll('output')[0];
  
  $(document).on('input', 'input[type="range"]', function(e) {
        output.innerHTML = e.currentTarget.value;
  });
  
  $('input[type=range]').rangeslider({
    polyfill: false
  });
  $('.evo-colorind').on('click', function() {
      var that = this;
    $(this).ColorPicker({
        flat: false,
        onChange: function() {
            var col = $('.colorpicker_hex').find('input').val();
            $(that).parent().find('input[name=color]').val('#' + col);
            
        }
    });
  });
})(jQuery);
