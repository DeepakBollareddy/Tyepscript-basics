import {component} from '@angular/core'

@component{
  selector: 'course';
  template: ` <button class="btn btn-primary" [class.active]="isActive">Save</button>`
})

export class CoursesComponent{
 isActive= true;
}
