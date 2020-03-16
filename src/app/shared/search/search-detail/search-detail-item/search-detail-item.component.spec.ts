import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailItemComponent } from './search-detail-item.component';

describe('SearchDetailItemComponent', () => {
  let component: SearchDetailItemComponent;
  let fixture: ComponentFixture<SearchDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
