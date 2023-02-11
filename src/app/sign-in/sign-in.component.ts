import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleLoginUser() {
    this.authservice.loginUser(this.formGroup.value).subscribe(res => {
      console.log(res);
      
      this.router.navigate(['/home']);
    }, err => { console.log(err); });
  }


  // tslint:disable-next-line:typedef

  getPass(pass:any){
console.log(pass);

  }
}
