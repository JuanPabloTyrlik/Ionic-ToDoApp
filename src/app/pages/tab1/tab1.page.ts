import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public tasksService: TasksService,
               private router: Router,
               private alert: AlertController ) {}

  async addList() {
    // this.router.navigateByUrl('tabs/add');
    const alert = await this.alert.create({
      header: 'Crear lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Crear',
          role: 'submit',
          handler: ( data ) => {
            if (data.title.length === 0) {
              return;
            }
            this.tasksService.newList(data.title);
          }
        }
      ]
    });

    await alert.present();
  }

}
