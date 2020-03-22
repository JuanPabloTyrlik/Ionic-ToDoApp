import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() pending = true;

  constructor(  public tasksService: TasksService,
                private router: Router  ) {}

  ngOnInit() {}

  editList(list: List) {
    if (this.pending) {
      this.router.navigate(['/tabs/tab1/add', list.id]);
    } else {
      this.router.navigate(['/tabs/tab2/add', list.id]);
    }
  }
}
