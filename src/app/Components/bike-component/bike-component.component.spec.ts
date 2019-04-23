import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeComponentComponent } from './bike-component.component';

describe('BikeComponentComponent', () => {
  let component: BikeComponentComponent;
  let fixture: ComponentFixture<BikeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
