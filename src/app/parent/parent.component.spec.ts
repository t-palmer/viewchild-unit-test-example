import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildStubComponent } from '../child/child-stub.component.spec';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ChildStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp', () => {
    spyOn(component.childComponent, 'updateTimeStamp');
    component.update();
    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();
  });
});
