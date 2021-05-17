import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users=[
    {nom:'Feuzme', prenom:'Fyfe', age:28},
    {nom:'Xel', prenom:'Cla', age:31},
    {nom:'BouleAF', prenom:'Isma', age:28},
    {nom:'Rock', prenom:'Sham', age: 32}
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
