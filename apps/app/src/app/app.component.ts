import { Component } from '@angular/core'
import { TableComponent } from 'table'
import { ColumnDef } from '@tanstack/angular-table'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

@Component({
  imports: [TableComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app'

  data: Person[] = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]

  columns: ColumnDef<Person>[] = [
    {
      accessorKey: 'firstName',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    },
    {
      accessorFn: (row) => row.lastName,
      id: 'lastName',
      cell: (info) => `<i>${info.getValue<string>()}</i>`,
      header: (context) => `<span>Last Name ${context}</span>`,
      footer: (info) => info.column.id,
    },
    {
      accessorKey: 'age',
      header: () => 'Age',
      footer: (info) => info.column.id,
    },
    {
      accessorKey: 'visits',
      header: () => `<span>Visits</span>`,
      footer: (info) => info.column.id,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      footer: (info) => info.column.id,
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
      footer: (info) => info.column.id,
    },
  ]
}
