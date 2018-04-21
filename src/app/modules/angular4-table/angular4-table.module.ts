import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular4TableComponent } from './angular4-table.component';
import { Angular4TableFilterComponent } from './angular4-table-filter.component';
import { Angular4TableColumnSelectorComponent } from './angular4-table-coloumn-selector.component';
import { Angular4TablePaginationComponent } from './angular4-table-pagination.component';
import { Angular4TableColumnSortDirective } from './angular4-table-column-sort.directive';
import { TableService } from '../_services/table.service';
import { LocalStorageService, SessionStorageService } from '../_services/webstorage.service';
import { FormatColumnPipe } from '../_pipes/format-column.pipe';
import { ChainedAttributePipe } from '../_pipes/chained-attribute.pipe';
import { SplitAndTitlePipe } from '../_pipes/split-and-titlecase.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Angular4TableComponent,
    Angular4TableFilterComponent,
    Angular4TableColumnSelectorComponent,
    Angular4TablePaginationComponent,
    Angular4TableColumnSortDirective,
    FormatColumnPipe,
    ChainedAttributePipe,
    SplitAndTitlePipe
  ],
  providers: [
    TableService,
    LocalStorageService,
    SessionStorageService
  ],
  exports: [
    Angular4TableComponent
  ]
})
export class Angular4TableModule { }
