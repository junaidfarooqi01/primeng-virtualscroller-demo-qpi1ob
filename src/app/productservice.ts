import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    getPosts(skip, rows): Observable<any> {
        const page = (skip / rows) + 1;

        return this.http.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${rows}`);
    }

}