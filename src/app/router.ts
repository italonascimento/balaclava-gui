import {VNode, p} from '@cycle/dom'
import isolate from '@cycle/isolate'
import TypesPage from 'app/pages/types/types.page'
import {TypesList, TypeForm} from 'app/pages/types/components'
import {ViewComponent} from 'app/types'

export interface Route {
  name: string
  path: string
  view: ViewComponent
  children?: Route[]
}

export const routes: Route[] = [
  {
    name: 'types-page',
    path: 'types',
    view: isolate(TypesPage, 'typesPage'),
    children: [
      {
        name: 'list-mode',
        path: '',
        view: isolate(TypesList, 'typesList')
      },
      {
        name: 'edit-mode',
        path: 'new',
        view: isolate(TypeForm, 'typeForm')
      },
    ],
  },
]
