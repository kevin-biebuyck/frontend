import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject();
  options = ["test 1", "test2"];
  searchQuery = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap(qp => this.searchQuery = qp["q"]),
        takeUntil(this._destroyed)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroyed.next(null);
    this._destroyed.complete();
  }

}
