import {Injectable} from '@angular/core';
import {Listing} from './types';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpService: HttpClient) {
  }

  getListings(): Observable<Listing[]> {
    return this.httpService.get<Listing[]>('/api/listing');
  }
}
