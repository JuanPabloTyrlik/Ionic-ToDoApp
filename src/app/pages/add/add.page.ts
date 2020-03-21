import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  taskList: List;
  itemName = '';

  constructor( private tasksService: TasksService,
               private route: ActivatedRoute ) {
                 const listId = this.route.snapshot.paramMap.get('listId');
                 this.taskList = this.tasksService.getList(listId);
                }

  ngOnInit() {
  }

  addItem() {
    if ( this.itemName.length === 0 ) {
      return;
    }
    const newItem = new ListItem( this.itemName );
    this.taskList.items.push(newItem);
    this.itemName = '';
    this.tasksService.saveLocalStorage();
  }

  updateCheckbox(item: ListItem) {
    const pending = this.taskList.items.filter(itemdata => !item.finished).length;
    if (pending === 0) {
      this.taskList.endedOn = new Date();
      this.taskList.completed = true;
    } else {
      this.taskList.endedOn = null;
      this.taskList.completed = false;
    }
    this.tasksService.saveLocalStorage();
  }

}
