import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'th[libTableHead]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-head"'
  }
})
export class OriTableHead {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn(
      'text-muted-foreground h-12 px-3 text-left align-middle font-medium has-[role=checkbox]:w-px [&:has([role=checkbox])]:pr-0',
      this.class()
    )
  )
}
