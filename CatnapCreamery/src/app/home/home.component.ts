import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private contentfulService: ContentfulService){}

  catnapCreamery$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.catnapCreamery$ = this.contentfulService.getAllEntries();
  }

}
