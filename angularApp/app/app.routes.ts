import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'faq', loadChildren: './faq/faq.module#FaqModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);
