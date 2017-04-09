import { RouterModule } from '@angular/router';
export var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'faq', loadChildren: './faq/faq.module#FaqModule' }
];
export var AppRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map