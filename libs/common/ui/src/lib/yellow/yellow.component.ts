import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mask-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.scss'],
})
export class YellowComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YellowComponent],
  exports: [YellowComponent],
})
export class YellowModule {}