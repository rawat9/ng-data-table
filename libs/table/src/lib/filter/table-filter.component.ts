import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Combobox } from 'ui/combobox'

@Component({
  selector: 'lib-table-filter',
  imports: [Combobox],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
  isOpen = false

  items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item1' },
    { label: 'Item 3', value: 'item1' },
  ]
}
