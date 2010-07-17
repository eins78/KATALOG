// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function remove_fields(link) {
  $(link).prev("input[type=hidden]").val(1);
  $(link).closest(".fields").slideUp();
}

function add_fields(link, association, content) {
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).parent().before(content.replace(regexp, new_id));
  $(link).next(".fields").slideUp();
}

$(document).ready(function() {
  
  // enable fancybox
  $("a[rel=fancybox]").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'       : 300,
    'speedOut'      : 300,
    'overlayOpacity': 0.5,
    'overlayColor'  : '#000',
    'showCloseButton' : true,
    'titleShow'     : false,
    'titlePosition' : 'inside',
    'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">' + title + '</span>';
    }
  });
  
});