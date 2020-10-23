import { DataService } from './service/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './component/data/data/data.component';
import { FormPipe } from './pipe/form/form.pipe';
import { MinmaxPipe } from './pipe/minmax/minmax.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FormPipe,
    MinmaxPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
