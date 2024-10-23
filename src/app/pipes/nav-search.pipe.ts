import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navSearch'
})
export class NavSearchPipe implements PipeTransform {

  transform(value: string[], filterKey: string): string[] {
    return value.filter(item =>{
      item.toLowerCase().includes(filterKey.toLowerCase())
    })
  }

}
