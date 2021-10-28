import { Component, Injectable } from "@angular/core";
import { PostInfoComponent } from "./post-info.component";
import { PostInfo } from "./post-info.model";

@Component({
    selector: 'edit-post-info',
    templateUrl: 'edit-post-info.component.html'
})
export class EditPostInfoComponent {
    
    constructor(private postService:PostInfoComponent) {

    }

    onUpdatePostInfo(data:PostInfo){
        console.log("You pressed the button");
        console.log(data);
        this.postService.modifyPostInfo(data).subscribe(data => {
            console.log("Updated info");
        });
    }
}
