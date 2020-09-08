import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../services/role.service';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAddUser: FormGroup;
  roles = [];

  constructor(private roleService: RoleService,
              private userService: UserService,
              private fb: FormBuilder,
              private route: Router){
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    this.formAddUser = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  get id(){
    return this.formAddUser.get('id');
  }
  // tslint:disable-next-line:typedef
  get name(){
    return this.formAddUser.get('name');
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.formAddUser.get('email');
  }
  // tslint:disable-next-line:typedef
  get address(){
    return this.formAddUser.get('address');
  }
  // tslint:disable-next-line:typedef
  get role(){
    return this.formAddUser.get('role');
  }

  // tslint:disable-next-line:typedef
  add() {
    console.log(this.formAddUser.value);
    this.userService.add(this.formAddUser.value);
    this.route.navigate(['/users']);
  }

}
