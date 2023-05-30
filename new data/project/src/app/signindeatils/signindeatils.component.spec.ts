import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignindeatilsComponent } from './signindeatils.component';

describe('SignindeatilsComponent', () => {
  let component: SignindeatilsComponent;
  let fixture: ComponentFixture<SignindeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignindeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignindeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
