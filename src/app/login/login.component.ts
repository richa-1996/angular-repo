import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 email: string;
 filterName: string;
  constructor(
    private route: Router
  ) {}
  ngOnInit() {
}

loadHomePage() {
  this.route.navigate(['/home']);
}

clear() {
this.filterName = '';
this.email='';

}
}
