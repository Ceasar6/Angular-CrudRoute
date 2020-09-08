import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RoleService} from '../../services/role.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEditUser: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  roles = [];

  constructor(private roleService: RoleService,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    const user = this.userService.getUserId(this.id);
    this.formEditUser = this.fb.group({
      id: [user.id],
      name: [user.name],
      email: [user.email],
      address: [user.address],
      role: [user.role]
    });
  }

  // tslint:disable-next-line:typedef
  edit() {
    this.userService.edit(this.formEditUser.value, this.id);
    this.router.navigate(['/users']);
  }
}
