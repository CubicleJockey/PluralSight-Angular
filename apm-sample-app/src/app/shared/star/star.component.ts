import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
     selector: 'pm-star'
    ,templateUrl: './star.component.html'
    ,styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    public cropWidth: number = 75;

    @Input()
    public rating: number = 0;

    @Output()
    public ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    public starChange(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }
}