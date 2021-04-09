import { Component, Input, OnInit, } from '@angular/core';
import {ColorchangeDirective} from '../colorchange.directive';


@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    color!:string;


 }






