import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.html',
  styleUrls: ['./message.scss'],
  imports: [RouterLink],
})
export class Message {}
