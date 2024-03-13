$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Frontend Web Dev.."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
       "Frontend web Dev..  "
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });

  function emailsend(){

    var Username = document.getElementById('name'), value;
    var email = document.getElementById('email'), value;
    var subject = document.getElementById('subject'), value;
    var message = document.getElementById('message'), value;

    var messageBody = "Name" + Username +
    "<br/> Email" + email +
    "<br/> Message" + message; 

    Email.send({
      Host : "smtp.yourisp.com",
      Username : "dwiveditanmay55@gmail.com",
      Password : "1B1813184FBECEFDC4FAE6B131285187B175",
      To : 'dwiveditanmay55@gmail.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : messageBody
    }).then(
      message => {
        if(message == "OK"){
          swal("Sucessfull!", "You clicked the button!", "success");
        }
        else{
          swal("Something went Wrong!", "You clicked the button!", "error");
        }
      }
    );
  
  };
