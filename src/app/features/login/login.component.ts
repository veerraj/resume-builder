import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
   })
}

  login(){
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).then(res=>{
        this.loginForm.reset();
    });
}

}
