import { Component, Input, OnDestroy } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { PhotoService } from 'src/app/core/services/photo.service';
import { User } from 'src/app/shared/intaerfaces/user';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnDestroy {
  public uploadedPhotoUrl: string | null = null;
  private destroy$: Subject<void> = new Subject();

  @Input() user!: User;

  public constructor(
    private photoSetvice: PhotoService
  ) { };

  public onFileSelected(event: Event): void {
    const inputFile = (event.target as HTMLInputElement)?.files?.[0];

    if (inputFile) {
      const formData = new FormData();
      formData.append('photo', inputFile);
      this.uploadedPhotoUrl = URL.createObjectURL(inputFile);
      this.photoSetvice.uploadPhoto(formData, this.user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    };
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  };
}
