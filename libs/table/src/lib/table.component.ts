import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal
} from '@angular/core'
import {
  type Table as TanstackTable,
  createAngularTable,
  getCoreRowModel,
  ColumnDef,
  FlexRenderDirective,
  getSortedRowModel,
  SortingState
} from '@tanstack/angular-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '~/ui/table'
import { cn } from '~/ui/utils'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { radixCaretUp, radixCaretDown } from '@ng-icons/radix-icons'
import { Filter } from './components/filter/filter'

@Component({
  selector: 'ng-data-table',
  imports: [
    FlexRenderDirective,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableCell,
    NgIcon,
    Filter
  ],
  templateUrl: './table.component.html',
  viewProviders: [provideIcons({ radixCaretUp, radixCaretDown })],
  providers: [],
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDataTable<T> {
  readonly data = input.required<T[]>()

  readonly columns = input.required<ColumnDef<T>[]>()

  protected table: TanstackTable<T>

  readonly sorting = signal<SortingState>([])

  constructor() {
    this.table = createAngularTable(() => ({
      data: this.data(),
      columns: this.columns(),
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      onSortingChange: (updaterOrValue) =>
        typeof updaterOrValue === 'function'
          ? this.sorting.update(updaterOrValue)
          : this.sorting.set(updaterOrValue),
      state: {
        sorting: this.sorting()
      }
    }))
  }

  protected readonly cn = cn
}
