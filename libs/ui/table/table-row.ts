import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'tr[libTableRow]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-row"'
  }
})
export class TableRow {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn(
      'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
      this.class()
    )
  )
}
