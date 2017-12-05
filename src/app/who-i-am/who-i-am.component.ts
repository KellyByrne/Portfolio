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
    
       if (Math.max($(window).width(), window.innerWidth) > 1023) { //desktop
        console.log('desktop');
          $(window).on("scroll", function() {
            var wScroll = $(this).scrollTop();
            if(wScroll <= 380) {
              var num = 220 + (wScroll/1.2);
                $('.overtext').css({'transform' : 'translate(0px, '+ num +'px)'})
            }
          });
      } else {
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