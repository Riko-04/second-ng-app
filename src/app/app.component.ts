import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>This is an {{title}}!</h1>
      <p>Hello, world!!!</p>
    <router-outlet />
  `,
  styles: [`
      h1 {
        padding: 20px;
        border-radius: 10px;
        font-size: 30px;
        color: rgba(87, 91, 191, 0.2);
        text-align: center;
        margin: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.9s;
      }
      h1:hover {
        transform: scale(1.05);
      } 
      h1:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
        transition: box-shadow 0.3s;
      }
      p {
        background-color: lightblue;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
        color: #333;
        text-align: center;
        margin: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.9s;
      }
    `],
})
export class AppComponent {
  title = 'Angular App';
}
