import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true

  switchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(data: NgForm){
    console.log(data.value)
  }

}
