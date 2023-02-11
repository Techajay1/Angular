
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm = new FormGroup({
    firstname: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private httpservice: AuthService, private router: Router) { }
  // tslint:disable-next-line:typedef
  formData() {

    return this.httpservice.RegisterUser(this.RegisterForm.value).subscribe(res => {
      console.log(res);
      alert('registration success!');
      this.RegisterForm.reset();
      this.router.navigate(['signin']);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit(): void {

  }
  get Firstname(): FormControl {
    return this.RegisterForm.get('firstname') as FormControl;
  }
  get Lastname(): FormControl {
    return this.RegisterForm.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.RegisterForm.get('email') as FormControl;
  }
  get Username(): FormControl {
    return this.RegisterForm.get('username') as FormControl;
  }
  get Password(): FormControl {
    return this.RegisterForm.get('password') as FormControl;
  }
}
