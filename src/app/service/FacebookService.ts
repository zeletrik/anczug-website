import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FacebookService {

    accessToken = 'EAAFnb1NV2dABALsmbCSMWeYZBYCfDtHPRY57BCl0vmfnJXj96tePgapkD0RI3pWzZAilns1LNsorKqIrqfrRZAuDZCmNZB5uFRMrz3ZBkPlhRvEZAMv2tdWcenLKx6dAZBvBHqSDsD6oylZAHeVpep1OJZCIKEiwCrMc01daMbIn71mAZDZD';

    url = 'https://graph.facebook.com/v3.2/749832225118453?fields=posts.limit(3)&access_token=' + this.accessToken;

    constructor(private _httpClient: HttpClient) { }

    getEntries(): Observable<any[]> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };
        return this._httpClient.get<any[]>(this.url, httpOptions);
      }
}
