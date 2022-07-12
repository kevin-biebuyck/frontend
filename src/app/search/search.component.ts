import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ApiClientService } from '../shared/api-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  page = 1;
  pageSize = 3;

  query$ = this.route.queryParams.pipe(map(p => p['q']));
  products$ = this.query$.pipe(switchMap(query => this.api.searchProducts(query, this.page, this.pageSize)));

  constructor(private route: ActivatedRoute, private api: ApiClientService) {
  }

  ngOnInit(): void {
  }

}
