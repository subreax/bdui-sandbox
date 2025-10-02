import type { Component } from 'vue'

import { VButton, VColumn, VRow, VCheckbox, VInput, VStepper, VText, TextButton, VSpacer, VIcon, VImage, IconButton, VContainer, ScrollableRow, VScaffold } from './components'

export const availableComponents = {
  button: VButton,
  textbutton: TextButton,
  column: VColumn,
  row: VRow,
  checkbox: VCheckbox,
  input: VInput,
  stepper: VStepper,
  text: VText,
  spacer: VSpacer,
  icon: VIcon,
  image: VImage,
  iconbutton: IconButton,
  container: VContainer,
  scrollable_row: ScrollableRow,
  scaffold: VScaffold
} as const satisfies Record<ComponentKind, Component>

const COMPONENT_KIND = {
  BUTTON: 'button',
  TEXTBUTTON: 'textbutton',
  COLUMN: 'column',
  ROW: 'row',
  CHECKBOX: 'checkbox',
  INPUT: 'input',
  STEPPER: 'stepper',
  TEXT: 'text',
  SPACER: 'spacer',
  ICON: 'icon',
  IMAGE: 'image',
  ICONBUTTON: 'iconbutton',
  CONTAINER: 'container',
  SCROLLABLEROW: 'scrollable_row',
  SCAFFOLD: 'scaffold'
} as const
// TODO: вынести в отдельное место для автоматического создания типа
export type ComponentKind = ValueOf<typeof COMPONENT_KIND>

type ValueOf<T> = T[keyof T]

export interface StatelessComponent {
  kind: ComponentKind
  body?: Array<StatelessComponent>,
  properties?: any
}


export function processScreen(screen: any): any {
  return {
    root: processComponent(screen.root),
    rnd: Math.random()
  }
}

function processComponent(component: StatelessComponent): any {
  let body = undefined;
  if (component.body) {
    body = component.body.map((it) => processComponent(it));
  }

  return {
    kind: component.kind,
    body: body,
    ...component.properties
  }
}