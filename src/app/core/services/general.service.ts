import { Injectable} from '@angular/core';
import { HttpHeaders} from "@angular/common/http";
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';
export const base_endpoint = environment.baseURL;
export const endpoint = base_endpoint;
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() {
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
