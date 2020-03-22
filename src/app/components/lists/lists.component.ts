import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList, {static: false}) slidingList: IonList;
  @Input() pending = true;

  constructor(  public tasksService: TasksService,
                private router: Router,
                private alert: AlertController  ) {}

  ngOnInit() {}

  editList(list: List) {
    if (this.pending) {
      this.router.navigate(['/tabs/tab1/add', list.id]);
    } else {
      this.router.navigate(['/tabs/tab2/add', list.id]);
    }
  }

  deleteList(list: List) {
    this.tasksService.deleteList(list);
  }

  async renameList(list: List) {
    const alert = await this.alert.create({
      header: 'Modificar nombre de la lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.slidingList.closeSlidingItems()
        },
        {
          text: 'Modificar',
          role: 'submit',
          handler: ( data ) => {
            if (data.title.length === 0) {
              return;
            }
            list.title = data.title;
            this.tasksService.saveLocalStorage();
            this.slidingList.closeSlidingItems();
          }
        }
      ]
  });

    await alert.present();
  }
}
