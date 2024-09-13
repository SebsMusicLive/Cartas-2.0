import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private fb: FormBuilder) { 

  }

  login(){
    
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }
  get clave() {
    return this.loginForm.get('clave');
  }

  loginForm = this.fb.group({
    'usuario': ['', Validators.required],
    'clave': ['', Validators.required]
  });
}
