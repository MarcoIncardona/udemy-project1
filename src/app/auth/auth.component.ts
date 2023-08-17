import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true
  isLoading = false
  error: string = ""

  constructor(
    private authService: AuthService,
    private router: Router){}

  switchMode(){
    this.isLoginMode = !this.isLoginMode
    this.error = ""
  }

  onSubmit(data: NgForm){
    this.error = ""
    const email = data.value.email
    const password = data.value.password

    this.isLoading = true
    if(this.isLoginMode){
      this.authService.signin(email, password).subscribe(res =>{
        this.router.navigate(['./recipes'])
        this.isLoading = false
      }, err =>{
        this.error = err.error.error.message
        this.isLoading = false
      })
    }else{
      this.authService.signup(email, password).subscribe(res =>{
      this.router.navigate(['./recipes'])
      this.isLoginMode = true
      alert("Registrato con successo")
      this.isLoading = false
    }, err =>{
      this.error = err.error.error.message
      this.isLoading = false
    })
    }

    
    data.reset()
  }

  onClose(){
    this.error = ""
  }

}
