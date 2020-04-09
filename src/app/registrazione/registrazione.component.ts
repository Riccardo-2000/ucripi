import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  
  signform:FormGroup;

  constructor(private datiUtenti:LoginService ,private fb: FormBuilder,private router: Router) {

    this.signform = this.fb.group({
      username:'',
      password:''
    });

   }

  ngOnInit(): void {
  }

  onSubmit(user){
    this.datiUtenti.add(user);
    this.return();
  }
  return(){
    this.router.navigateByUrl("/home");
  }


}
