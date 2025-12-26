import { AfterViewInit, Component, input } from "@angular/core";
import { tap, filter, iif, takeWhile } from "rxjs";
import { MessageService } from "../../../services/message.service";
import { CommonModule } from "@angular/common";
import { Field } from "@angular/forms/signals";


@Component({
  selector: "app-dynamic-select",
  templateUrl: "./dynamic-select.component.html",
  styleUrls: ["./dynamic-select.component.css"],
  imports: [CommonModule, Field]
})
export class DynamicSelectComponent implements AfterViewInit {
  field = input<any>();
  formField = input<any>();
  alive = true;

  constructor(private messageService: MessageService) {
  }


  ngAfterViewInit(): void {
    this.listenForLinkData();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  listenForLinkData() {
    const fieldValue = this.field();
    if (!fieldValue?.link) {
      return;
    }
    this.messageService.message$.pipe(
      filter(v => v.link === fieldValue.link),
      takeWhile(() => this.alive)
    ).subscribe((v) => {
      const currentField = this.field();
      if (currentField) {
        currentField.options = v.data;
      }
    })
  }

  changedValue(value: string) {
    const fieldValue = this.field();
    if (!fieldValue?.provideData) {
      return;
    }
    this.messageService.messageSubject.next({
      link: fieldValue.fieldName,
      data: fieldValue.provideData.filter(v => v.sourceValue === value)
    })
  }
}
