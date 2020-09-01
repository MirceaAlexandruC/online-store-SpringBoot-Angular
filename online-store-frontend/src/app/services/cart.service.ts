import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from "../../environments/environment";
import { Observable, BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl= `${apiUrl}/cart`;

  public items: Observable<Item[]>;
  public total: Observable<number>;
  private itemsSubject: BehaviorSubject<Item[]>;
  private totalSubject: BehaviorSubject<number>;

  constructor( private http: HttpClient,
               private userService: UserService) {
   this.itemsSubject = new BehaviorSubject<Item[]>(null);
        this.items = this.itemsSubject.asObservable();
        this.totalSubject = new BehaviorSubject<number>(null);
        this.total = this.totalSubject.asObservable();
       
                }
}
