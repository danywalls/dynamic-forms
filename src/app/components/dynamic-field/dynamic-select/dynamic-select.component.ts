import { AfterViewInit, Component, Input } from "@angular/core";
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { tap, filter, iif, takeWhile } from "rxjs";
import { MessageService } from "../../../services/message.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-dynamic-select",
  templateUrl: "./dynamic-select.component.html",
  styleUrls: ["./dynamic-select.component.css"],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DynamicSelectComponent implements AfterViewInit {
  @Input() field: any;
  formName: FormGroup;
  alive = true;

  constructor(
    private messageService: MessageService,
    private formGroupDirective: FormGroupDirective) {
    this.formName = formGroupDirective.control;
  }


  ngAfterViewInit(): void {
    this.listenForLinkData();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  listenForLinkData() {
    if (!this.field?.link) {
      return;
    }
    this.messageService.message$.pipe(
      filter(v => v.link === this.field.link),
      takeWhile(() => this.alive)
    ).subscribe((v) => {
      this.field.options = v.data
    })
  }

  changedValue(value: string) {
    if (!this.field.provideData) {
      return;
    }
    this.messageService.messageSubject.next({
      link: this.field.fieldName,
      data: this.field.provideData.filter(v => v.sourceValue === value)
    })
  }
}
