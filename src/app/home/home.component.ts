import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toggleSidebar', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }
  sidebarState = 'hidden';

  slides: string[] = [
    '1', '2', '3', '4', '5'
  ];
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4,  'prevArrow': '.slide-left', 'nextArrow': '.slide-right'};
  slideTestConfig = {
    'prevArrow': '.slide-left',
    'nextArrow': '.slide-right',
    'slidesToShow': 2,
    'slidesToScroll': 1,
    'vertical': true};

  ngOnInit() {}

  toggleSidebar() {
    if ( $('#sidebar-compare').hasClass('active') ) {
      $('#sidebar-compare').removeClass('active');
      this.sidebarState = 'hidden';
    } else {
      $('#sidebar-compare').addClass('active');
      this.sidebarState = 'visible';
    }
  }
}
