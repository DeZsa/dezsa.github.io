/* 
De'Zsa Smith
http://dezsasmith.com/

Date: 2/11/2017
*/
    for (var i = 0; i < 10; i++) {
        $(".block-container").append("<div class='blocks'></div>");
    }
    var block = $(".blocks")
        , str;
    for (var x = 1; x <= block.length; x++) {
        str = (200 + 100 * (x - 1)) + "ms";
        block.eq(x - 1).css({
            "animation": "SlideInBlocks 0.5s " + str + " ease forwards"
        });
    }
    $('.inner-content').delay(1700).fadeIn();
    $('a[href*="#"]:not([href="#"])').click(function () {
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
        $(arrayOfImages).each(function () {
            $('<img/>')[0].src = this;
        });
    }
    preload([
    'images/dlog.png'
    , 'images/loogo.png'
  ]);
    
   /* 
  span transition effects -
  Courtesy of Roko C. Buljan
  http://stackoverflow.com/a/20696329
  */

    $("[data-words]").attr("data-words", function(i, d) {
      var $self = $(this),
        $words = d.split("|"),
        tot = $words.length,
        c = 0;

      for (var i = 0; i < tot; i++) $self.append($('<span/>', {
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
    
$('.more').on('click', function() {
    $('.col-group').slideToggle();
    $('.main-group').slideToggle();
});
