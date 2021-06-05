import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: User[] = [
  {
    userName: 'Rohan',
    email: 'rohan@gamil.com',
    age: 29,
    country: 'India',
    phone: 9295434538,
  },
  {
    userName: 'Vijay',
    email: 'vijay@gamil.com',
    age: 32,
    country: 'Srilanka',
    phone: 9295495538,
  },
  {
    userName: 'Danny',
    email: 'danny@gamil.com',
    age: 45,
    country: 'USA',
    phone: 9295445538,
  },
  {
    userName: 'James',
    email: 'james@gamil.com',
    age: 50,
    country: 'Korea',
    phone: 9295409538,
  },
  {
    userName: 'Jordan',
    email: 'jordan@gamil.com',
    age: 29,
    country: 'Australia',
    phone: 9295475538,
  },
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userName', 'email', 'age', 'country', 'phone'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private userService: UserService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    if (this.userService.userArray && this.userService.userArray.length > 0) {
      this.dataSource = new MatTableDataSource(
        ELEMENT_DATA.concat(this.userService.userArray)
      );
    } else {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
