import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contra'
})
export class ContraPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
