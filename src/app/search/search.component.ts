import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ApiClientService } from '../shared/api-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  query$ = this.route.queryParams.pipe(map(p => p['q']));
  page$ = this.route.queryParams.pipe(map(p => p['page'] ? p['page'] : 1));
  pageSize$ = this.route.queryParams.pipe(map(p => p['pageSize'] ? p['pageSize'] : 50));
  productsPaginated$ = combineLatest([this.query$, this.page$, this.pageSize$])
    .pipe(
      switchMap(([query, page, pageSize]) => this.api.searchProducts(query, page, pageSize)),
      tap(paginated => setTimeout(() => this.paginator.pageIndex = paginated.page - 1, 0)),
      shareReplay());

  constructor(private route: ActivatedRoute, private api: ApiClientService, private router: Router) {
  }

  ngOnInit(): void {
  }
  applyPagination(pageEvent: PageEvent): void {
    console.log(pageEvent);
    this.router.navigateByUrl(`/search?q=${this.route.snapshot.queryParams['q']}&page=${pageEvent.pageIndex + 1}&pageSize=${pageEvent.pageSize}`)
  }

}
