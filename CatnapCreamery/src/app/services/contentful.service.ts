import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../../environments/environment';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: 'cjy4hzq9z5xc',
    accessToken: 'VspR2D6tDRga0l0CYaxW47av7RRbEgKyytYl1nCNSKg'
  })
  
  //this is for calling all the content and components from contentful
  getAllEntries(){
    const promise = this.client.getEntries()
    return from (promise);    

  }
}
