import { Component } from '@angular/core'
import { Button } from '~/ui/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '~/ui/dropdown'
import { DropdownAlign } from '@radix-ng/primitives/dropdown-menu'

@Component({
  selector: 'ng-data-table-filter',
  imports: [Button, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem],
  template: `
    <button
      class="rounded-full shadow-none"
      [libDropdownMenuTrigger]="menuContent"
      [align]="DropdownAlign.Start"
      sideOffset="4"
      libButton
      variant="default"
      aria-label="Open edit menu"
    >
      Filter
    </button>

    <ng-template #menuContent>
      <div libDropdownMenuContent>
        <div libDropdownMenuItem>Option 1</div>
        <div libDropdownMenuItem>Option 2</div>
        <div libDropdownMenuItem>Option 3</div>
        <div libDropdownMenuItem>Option 4</div>
      </div>
    </ng-template>
  `
})
export class Filter {
  protected readonly DropdownAlign = DropdownAlign
}
