import { computed, Directive, input } from '@angular/core'
import { cn } from '../utils'

@Directive({
  selector: 'caption[libTableCaption]',
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-slot]': '"table-caption"'
  }
})
export class TableCaption {
  readonly class = input<string>()

  protected readonly hostClasses = computed(() =>
    cn('text-muted-foreground mt-4 text-sm', this.class())
  )
}
