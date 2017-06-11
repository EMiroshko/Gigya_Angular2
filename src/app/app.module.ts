import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';

const appRoutes: Routes = [
  { path: 'edit', component: AppComponent },
  { path: 'readOnly',
    component: AppComponent,
    data: {
      readOnly: true
    }
  },
  { path: '',
    redirectTo: '/edit',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
