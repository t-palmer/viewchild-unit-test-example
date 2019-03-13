import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-child',
  template: '',
  providers: [
    {
      provide: ChildComponent,
      useClass: ChildStubComponent
    }
  ]
})
export class ChildStubComponent {
  updateTimeStamp() {}
}
