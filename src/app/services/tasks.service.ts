import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  list: List[] = [];

  constructor() {
    const list1 = new List('Test List 1');
    const list2 = new List('Test List 2');

    this.list.push(list1, list2);
  }
}
