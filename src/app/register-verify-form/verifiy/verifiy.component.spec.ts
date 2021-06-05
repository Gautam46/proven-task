import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiyComponent } from './verifiy.component';

describe('VerifiyComponent', () => {
  let component: VerifiyComponent;
  let fixture: ComponentFixture<VerifiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
