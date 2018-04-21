
# Angular 4 Table
Angular 4 Table is a angular table component which you can easily plug and play in your angular application. Which comes with various features as column selection, row selection, searching, sorting and pagination with server side data.

## Features
 - Column selection
 - Row Selection
 - Searching
 - Sorting
 - Pagination

## Install
You can easily install it via npm as `npm install angular4-table`

## Usage
Once installed, you can import Angular 4 Table component into any application’s  `app.module.ts`, by including it in its  `@NgModule`  imports array.

    
    import { Angular4TableModule } from  'angular4-table'; // import Angular 4 Table module
    
    @NgModule({
	    declarations: [
		    AppComponent
	    ],
	    imports: [
		    BrowserModule,
		    Angular4TableModule //import Angular 4 Table module
		],
		providers: [],
		bootstrap: [AppComponent]    
    })    
    export  class  AppModule { }

And using its selector in a template as shown below
`<app-angular4-table (loadData)="loadCustomers($event)" name="customer" [defaultColumns]="defaultColumns" [tableColumns]="customersColumns" [tableData]="customers" [total]="total"></app-angular4-table>`

## Attribute List
`tableClass`: css class for table. default is `'table table-hover'`

`tableHeaderClass`: css class for table header. default is `'thead-dark'`

`tableViewClass`: css class for table view. default is `'fa fa-bars text-primary'`

`gridViewClass`: css class for grid view. default is `'fa fa-th text-primary'`

`filterIconClass`: css class for filter icon. default is `'fa fa-filter'`

`columnsIconClass`: css class for column icon. default is `'fa fa-columns'`

`columnSortAscIconClass`: css class for column sort in asscending order. default is `'fa fa-sort-alpha-asc'`

`columnSortDescIconClass`: css class for column descending order. default is `'fa fa-sort-alpha-desc'`

`indexColumn`: show or hide index column. default is `true`

`selectableColumn`: the column value which we want to select on row selection. default is `'_id'`

`defaultColumns`: The columns which we want to show by default on loading of table. this value should be an array of column names.

`tableColumns`: Array of all the table columns we we want to show on UI

`tableData`: Table data which we want to show on UI. This value should be Array of objects.

`name`: Name of table

`total`: Total number of table rown

`pageBy`: Table paginated by number of rows. Default is `10`

`grid`: For Default view as grid or table view. Default view of angular 4 table is table view so default value is `false`

`selectable`: This should be `true` if you want select the row on click. default value is `true`

`filter`: This should be `true` if you want a filtring feature. default value is `true`

`sort`: This should be `true` if you want a sorting feature. default value is `true

`loadData`: Pass a function name by which we are calling server data.


## License
MIT License
