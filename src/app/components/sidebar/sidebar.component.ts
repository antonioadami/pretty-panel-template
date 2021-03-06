import { Component } from '@angular/core';
import {
  faChartBar,
  faTable,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faChartBar = faChartBar;

  faTable = faTable;

  faFileAlt = faFileAlt;
}
