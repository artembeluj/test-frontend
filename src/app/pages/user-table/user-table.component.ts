import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';

import { DataService } from 'src/app/core/services/data.service';
import { User } from 'src/app/shared/intaerfaces/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnDestroy {
  public dataSource!: MatTableDataSource<User>;
  public displayedColumns: string[] = ['ID', 'name', 'username', 'email'];
  private destroy$: Subject<void> = new Subject();

  public constructor(
    private dataService: DataService,
    private _liveAnnouncer: LiveAnnouncer
  ) { };

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public ngOnInit(): void {
    this.dataService.getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  };

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    };
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
