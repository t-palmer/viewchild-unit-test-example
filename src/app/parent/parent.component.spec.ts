import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import {ChildComponent} from "../child/child.component";
import {ChildStubComponent} from "../child/child-stub.component.spec";

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
    component.childComponent = <ChildComponent>TestBed.createComponent(ChildStubComponent).componentInstance;
//    const compiled = fixture.debugElement.nativeElement;
//    component.childComponent = compiled.querySelector('app-child').componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp', () => {
    console.log('component.childComponent', component.childComponent);
    spyOn(component.childComponent, 'updateTimeStamp');
    component.update();

//    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();
  });
});
