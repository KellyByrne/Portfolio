import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css']
})
export class WhoIAmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var lScroll = $(window).scrollTop();
    if(lScroll == 0) {
      $('.overtext').css({'transform' : 'translate(0px, 220px)'});
    }
    
       if (Math.max($(window).width(), window.innerWidth) > 1022) { //desktop
         if (Math.max($(window).width(), window.innerWidth) <= 1235) {
            console.log('tab landscape');
             $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if(wScroll <= 180) {
              var num = 220 + (wScroll/1.2);
                $('.overtext').css({'transform' : 'translate(0px, '+ num +'px)'})
            }
          });
        } else {
          console.log('desktop');
          $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if(wScroll <= 380) {
              var num = 220 + (wScroll/1.2);
                $('.overtext').css({'transform' : 'translate(0px, '+ num +'px)'})
            }
          });
        }

      } else if (Math.max($(window).width(), window.innerWidth) > 767 && Math.max($(window).height(), window.innerHeight) > 900)  { //tablet
           console.log('tab portrait');
             $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if(wScroll <= 180) {
              var num = 220 + (wScroll/1.2);
                $('.overtext').css({'transform' : 'translate(0px, '+ num +'px)'})
            }
          });
      } else { //mobile
        console.log('mobile');
         $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if(wScroll <= 88) {
              var num = 220 + (wScroll);
                $('.overtext').css({'transform' : 'translate(0px, '+ num +'px)'})
            }
          });
      }
  }
}

  
   