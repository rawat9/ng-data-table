import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'table[libTable]',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class Table {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('w-full caption-bottom text-sm', this.class())
  )
}
