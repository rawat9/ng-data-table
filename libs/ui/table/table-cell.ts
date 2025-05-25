import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'td[libTableCell]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-cell"'
  }
})
export class TableCell {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('p-3 align-middle [&:has([role=checkbox])]:pr-0', this.class())
  )
}
