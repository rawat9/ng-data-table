import { BooleanInput } from '@angular/cdk/coercion'
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  input
} from '@angular/core'
import { cn } from '../utils'
import {
  RdxDropdownMenuContentDirective,
  RdxDropdownMenuItemCheckboxDirective,
  RdxDropdownMenuItemDirective,
  RdxDropdownMenuItemIndicatorDirective,
  RdxDropdownMenuItemRadioDirective,
  RdxDropdownMenuItemRadioGroupDirective,
  RdxDropdownMenuLabelDirective,
  RdxDropdownMenuSeparatorDirective,
  RdxDropdownMenuTriggerDirective
} from '@radix-ng/primitives/dropdown-menu'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  radixChevronRight,
  radixCircle,
  radixCheck
} from '@ng-icons/radix-icons'

@Directive({
  selector: '[libDropdownMenuTrigger]',
  hostDirectives: [
    {
      directive: RdxDropdownMenuTriggerDirective,
      inputs: [
        'rdxDropdownMenuTrigger: libDropdownMenuTrigger',
        'disabled',
        'side',
        'align',
        'sideOffset',
        'alignOffset'
      ],
      outputs: ['onOpenChange']
    }
  ]
})
export class DropdownMenuTrigger {}

@Directive({
  selector: '[libDropdownMenuContent]',
  hostDirectives: [
    {
      directive: RdxDropdownMenuContentDirective,
      inputs: ['closeOnEscape', 'onEscapeKeyDown']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuContent {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn(
      'z-50 min-w-40 overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class()
    )
  )
}

@Directive({
  selector: '[libDropdownMenuSubContent]',
  hostDirectives: [
    {
      directive: RdxDropdownMenuContentDirective,
      inputs: ['closeOnEscape', 'onEscapeKeyDown']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuSubContent {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn(
      'z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg shadow-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class()
    )
  )
}

@Directive({
  selector: '[libDropdownMenuItem]',
  hostDirectives: [
    {
      directive: RdxDropdownMenuItemDirective,
      inputs: ['disabled'],
      outputs: ['onSelect']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuItem {
  readonly class = input<string>()
  readonly inset = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute
  })

  computedClass = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.inset() && 'pl-8',
      this.class()
    )
  )
}

@Directive({
  selector: '[libDropdownMenuLabel]',
  hostDirectives: [RdxDropdownMenuLabelDirective],
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuLabel {
  readonly class = input<string>()

  readonly inset = input(false, {
    transform: booleanAttribute
  })

  readonly computedClass = computed(() =>
    cn(
      'px-2 py-1.5 text-xs font-medium text-muted-foreground',
      this.inset() && 'pl-8',
      this.class()
    )
  )
}

@Directive({
  selector: '[libDropdownMenuSeparator]',
  hostDirectives: [RdxDropdownMenuSeparatorDirective],
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuSeparator {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn('-mx-1 my-1 h-px bg-border', this.class())
  )
}

@Directive({
  selector: 'span[libDropdownMenuShortcut]',
  host: {
    '[class]': 'computedClass()'
  }
})
export class DropdownMenuShortcut {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn('ml-auto text-xs tracking-widest opacity-60', this.class())
  )
}

@Component({
  selector: '[oriDropdownMenuSubTrigger]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  viewProviders: [provideIcons({ radixChevronRight })],
  hostDirectives: [
    DropdownMenuItem,
    {
      directive: RdxDropdownMenuTriggerDirective,
      inputs: [
        'rdxDropdownMenuTrigger: oriDropdownMenuSubTrigger',
        'disabled',
        'side',
        'align',
        'sideOffset',
        'alignOffset'
      ],
      outputs: ['onOpenChange']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  },
  template: `
    <ng-content />
    <ng-icon class="text-muted-foreground/80 ml-auto" name="radix" />
  `
})
export class DropdownMenuSubTrigger {
  readonly class = input<string>()
  readonly inset = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute
  })

  computedClass = computed(() =>
    cn(
      'flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      this.inset() && 'pl-8',
      this.class()
    )
  )
}

@Directive({
  selector: '[libDropdownMenuRadioGroup]',
  hostDirectives: [
    {
      directive: RdxDropdownMenuItemRadioGroupDirective,
      inputs: ['value'],
      outputs: ['valueChange']
    }
  ]
})
export class DropdownMenuRadioGroup {}

@Component({
  selector: '[libDropdownMenuRadioItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RdxDropdownMenuItemIndicatorDirective, NgIcon],
  viewProviders: [provideIcons({ radixCircle })],
  hostDirectives: [
    {
      directive: RdxDropdownMenuItemRadioDirective,
      inputs: ['value', 'disabled']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  },
  template: `
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ng-icon
        class="h-2 w-2 fill-current"
        name="radixCircle"
        rdxDropdownMenuItemIndicator
      />
    </span>
    <ng-content></ng-content>
  `
})
export class DropdownMenuRadioItem {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class()
    )
  )
}

@Component({
  selector: '[libDropdownMenuCheckboxItem]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RdxDropdownMenuItemIndicatorDirective, NgIcon],
  viewProviders: [provideIcons({ radixCheck })],
  hostDirectives: [
    {
      directive: RdxDropdownMenuItemCheckboxDirective,
      inputs: ['checked', 'disabled'],
      outputs: ['checkedChange']
    }
  ],
  host: {
    '[class]': 'computedClass()'
  },
  template: `
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ng-icon class="h-4 w-4" name="radixCheck" rdxDropdownMenuItemIndicator />
    </span>
    <ng-content></ng-content>
  `
})
export class DropdownMenuCheckboxItem {
  readonly class = input<string>()

  readonly computedClass = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class()
    )
  )
}
