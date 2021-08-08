import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null;
  @Input('variant') variant: 'primary' | 'secondary' = 'primary';
  @Input('variant') icon: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
