import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  userProfile: FormGroup;

  constructor(private fb : FormBuilder) {
    this.userProfile=this.fb.group({
      nom : [''],
      prenom: [''],
      age: [0],
      adresse: this.fb.group({
        numero : [141],
        rue:['du Faubourg'],
        ville:['']
      })
    })
  }

  ngOnInit(): void {
  }

  inscription = () =>{
    console.log(this.userProfile.get("nom").value);
    console.log(this.userProfile.get("adresse.rue").value)
  }
}
