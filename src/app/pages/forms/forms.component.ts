import { Component } from '@angular/core';

import {
  faEnvelope,
  faKey,
  faUser,
  faCalendarAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  faEnvelope = faEnvelope;

  faKey = faKey;

  faUser = faUser;

  faCalendarAlt = faCalendarAlt;

  faPhoneAlt = faPhoneAlt;
}
