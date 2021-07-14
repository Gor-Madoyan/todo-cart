import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  constructor() { }
  title = 'Gold-Cart'
  des = 'this cart available all over the world';
  ngOnInit(): void {
  }

}
