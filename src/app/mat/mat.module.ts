import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

 const MatComponents=[ BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule
]


@NgModule({
  declarations: [],
  imports: [MatComponents],
  exports:[MatComponents]
})
export class MatModule { }
