import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'thead[libTableHeader]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-header"'
  }
})
export class TableHeader {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() => cn(this.class()))
}
