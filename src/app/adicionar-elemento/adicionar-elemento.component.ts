import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-elemento',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './adicionar-elemento.component.html',
  styleUrl: './adicionar-elemento.component.css'
})
export class AdicionarElementoComponent {
  constructor(private fb: FormBuilder) { 

  }

  adicionarForm = this.fb.group({
    'numero':['', Validators.required],
    'carta':['',Validators.required]
  })

  adicionar(){
    
  }
}
