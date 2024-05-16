import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.min(3)]],
      description: ['', [Validators.required, Validators.min(6)]]
    });
  }

  get f(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    
    if(this.form.invalid){
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
