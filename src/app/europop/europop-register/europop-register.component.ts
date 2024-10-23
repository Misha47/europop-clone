import { Component } from '@angular/core';

@Component({
  selector: 'app-europop-register',
  templateUrl: './europop-register.component.html',
  styleUrl: './europop-register.component.scss'
})
export class EuropopRegisterComponent {

  emailField: string = '';
  passwordField: string = '';
  confirmPasswordField: string = '';

  isValidPassword: boolean = false;
  isValidEmail: boolean = false;

  hasLength: boolean = false;
  hasDigits: boolean = false;
  hasUpperLetters: boolean = false;
  hasLowerLetters: boolean = false;


  validEmail(e: any){
    const emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(this.emailField){
      if(emailRgx.test(e.target.value)){
        this.isValidEmail = true
      }else{
        this.isValidEmail = false
      }
    }
  }
  validPassword(e: any){
    const digitsRgx = /(?=.*[0-9])/
    const lengthRgx = /.{8,16}/
    const upperCaseRgx = /(?=.*[A-Z])/
    const lowerCaseRgx = /(?=.*[a-z])/

    if(this.passwordField){
      if(digitsRgx.test(e.target.value)){
        this.hasDigits = true
      }else{
        this.hasDigits = false
      }
      if(lengthRgx.test(e.target.value)){
        this.hasLength = true
      }else{
        this.hasLength = false
      }
      if(upperCaseRgx.test(e.target.value)){
        this.hasUpperLetters = true
      }else{
        this.hasUpperLetters = false
      }
      if(lowerCaseRgx.test(e.target.value)){
        this.hasLowerLetters = true
      }else{
        this.hasLowerLetters = false
      }
      // if(this.hasDigits && this.hasLength && this.hasUpperLetters && this.hasLowerLetters){
      //   this.isValidPassword = true
      // }else{
      //   this.isValidPassword = false
      // }
      
    }
  }
}
