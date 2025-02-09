import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonImports } from '../commons/common-imports';
import { Router } from '@angular/router';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { RequestService } from '../commons/request-service';
import { Toast, ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-log-in',
  imports: [CommonImports],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent {

  constructor(
    private router: Router,
    private requestService: RequestService,
    private toaster: ToastrService) {}

  logInForm = new FormGroup({
    inputEmail: new FormControl(''),
    inputPassword: new FormControl('')
  })

  public GoToSignUp() {
    this.router.navigateByUrl('/sign-up');
  }

  public ExecuteLogIn() {
    this.requestService.ExecuteLogIn(this.logInForm.controls.inputEmail.value!, 
      this.logInForm.controls.inputPassword.value!).subscribe( (result: any) => {
        if(result.token) {
          localStorage.setItem('freelers_token', result.token);
          this.router.navigateByUrl('/home');
          this.toaster.success("Logged in succesfully")
        }

      }, (error) => {
        this.toaster.error('Email or password not found or incorrect')
      })
  }

}
