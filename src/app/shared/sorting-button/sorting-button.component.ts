import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.css']
})
export class SortingButtonComponent {
  @Output() sortChange = new EventEmitter<string>();
  
  currentSortLabel = 'Sıralama Seçin';

  sort(type: 'default' | 'lowest' | 'highest') {
    console.log('SortingButtonComponent: sort called with type:', type);
    this.sortChange.emit(type);
    switch(type) {
      case 'default':
        this.currentSortLabel = 'Varsayılan Sıralama';
        break;
      case 'lowest':
        this.currentSortLabel = 'En Düşük Fiyat';
        break;
      case 'highest':
        this.currentSortLabel = 'En Yüksek Fiyat';
        break;
    }
    console.log('SortingButtonComponent: currentSortLabel updated to:', this.currentSortLabel);
  }
}
