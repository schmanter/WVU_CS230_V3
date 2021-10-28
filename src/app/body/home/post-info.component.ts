import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { PostInfo } from "./post-info.model";

@Injectable({providedIn: 'root'})
@Component({
    selector: "post-info",
    templateUrl: "post-info.component.html"
})
export class PostInfoComponent implements OnInit {
    
    myInfo: PostInfo | undefined;
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
        console.log("Sending a get request to the server");
        this.getPostInfo();
        console.log("Registering showPostInfo as a subscriber");
        this.showPostInfo();
    }

    getPostInfo() {
        return this.http.get<PostInfo>('https://medaltv-app-default-rtdb.firebaseio.com/post-info.json')
    }

    showPostInfo() {
        this.getPostInfo().subscribe((data:PostInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }

    modifyPostInfo(data:PostInfo) {
        return this.http.put('https://medaltv-app-default-rtdb.firebaseio.com/post-info.json', data);
    }

}