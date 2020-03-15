import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    createdOn: Date;
    endedOn: Date;
    completed: boolean;
    items: ListItem[];

    constructor( title: string ) {
        this.title = title;
        this.id = new Date().getTime();
        this.createdOn = new Date();
        this.completed = false;
        this.items = [];
    }
}
