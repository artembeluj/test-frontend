import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { User } from 'src/app/shared/intaerfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  public id!: number;
  public user!: User;
  private destroy$: Subject<void> = new Subject();

  public constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { };

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => { this.user = data });
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
