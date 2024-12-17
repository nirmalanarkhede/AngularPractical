import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}

  public getuserlist(): Observable<any> {
    return this.httpClient.get(`https://gorest.co.in/public/v1/users`)
  }

  public posts(userid: any): Observable<any> {
  return this.httpClient.get(`https://gorest.co.in/public/v1/users/${userid}/posts`);
}
public getcomments(postid: any): Observable<any> {
  return this.httpClient.get(`https://gorest.co.in/public/v1/posts/${postid}/comments`);
}
}
