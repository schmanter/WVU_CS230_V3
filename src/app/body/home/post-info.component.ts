import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { PostInfo } from "./post-info.model";

@Injectable()
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
        this.modifyPostInfo().subscribe(data => {
            console.log(data);
        })
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

    modifyPostInfo() {
        var temp: PostInfo = {
            video: "https://www.youtube.com/embed/sN5XetbrzLc",
            user: "Greg Potts",
            avatar: "https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
        }
       
        return this.http.put('https://medaltv-app-default-rtdb.firebaseio.com/post-info.json', temp);
    }

}