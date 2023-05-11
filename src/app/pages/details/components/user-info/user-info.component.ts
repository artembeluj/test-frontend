import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { DataService } from 'src/app/core/services/data.service';
import { User } from 'src/app/shared/intaerfaces/user';

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
    private dataService: DataService,
    private route: ActivatedRoute
  ) { };

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getUserById(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => { this.user = data });
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
