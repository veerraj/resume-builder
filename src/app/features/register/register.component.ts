import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
      this.registerForm = this.fb.group({
         email:['',Validators.required],
         password:['',Validators.required]
      })
  }

  register(){
       console.log(this.registerForm.value);
       this.auth.register(this.registerForm.value).then(res=>{
           this.registerForm.reset();
       });
  }
 



 
}


