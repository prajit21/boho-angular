import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as auditlog from '../../../../shared/data/data/ecommerce/audit-log';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.html',
  styleUrls: ['./audit-log.scss'],
  imports: [RouterLink],
})
export class AuditLog {
  public AuditLogData = auditlog.Auditlog;
}
