import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class MessageService {
    public messageSubject = new Subject<any>();
    public message$ = this.messageSubject.asObservable()
}