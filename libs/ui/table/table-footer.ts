import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'tfoot[libTableFooter]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-footer"'
  }
})
export class TableFooter {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', this.class())
  )
}
