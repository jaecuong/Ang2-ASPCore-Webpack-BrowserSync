import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './components/faq.component';

const routes: Routes = [
    { path: '', component: FaqComponent }
];

export const FaqRoutes = RouterModule.forChild(routes);