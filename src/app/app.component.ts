import { Component } from '@angular/core'
import { NgDataTable } from 'table'
import { ColumnDef } from '@tanstack/angular-table'
import { type Transaction, transactions } from './data'

@Component({
  imports: [NgDataTable],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'merchant',
      header: 'Merchant',
      footer: (info) => info.column.id
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
      accessorKey: 'country',
      header: 'Country',
      footer: (info) => info.column.id
    },
    {
      accessorKey: 'continent',
      header: 'Continent',
      footer: (info) => info.column.id
    },
    {
      accessorKey: 'amount',
      header: 'Amount ($)',
      footer: (info) => info.column.id,
      meta: {}
    },
    {
      accessorKey: 'transaction_date',
      id: 'date',
      cell: (info) => info.getValue(),
      header: 'Date'
    }
  ]

  protected readonly transactions = transactions
}
