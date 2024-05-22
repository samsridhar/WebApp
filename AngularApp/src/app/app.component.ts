import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './app/core/login/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    //store default data when component initialized email - hr@tarkiz.info, password - tarkizinfo
    this.localStorageService.saveData({
      email: 'hr@tarkiz.info',
      password: 'tarkizinfo',
    });
  }
}
