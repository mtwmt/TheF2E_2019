import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { TaskComponent } from './sidebar/task/task.component';
import { AnalysisComponent } from './sidebar/analysis/analysis.component';
import { SoundComponent } from './sidebar/sound/sound.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    TaskComponent,
    AnalysisComponent,
    SoundComponent,
  ],
  entryComponents: [
    TaskComponent,
    AnalysisComponent,
    SoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
