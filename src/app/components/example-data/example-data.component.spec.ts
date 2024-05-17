import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDataComponent } from './example-data.component';

describe('ExampleDataComponent', () => {
  let component: ExampleDataComponent;
  let fixture: ComponentFixture<ExampleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
