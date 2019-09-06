import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'htmlEscape'})
export class HtmlEscaperPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/<[^>]*>/g, '');
  }
}
