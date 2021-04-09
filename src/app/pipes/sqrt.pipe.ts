import { Pipe, PipeTransform } from "@angular/core";
import { concat } from "rxjs";

@Pipe({
  name:'concat'
})
export class SqrtPipe implements PipeTransform{
  transform(value:string ,value1:string):string
{
//  const str1="abc";
//  const str2="def";

  return value.concat(value1.toString());

}



}
