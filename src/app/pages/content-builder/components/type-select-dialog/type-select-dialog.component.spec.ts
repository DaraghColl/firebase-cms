import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelectDialogComponent } from './type-select-dialog.component';

describe('TypeSelectDialogComponent', () => {
  let component: TypeSelectDialogComponent;
  let fixture: ComponentFixture<TypeSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
