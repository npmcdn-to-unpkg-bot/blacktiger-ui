import { provideRouter, RouterConfig }  from '@angular/router';
import { TransmissionComponent } from './transmission';
import { GeneralComponent } from './settings/general';
import { ListenerComponent } from './settings/listener';
import { ContactComponent } from './settings/contact';

const routes: RouterConfig = [
  {
    path: '',
    component: TransmissionComponent
  },
  {
      path: 'settings/general',
      component: GeneralComponent
  },
  {
      path: 'settings/listener',
      component: ListenerComponent
  },
  {
      path: 'settings/contact',
      component: ContactComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];