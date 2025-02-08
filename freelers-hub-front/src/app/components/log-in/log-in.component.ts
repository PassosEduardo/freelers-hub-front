import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonImports } from '../commons/common-imports';
import { Router } from '@angular/router';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { RequestService } from '../commons/request-service';

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
    private requestService: RequestService) {}

  logInForm = new FormGroup({
    inputEmail: new FormControl(''),
    inputPassword: new FormControl('')
  })

  public GoToSignUp() {
    this.router.navigateByUrl('/sign-up');
  }

  public ExecuteLogIn() {
    console.log(this.logInForm.controls.inputEmail.value)
    console.log(this.logInForm.controls.inputPassword.value)

    this.requestService.ExecuteLogIn(this.logInForm.controls.inputEmail.value!, 
      this.logInForm.controls.inputPassword.value!).subscribe( (result: any) => {
        debugger
        console.log(result)
      })
  }

}
