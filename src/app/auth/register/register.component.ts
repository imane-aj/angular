import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup
  success = false;
  errMessage = ''
  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3),  Validators.maxLength(6)]],
      // phone: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue]
  }
  );
  }
  // // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  register(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched()
    }else{
      const formValue = this.registerForm.value
      console.log(this.registerForm)
      this.authService.register(formValue).subscribe({next:() => {
        this.success = true
        },error : (err) =>{
          if(err.error.code == 11000)
            this.errMessage= 'User already exists!! Try something else.'
          else 
            this.errMessage= 'Something went wrong!!'
        }})
    }
    
    }

}

