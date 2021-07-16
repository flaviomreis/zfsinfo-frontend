import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appFor]',
})
export class ForDirective implements OnInit {
  @Input('appForOf') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    this.numbers = [];
  }

  ngOnInit(): void {
    for (let n of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: n });
    }
  }
}
