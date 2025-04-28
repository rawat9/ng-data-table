import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  Table,
} from '@tanstack/angular-table'

@Component({
  selector: 'lib-table',
  imports: [FlexRenderDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  readonly data = input.required<T[]>()

  readonly columns = input.required<ColumnDef<T, never>[]>()

  protected table: Table<T>

  constructor() {
    this.table = createAngularTable(() => ({
      data: this.data(),
      columns: this.columns(),
      getCoreRowModel: getCoreRowModel(),
      enableRowSelection: true,
    }))
  }
}
