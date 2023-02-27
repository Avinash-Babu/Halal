import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-halal-card',
  templateUrl: './halal-card.component.html',
  styleUrls: ['./halal-card.component.scss']
})
export class HalalCardComponent implements OnInit {

  @Input() imgURL: string = '';
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
