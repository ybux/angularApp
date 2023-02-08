import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   form = new FormGroup({
    user: new FormControl('', Validators.minLength(1)),
    pass: new FormControl('', Validators.minLength(1)),
  });

  public constructor(){}

  ngOnInit(): void {
    
  }
  public validateLogin(){
    
    console.log(this.form.value);
  }
}
