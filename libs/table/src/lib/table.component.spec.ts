import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent<any>
  let fixture: ComponentFixture<TableComponent<any>>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
