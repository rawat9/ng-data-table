import { Component } from '@angular/core'
import { TableComponent } from 'table'
import { ColumnDef } from '@tanstack/angular-table'
import { type Transaction, transactions } from './data'

@Component({
  imports: [TableComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'transaction_id',
      cell: (info) => info.getValue(),
      header: 'Transaction ID'
    },
    {
      accessorKey: 'transaction_date',
      id: 'date',
      cell: (info) => info.getValue(),
      header: 'Date'
    },
    {
      accessorKey: 'expense_status',
      header: 'Expense Status'
    },
    {
      accessorKey: 'payment_status',
      header: 'Payment',
      footer: (info) => info.column.id
    },
    {
      accessorKey: 'category',
      header: 'Category',
      footer: (info) => info.column.id
    },
    {
      accessorKey: 'amount',
      header: 'Amount ($)',
      footer: (info) => info.column.id,
      meta: {}
    }
  ]

  protected readonly transactions = transactions
}
