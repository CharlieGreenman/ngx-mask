import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-mask-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.scss'],
})
export class TestFileComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestFileComponent],
  exports: [TestFileComponent],
})
export class TestFileModule {}