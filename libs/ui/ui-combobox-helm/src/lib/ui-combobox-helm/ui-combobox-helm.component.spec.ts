import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiComboboxHelmComponent } from './ui-combobox-helm.component'

describe('UiComboboxHelmComponent', () => {
  let component: UiComboboxHelmComponent
  let fixture: ComponentFixture<UiComboboxHelmComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComboboxHelmComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UiComboboxHelmComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
