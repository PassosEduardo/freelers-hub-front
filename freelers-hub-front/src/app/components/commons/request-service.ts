import { HttpClient, HttpContext, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class RequestService {
    constructor(private httpClient: HttpClient) {}

    public ExecuteLogIn(inputEmail: string, inputPassword: string) {
        const body = {
            email: inputEmail,
            password: inputPassword
        }
        return this.httpClient.post('https://localhost:5001/v1/auth/log-in', body)
    }

    public AuthenticateToken(token: string) {

        const requestHeaders = {
            Authorization: `Bearer ${token}`
        }

        return this.httpClient.get<boolean>("https://localhost:5001/v1/auth", {
            headers: requestHeaders
        })
    }
}