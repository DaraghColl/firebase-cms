import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContentBuilderComponent } from './pages/content-builder/content-builder.component';
import { ContentEditorComponent } from './pages/content-editor/content-editor.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'builder', component: ContentBuilderComponent },
  { path: 'editor', component: ContentEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
