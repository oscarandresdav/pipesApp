import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
  transform(siVuela: boolean): string {
    return siVuela ? 'vuela' : 'no vuela'
  }

}