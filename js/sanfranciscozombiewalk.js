//little trick to avoid having one's email address spidered by spam bots
jQuery.fn.mailto = function() {
  return this.each(function() {
    var email = $(this).html().replace(/\s*\(.+\)\s*/, "@");
    $(this).before('<a href="mailto:' + email + '" rel="nofollow" title="Email ' + email + '">' + email + '</a>').remove();
  });
};

$(".navbar-collapse").collapse('hide');

$(function() {

  $('.email').mailto();
  
  //Close navbar after click on navbar's menu item
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').click(function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //background slideshow
  $.supersized({
    slideshow: 1,
    autoplay: 1,
    slide_interval: 3000,
    fit_always: 1,
    fit_portrait: 0,
    fit_landscape: 0,
    slides: [
      {
        image: 'slideshow/slides/home_bg.jpg'
      },
      {
        image: 'slideshow/slides/home_bg2.jpg'
      }
      ,
      {
        image: 'slideshow/slides/home_bg3.jpg'
      }
      ,
      {
        image: 'slideshow/slides/home_bg4.jpg'
      }
      ,
      {
        image: 'slideshow/slides/home_bg5.jpg'
      },
      {
        image: 'slideshow/slides/home_bg6.jpg'
      }
    ]
  });

  $('#contactform form').bootstrapValidator({
    message: 'This value is not valid',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    submitHandler: function(validator, form, submitButton) {

      $('#contactform').html('<center><h3>Message is being sent...</h3></center>')

      $.post(form.attr('action'), form.serialize(), function(result) {
        //console.log(result);
        $('#contactform').html('<center><h3>Thank you for contacting us :)</h3></center>');
      }, 'json');


    },
    fields: {
      name: {
        message: 'The name is not valid',
        validators: {
          notEmpty: {
            message: 'Name is required and cannot be empty'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'The email is required and cannot be empty'
          },
          emailAddress: {
            message: 'Email address is not valid'
          }
        }
      },
      message: {
        message: 'The message is not valid',
        validators: {
          notEmpty: {
            message: 'Message cannot be empty'
          }
        }
      }
    }
  });
});


$(function() {

$('.ga_home').click(function() {
  ga('send', 'event', 'button', 'click', 'Home');
});

$('.ga_about').click(function() {
  ga('send', 'event', 'button', 'click', 'About');
});

$('.ga_walk').click(function() {
  ga('send', 'event', 'button', 'click', 'Walk');
});

$('.ga_foodbank').click(function() {
  ga('send', 'event', 'button', 'click', 'Foodbank');
});

$('.ga_contact').click(function() {
  ga('send', 'event', 'button', 'click', 'Contact');
});

$('.ga_facebook').click(function() {
  ga('send', 'event', 'button', 'click', 'Facebook');
});

$('.ga_twitter').click(function() {
  ga('send', 'event', 'button', 'click', 'Twitter');
});

$('.ga_gplus').click(function() {
  ga('send', 'event', 'button', 'click', 'Google +');
});

$('.ga_tumblr').click(function() {
  ga('send', 'event', 'button', 'click', 'Tumblr');
});

$('.ga_youtube').click(function() {
  ga('send', 'event', 'button', 'click', 'Youtube');
});

});





