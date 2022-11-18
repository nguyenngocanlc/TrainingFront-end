import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  fullName: string = 'Ấn';
  dobYear: number = 1989;
  mobile: string = '0914 126 849';

  constructor() {}

  ngOnInit(): void {}
}
