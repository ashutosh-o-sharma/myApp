import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPageModule } from './tabs/tabs.module';
import { AddCommentComponent } from './add-comment/add-comment.component';

const routes: Routes = [

  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './welcome-page/welcome-page.module#WelcomePagePageModule' },
  { path: 'loginpage', loadChildren: './Login/login-page/login-page.module#LoginPagePageModule' },
  { path: 'comment', component: AddCommentComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
