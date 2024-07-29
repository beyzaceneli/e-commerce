import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.css']
})
export class SortingButtonComponent {
  @Output() sortChanged = new EventEmitter<string>();

  currentSort: string = 'default';

  onSortChange(sortType: string) {
    this.currentSort = sortType;
    this.sortChanged.emit(this.currentSort);
  }
}
