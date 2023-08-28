import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-action',
  templateUrl: './dynamic-action.component.html',
  styleUrls: ['./dynamic-action.component.css']
})
export class DynamicActionComponent {
  @Input() actions: any; 
}
