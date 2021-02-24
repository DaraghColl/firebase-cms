import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ContentBuilderComponent } from './pages/content-builder/content-builder.component';
import { ContentEditorComponent } from './pages/content-editor/content-editor.component';
import { LoginComponent } from './pages/login/login.component';
import { TypeListComponent } from './pages/content-builder/components/type-list/type-list.component';
import { TypeBuilderComponent } from './pages/content-builder/components/type-builder/type-builder.component';

// ng material
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentBuilderComponent,
    ContentEditorComponent,
    LoginComponent,
    TypeListComponent,
    TypeBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
