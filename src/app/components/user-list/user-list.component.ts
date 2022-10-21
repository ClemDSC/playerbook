import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  searchedContentChild: string = "";

  userList: any[] = [];

  userListFiltered: User[] = [];

  constructor(private userApi: UserHttpService) { }

  ngOnChanges(): void {
    this.userListFiltered = this.userList.filter(user => user.name.toLowerCase().includes(this.searchedContentChild.toLowerCase()))
  }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe(data => {
      this.userList = data
    })
  }

}