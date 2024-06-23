import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  
  onSubmit(): void {
    const formValue = this.loginForm.value;
    console.log("dffd",formValue);
  }

}
