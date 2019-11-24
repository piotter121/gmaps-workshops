import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMapComponent } from './no-map.component';

describe('NoMapComponent', () => {
  let component: NoMapComponent;
  let fixture: ComponentFixture<NoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
