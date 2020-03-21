import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  list: List[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  newList(title: string) {
    this.list.push(new List(title));
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadLocalStorage() {
    if (localStorage.getItem('data')) {
      this.list = JSON.parse( localStorage.getItem('data'));
    }
  }
}
