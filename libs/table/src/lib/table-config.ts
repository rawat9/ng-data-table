import { InjectionToken, Provider } from '@angular/core'
import { TableState } from '@tanstack/angular-table'

export const NgDataTableConfig = new InjectionToken<TableState>(
  'Table configuration for data table'
)

const defaultTableConfig: TableState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10
  },
  sorting: [],
  columnVisibility: {},
  columnOrder: [],
  globalFilter: '',
  rowSelection: {},
  columnFilters: [],
  columnSizing: {},
  expanded: {},
  columnPinning: {},
  rowPinning: undefined,
  grouping: [],
  columnSizingInfo: undefined
}

/**
 * Provide the default table configuration
 * @param config The Table configuration
 * @returns The provider
 */
export function provideTableConfig(config: Partial<TableState>): Provider[] {
  return [
    {
      provide: NgDataTableConfig,
      useValue: { ...defaultTableConfig, ...config }
    }
  ]
}
