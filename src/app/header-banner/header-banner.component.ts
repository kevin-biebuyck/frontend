import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  options = ["test 1", "test2"];

  constructor() { }

  ngOnInit(): void {
  }

}
