import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; 
import { User } from '../shared/models/user';


import 'rxjs/add/operator/map';  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[]; 

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(users => this.users = users); 
  }

}
