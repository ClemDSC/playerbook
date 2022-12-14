import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFormComponent } from './third-form.component';

describe('ThirdFormComponent', () => {
  let component: ThirdFormComponent;
  let fixture: ComponentFixture<ThirdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
