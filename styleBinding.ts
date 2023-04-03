import {component} from '@angular/core'

@component{
  selector: 'course';
  template: ` <button [class.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>`
})

export class CoursesComponent{
 isActive= true;
}
