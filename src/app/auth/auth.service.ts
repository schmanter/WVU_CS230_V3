import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable ({
    providedIn: 'root'
})
export class AuthService {
    
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts"
    endpoint:string = "signInWithPassword"
    
    public constructor(private http: HttpClient) {

    }

    public submit(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        return this.http.post(this.baseUrl + ':' + this.endpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}