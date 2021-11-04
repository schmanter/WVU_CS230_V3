import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { PostInfo } from "./post-info.model";


@Injectable({providedIn: 'root'})
export class DatabaseService{
    items: Observable<PostInfo[]>
    constructor (private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<PostInfo>('post-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: PostInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}