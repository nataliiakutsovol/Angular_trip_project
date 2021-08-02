import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../src/environments/environment';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const intercept = req.url.includes(environment.server);
        const token = 'wo0a590ik29679a';
        let authReq = req;

        if(intercept) {
            authReq = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + token) });
        }
        
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];