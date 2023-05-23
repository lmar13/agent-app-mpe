import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class AgentComponent {
  constructor(private httpClient: HttpClient) {}

  createAgent(): void {
    this.httpClient
      .post('/agent', { id: '20' })
      .subscribe((data) => console.log(data));
  }

  getData(): void {
    this.httpClient.get('/').subscribe((data) => console.log(data));
  }
}
