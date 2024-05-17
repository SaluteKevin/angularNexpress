import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../apis.service';
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})

export class InputFormComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    description: new FormControl('')
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: 0,
      name: ['', [Validators.required, Validators.min(3)]],
      description: ['', [Validators.required, Validators.min(6)]]
    });
  }
  
  onSubmit(): void{
    console.log(this.form.value);
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.apiService.postMessage(this.form.value);
  }

  get f(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }
}
