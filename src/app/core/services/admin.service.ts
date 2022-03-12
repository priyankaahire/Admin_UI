import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Admin } from '../../shared/model/admin';

@Injectable()
export class AdminService {
    BASE_URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com';
    log = '';
    constructor(private http: HttpClient) { }

    getAdmins(): Observable<Admin[]> {
        return this.http.get<Admin[]>(`${this.BASE_URL}/adminui-problem/members.json`)
            .pipe(
                catchError(this.handleError<Admin[]>('getAdmins', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}