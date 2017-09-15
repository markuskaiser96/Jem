import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "clarity-angular";

import { app_routing } from './utils/routing/app-routing.module';
import { AppComponent }  from './app.component';

@NgModule({

  /* DECLARATIONS */
  /* List of components, directives, and pipes that belong to this module. */
  declarations: [ ],


  /* IMPORTS */
  /* List of modules to import into this module. Everything from the imported modules is available to declarations of this module. */
  imports:      [
    BrowserModule,
    ClarityModule.forRoot(),
    app_routing,
  ],


  /* EXPORTS*/
  /* List of components, directives, and pipes visible to modules that import this module. */
  exports:      [ ],


  /* PROVIDERS */
  /* ist of dependency injection providers visible both to the contents of this module and to importers of this module. */
  providers:    [ ],


  /* BOOTSTRAP */
  /* List of components to bootstrap when this module is bootstrapped. */
  bootstrap:    [ AppComponent ]


})
export class AppModule { }
