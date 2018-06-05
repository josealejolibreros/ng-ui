import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { UiTestComponent } from './ui-test/ui-test.component';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule
  ],
  declarations: [UiTestComponent, UiTestCardComponent],
  exports: [
    UiTestComponent,
    UiTestCardComponent
  ]
})
export class TestModule { }
