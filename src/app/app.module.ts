import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng material
import { MatIconModule } from '@angular/material/icon';
import { ContentBuilderComponent } from './pages/content-builder/content-builder.component';
import { ContentEditorComponent } from './pages/content-editor/content-editor.component';
import { LoginComponent } from './pages/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentBuilderComponent,
    ContentEditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
