import {Routes} from "@angular/router";
import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventsListResolver,
  EventsResolver
} from './events/index'
import {Error404Component} from "./errors/404.component";

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolver}},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'events/session/new', component: CreateSessionComponent}
]
