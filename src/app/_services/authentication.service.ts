import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        const token: string = this.generateToken();
        return this.http.post<any>(`http://127.0.0.1:8000/api/login`, { email, password, token })
            .pipe(map(user => {
                return user;
            }));
    }

    private generateToken(): string {
        const dateNow: Date = new Date();
        const hour: string = dateNow.getHours().toPrecision(2);
        const minutes: string = dateNow.getMinutes().toPrecision(2);
        return `${hour}${minutes}`;
    }
}