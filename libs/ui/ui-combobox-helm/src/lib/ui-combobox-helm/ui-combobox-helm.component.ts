import { Component, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck, lucideFilter, lucideSearch } from '@ng-icons/lucide'
import { BrnCommandImports } from '@spartan-ng/brain/command'
import { HlmCommandImports } from 'ui/command'
import { HlmButtonDirective } from 'ui/button'
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/brain/popover'
import { HlmPopoverContentDirective } from 'ui/popover'
import { HlmIconDirective } from 'ui/icon'
import { NgForOf } from '@angular/common'

type Framework = { label: string; value: string }

@Component({
  selector: 'hlm-combobox',
  standalone: true,
  imports: [
    BrnCommandImports,
    HlmCommandImports,
    HlmIconDirective,
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    HlmPopoverContentDirective,
    BrnPopoverContentDirective,
    NgForOf,
    NgIcon,
  ],
  providers: [provideIcons({ lucideFilter, lucideSearch, lucideCheck })],
  templateUrl: './ui-combobox-helm.component.html',
  styleUrl: './ui-combobox-helm.component.css',
})
export class Combobox {
  public frameworks = [
    {
      label: 'AnalogJs',
      value: 'analogjs',
    },
    {
      label: 'Angular',
      value: 'angular',
    },
    {
      label: 'Vue',
      value: 'vue',
    },
    {
      label: 'Nuxt',
      value: 'nuxt',
    },
    {
      label: 'React',
      value: 'react',
    },
    {
      label: 'NextJs',
      value: 'nextjs',
    },
  ]
  public currentFramework = signal<Framework | undefined>(undefined)
  public state = signal<'closed' | 'open'>('closed')

  stateChanged(state: 'open' | 'closed') {
    this.state.set(state)
  }

  commandSelected(framework: Framework) {
    this.state.set('closed')
    if (this.currentFramework()?.value === framework.value) {
      this.currentFramework.set(undefined)
    } else {
      this.currentFramework.set(framework)
    }
  }
}
