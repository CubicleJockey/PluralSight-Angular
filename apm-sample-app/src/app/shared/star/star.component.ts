import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
     selector: 'pm-star'
    ,templateUrl: './star.component.html'
    ,styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    public cropWidth: number = 75;
    public rating: number = 4;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}