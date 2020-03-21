import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  lists: List[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  newList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveLocalStorage();
    return newList.id;
  }

  getList(id: number | string) {
    id = Number(id);
    return this.lists.find( item => item.id === id );
  }

  saveLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadLocalStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse( localStorage.getItem('data'));
    }
  }
}
