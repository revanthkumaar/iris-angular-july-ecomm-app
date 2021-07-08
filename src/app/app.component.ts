import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  products = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getPosts().subscribe((data: any) => {
      console.log('data', data);
      this.products = data;
    });
  }
}
