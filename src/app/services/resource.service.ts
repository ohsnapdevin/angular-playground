import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'; 
import { Http } from '@angular/http';
import { Resource } from '../shared/models/resource'; 

@Injectable()
export class ResourceService {
private resourcesUrl: string = 'https://reqres.in/api/unknown'; 
  constructor(private http: Http) { }

  /** 
   * Get all resources
   */
   getResources(): Observable<Resource[]> { 
     return this.http.get(this.resourcesUrl)
     .map( res => res.json().data); 
   }

}
