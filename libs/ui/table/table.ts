import { computed, input, Directive } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'table[libTable]',
  host: {
    '[class]': 'hostClasses()'
  }
})
class Table {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('w-full caption-bottom text-sm', this.class())
  )
}

export { Table }
export { TableHeader } from './table-header'
export { TableHead } from './table-head'
export { TableRow } from './table-row'
export { TableBody } from './table-body'
export { TableCell } from './table-cell'
export { TableCaption } from './table-caption'
export { TableFooter } from './table-footer'
