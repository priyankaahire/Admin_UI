import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Admin } from '../../shared/model/admin';
import {GeneralService, endpoint, httpOptions} from './general.service';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient, private _generalService: GeneralService) { }
    getAdmins(): Observable<any[]> {
        return this.http.get<any[]>(`${endpoint}/adminui-problem/members.json`)
            .pipe(
                catchError(this._generalService.handleError<any[]>('getAdmins', []))
            );
    }
}