import { Component } from "@angular/core";
import { AuthResponse } from "./auth-response";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent {
    constructor (private authService:AuthService){

    }
    public onSubmit(data: NgForm) {
        console.log("Button clicked");
        console.log(data.value);
        this.authService.submit(data.value.email, data.value.password).subscribe((data:AuthResponse) => {
            console.log(data);
        });
    }
}