import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenodeuiComponent } from './treenodeui.component';

describe('TreenodeuiComponent', () => {
  let component: TreenodeuiComponent;
  let fixture: ComponentFixture<TreenodeuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreenodeuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreenodeuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
