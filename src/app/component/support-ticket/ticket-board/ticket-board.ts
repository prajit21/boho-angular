import { Component } from '@angular/core';

import { ticketListStatus } from '../../../shared/data/data/support-ticket/support-ticket';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.html',
  styleUrls: ['./ticket-board.scss'],
  imports: [],
})
export class TicketBoard {
  public ticketListStatus = ticketListStatus;
}
