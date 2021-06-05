import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateFormComponent } from './authenticate-form.component';

describe('RegisterVerifyFormFormComponent', () => {
  let component: RegisterVerifyFormFormComponent;
  let fixture: ComponentFixture<RegisterVerifyFormFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterVerifyFormFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVerifyFormFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
