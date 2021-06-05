import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private userName: string;
  private password: string;
  public userConnected: string = '';
  public submitted: boolean = false;
  public path: string = '';
  userNameFC: FormControl = new FormControl('');
  passwordFC: FormControl = new FormControl('');
  estCoche = false;
  @ViewChild('dialog') dialogComponent = new DialogComponent();

  constructor(private router: Router) {}

  public get getUserName(): string {
    return this.userName;
  }
  public get getPassword(): string {
    return this.password;
  }

  public set setUserName(name: string) {
    this.userName = name;
  }
  public set setPassword(pass: string) {
    this.password = pass;
  }

  public checkUser(): boolean {
    if (
      this.userNameFC.value === `Hanz` &&
      this.passwordFC.value === `sami98`
    ) {
      this.userConnected = 'Connected';
      this.router.navigate(['/cryptotable']);
    }
    return this.userName === `Hanz` && this.password === `sami98`
      ? true
      : false;
  }

  confirmCheck() {
    this.dialogComponent.showModalDialog();
    console.log('box checked');
  }

  onConfirmChecked(event: boolean) {
    console.log('yes pressed');
    console.log(event);
  }
}
