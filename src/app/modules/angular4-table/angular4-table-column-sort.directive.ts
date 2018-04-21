import { Directive, HostListener, Renderer, ElementRef, Input } from '@angular/core';
import { TableService } from '../_services/table.service';


@Directive({
    selector: '[Angular4TableColumnSort]'
})

export class Angular4TableColumnSortDirective {
    @Input() Angular4TableColumnSort: string;
    @Input() columnSortDescIconClass = '';
    @Input() columnSortAscIconClass = '';

    private sortColumn = null;
    private sortOrder = true;

    constructor(
        private _renderer: Renderer,
        private _elem: ElementRef,
        private tableService: TableService) { }

    @HostListener('click') click() {
        this.sort(this.Angular4TableColumnSort);
    }

    sort(column) {
        if (this.tableService.prevElem !== null) {
            this._renderer.setElementProperty(
                this.tableService.prevElem.nativeElement,
                'innerHTML',
                this.tableService.prevElem.nativeElement.innerText);
        }
        this.tableService.prevElem = this._elem;

        if (this.tableService.sortColumn === column) {
            this.tableService.sortOrder = !this.tableService.sortOrder;
        } else {
            this.tableService.sortColumn = column;
            this.tableService.sortOrder = true;
        }

        const innerText = this._elem.nativeElement.innerText;
        if (this.tableService.sortOrder === true) {
            console.log('<i class=' + this.columnSortAscIconClass + ' aria-hidden="true"></i>')
            this._renderer.setElementProperty(
                this._elem.nativeElement,
                'innerHTML',
                innerText + '  <i class="' + this.columnSortAscIconClass + '" aria-hidden="true"></i>');
        }
        if (this.tableService.sortOrder === false) {
            this._renderer.setElementProperty(
                this._elem.nativeElement,
                'innerHTML',
                innerText + '  <i class="' + this.columnSortDescIconClass + '" aria-hidden="true"></i>');
        }
        column = this.tableService.sortOrder === true ? [this.tableService.sortColumn] : ['-' + this.tableService.sortColumn];
        this.tableService.notifySortOther(column);
    }
}
