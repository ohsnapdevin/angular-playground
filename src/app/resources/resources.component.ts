import { ResourceService } from '../services/resource.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; 
import { Resource } from '../shared/models/resource';


import 'rxjs/operator/map'; 

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
resources: Resource[]; 

  constructor(private service: ResourceService) { }

  ngOnInit() {
    this.service.getResources()
      .subscribe(resources => this.resources = resources); 
  }

}
