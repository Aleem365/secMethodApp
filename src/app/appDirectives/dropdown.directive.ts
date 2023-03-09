import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.active') classname:any;
  @HostListener('click') myclick(){
    this.classname = !this.classname
  }

}
