import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'tbody[libTableBody]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-body"'
  }
})
export class TableBody {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('[&_tr:last-child]:border-0', this.class())
  )
}
