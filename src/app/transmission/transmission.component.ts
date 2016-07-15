import { Component, OnInit } from '@angular/core';
import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning';
import { LoginService } from '../shared';

class Listener {
  name: string;
  number: string;
  commentRequested: boolean;
}


@Component({
  moduleId: module.id,
  selector: 'bt-transmission',
  templateUrl: 'transmission.component.html',
  styleUrls: ['transmission.component.css'],
  directives: [NGL_DIRECTIVES]
})
export class TransmissionComponent implements OnInit {

  listeners: Listener[] = [
    {
      name: 'Karl Wilbert',
      number: '+45 22 33 44 55',
      commentRequested: false
    },
    {
      name: 'Lonnie Nielsen',
      number: '+45 33 44 55 66',
      commentRequested: false
    },
    {
      name: 'Nikolaj Dreyer',
      number: '+45 33 44 55 66',
      commentRequested: false
    },
    {
      name: 'Tut Lind',
      number: '+45 33 44 55 66',
      commentRequested: false
    },
    {
      name: 'Hannah Egeberg Zachariassen Krog',
      number: '+45 33 44 55 66',
      commentRequested: true
    }
  ];
  history: Listener[] = this.listeners;
  commentAlertShown: boolean = true;





  ngOnInit() {
  }

  onClose() {
    this.commentAlertShown = false;
  }

}
