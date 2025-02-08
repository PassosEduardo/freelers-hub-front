import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class RequestService {
    constructor(private httpClient: HttpClient) {}

    public ExecuteLogIn(inputEmail: string, inputPassword: string) {
        const body = {
            email: inputEmail,
            password: inputPassword
        }
        return this.httpClient.post('https://localhost:5000/v1/auth/log-in', body)
    }
}