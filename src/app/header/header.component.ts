import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    

     $(window).on("scroll", function() {
      var hScroll = $(this).scrollTop();

      if(hScroll >= 190) {
        $('.scroll-nav').css({'visibility':'visible', 'opacity' : '1'});
      } else {
         $('.scroll-nav').css({'visibility':'hidden', 'opacity' : '0'});
      }
    });

     $('.hamburger').click(function() {
      if ($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.mobilenav').hide();
      } else {
        $(this).addClass('is-active');
        $('.mobilenav').show();
      }
     });

  }

}


