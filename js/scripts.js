/* 
De'Zsa Smith
http://dezsasmith.com/

Date: 8/22/2016
*/
$(document).ready(function() {
	
var $navContent = $('.nav-content');
var $width = $(window).width();
var $loadScreen = $('#load-screen');
var $body = $('body');
var $content = $('.content, .about-name');

if ($width > 650 ) {
    setTimeout(function(){
        $body.addClass('load');
        $content.delay(2000).fadeIn(1000);
	}, 2000);
} else {
    $content.fadeIn(700);
}
    
if ($loadScreen.css('display') == 'none' || $loadScreen.is(':hidden')) {
    $loadScreen.css('display', 'none');
    $body.addClass('load');
}
    
$('aside').click( function() {
    if ( $width > 600 ) {
    $(this).children('.sk-text').toggle();
    $(this).addClass('stop');
    }
    if ( $(this).hasClass('stop') ) {
        $(this).hover( function() {
            var replaceStyles = {
                opacity : 1,
                pointer : "default",
                borderWidth : 1 + "px",
                borderStyle : "solid",
                borderColor : "silver"
            };
            $(this).css( replaceStyles );
        });
    };
});

/* 
span transition effects -
Courtesy of Roko C. Buljan
http://stackoverflow.com/a/20696329
*/

$(function() {

  $("[data-words]").attr("data-words", function(i, d) {
    var $self = $(this),
      $words = d.split("|"),
      tot = $words.length,
      c = 0;

    for(var i = 0; i < tot; i++) $self.append($('<span/>', {
      text: $words[i]
    }));

    $words = $self.find("span").hide();

    (function loop() {
      $self.animate({
        width: $words.eq(c).width()
      });
      $words.stop().fadeOut(1000).eq(c).fadeIn(2000).delay(2500).show(0, loop);
      c = ++c % tot;
    }());

  });

});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $body.animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}
preload([
    'images/me.png'
]);

});