import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

  @Input('setmycolor') myfcolor:String;
  @Input('lcolor') mylcolor:String;

  constructor(private element:ElementRef) {

    element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') setColoronMouseEnter(){
    this.SetColor(this.myfcolor)
  }
  @HostListener('mouseleave') setColoronMouseLeave(){
    this.SetColor(this.mylcolor)
  }

  private SetColor(color:String){
    this.element.nativeElement.style.color=color;
  }

}
