import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private service:CommonService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

login(){  
  if(this.loginForm.valid){    
    this.service.signin(this.loginForm.value).subscribe(data=>{
      this.service.changeSidebarStatus('show');
      this.router.navigate(['/dashboard']);
    });
  }
}

get username() {
  return this.loginForm.get('username');
}

get password() {
  return this.loginForm.get('password');
}
}
