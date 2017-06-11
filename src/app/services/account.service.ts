import { Injectable } from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
  constructor(private jsonp: Jsonp) {}
  getPolicies (): any {
    return this.jsonp
      .get('https://accounts.gigya.com/accounts.getPolicies?'
        + 'userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq'
        + '&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK'
        + '&format=jsonp'
        + '&callback=JSONP_CALLBACK')
      .map(res => res.json())
      .toPromise();
  }
  setPolicies (optionsInline): any {
    return this.jsonp
      .get('https://accounts.gigya.com/accounts.getPolicies?'
        + 'userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq'
        + '&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK'
        + '&accountOptions='
        + optionsInline
        + '&format=jsonp'
        + '&callback=JSONP_CALLBACK')
      .map(res => res.json())
      .toPromise();
  }
}
