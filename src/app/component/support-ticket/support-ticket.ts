import { Component } from '@angular/core';

import { DataTable } from './data-table/data-table';
import { TicketBoard } from './ticket-board/ticket-board';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.html',
  styleUrls: ['./support-ticket.scss'],
  imports: [TicketBoard, DataTable],
})
export class SupportTicket {}
