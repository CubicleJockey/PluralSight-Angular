import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: [ './page-not-found.component.css' ]
})
export class PageNotFoundComponent implements OnInit {
  public message: string = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ornare dui. Curabitur eget arcu nisi. Nullam malesuada lectus ac est dictum fermentum. Fusce eget egestas felis, nec interdum nibh. Aenean urna enim, cursus nec blandit at, iaculis in mauris. Aenean lacinia nulla a nisl cursus feugiat. Suspendisse nibh ante, egestas a risus eget, ultrices imperdiet lectus. Nunc sed sapien molestie, blandit massa ac, sodales dolor. Ut vitae lorem aliquam, tincidunt nunc ut, porta justo. Donec vel maximus elit. Fusce nisi nibh, interdum at sagittis quis, mollis nec magna. In nec nibh viverra purus sollicitudin accumsan id nec velit. Praesent nibh odio, varius et nisl rutrum, rutrum iaculis nibh.

  Phasellus rutrum malesuada sapien a scelerisque. Vestibulum viverra, turpis eget laoreet consequat, tellus mauris commodo diam, sed finibus nisl leo ac neque. Donec posuere risus non pretium interdum. Donec lobortis elementum metus eget hendrerit. Donec ut orci dolor. Sed ullamcorper orci tortor, at imperdiet nibh congue id. Suspendisse finibus nisi et leo porta molestie. In egestas lectus eget auctor aliquet. Nunc in rutrum magna, sit amet facilisis nisi. Fusce ut magna in quam pharetra rutrum ut eu ante. Suspendisse suscipit mauris sed commodo mollis. Praesent lobortis in nibh dictum ultrices. Nunc magna velit, egestas et varius sit amet, pharetra ut orci.
  
  Mauris viverra elementum risus nec luctus. Suspendisse potenti. Aliquam erat volutpat. Mauris placerat lorem non tellus posuere convallis. Aenean a tellus ornare, egestas dolor at, egestas quam. Integer libero velit, vehicula faucibus eros sed, venenatis consequat eros. Donec sed mi orci. Curabitur lorem ante, mattis in gravida eu, venenatis at sem. Etiam eu bibendum ipsum. Vivamus a eros laoreet, vestibulum ex porttitor, tempor orci. Aliquam viverra risus vitae egestas tristique. Pellentesque pulvinar sit amet massa quis molestie. Suspendisse euismod vestibulum augue. `;

  constructor() { }

  ngOnInit(): void {
  }

}
