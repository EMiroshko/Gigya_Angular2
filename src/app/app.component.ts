import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AccountService ]
})
export class AppComponent implements OnInit {
  title = 'app works!!!';
  options = {
    loginIdentifierConflict: ''
  };
  loginIdentifierArray = [];
  error = '';
  readOnly = false;
  ngOnInit() {
    this.route.data
      .subscribe(data => {
        if (data) {
          this.readOnly = data.readOnly || false;
        }
      });
    this.accountService
    .getPolicies()
      .then(options => {
        this.options = options.accountOptions;
        this.loginIdentifierArray.push(this.options.loginIdentifierConflict);
        console.log(this.options);
      });
  }
  setPolicies(e) {
    e.preventDefault();
    this.error = '';
    this.accountService
      .setPolicies(encodeURI(JSON.stringify(this.options)))
      .then((result) => {
        if (result.errorCode !== 0) {
          this.error = result.errorDetails;
        } else {
          alert('Saved');
        }
      });
  }
  constructor(private accountService: AccountService, private route: ActivatedRoute) {};
}
