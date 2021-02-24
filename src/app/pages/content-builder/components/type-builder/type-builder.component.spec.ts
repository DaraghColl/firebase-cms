import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBuilderComponent } from './type-builder.component';

describe('TypeBuilderComponent', () => {
  let component: TypeBuilderComponent;
  let fixture: ComponentFixture<TypeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
