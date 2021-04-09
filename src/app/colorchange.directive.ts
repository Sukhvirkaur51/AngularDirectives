import { ElementRef, HostListener, Input ,Directive} from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {


  constructor(public el:ElementRef) {
    //el.nativeElement.style.backgroundColor='red'
  }
  @Input() appColorchange!:string;


     @HostListener('mouseenter') onMouseEnter(){
     this.el.nativeElement.style.backgroundColor=this.appColorchange;
    }

   @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor="white"
       }


}
