import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'panel'
    },
    {
        path: 'panel',
        loadChildren: () => import('./pages/panel/panel.module').then(m => m.PanelModule)
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: false}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}
