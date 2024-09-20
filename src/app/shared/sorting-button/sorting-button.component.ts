import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.css']
})
export class SortingButtonComponent {
  @Output() sortChange = new EventEmitter<string>();

  currentSortLabel = 'Sıralama Seçin';
  private sortSubject = new Subject<'default' | 'lowest' | 'highest'>();

  constructor() {
    this.sortSubject.pipe(
      map(type => {
        switch (type) {
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
        return type;
      })
    ).subscribe(type => {
      console.log('SortingButtonComponent: currentSortLabel updated to:', this.currentSortLabel);
      this.sortChange.emit(type);
    });
  }

  sort(type: 'default' | 'lowest' | 'highest') {
    console.log('SortingButtonComponent: sort called with type:', type);
    this.sortSubject.next(type);
  }
}
