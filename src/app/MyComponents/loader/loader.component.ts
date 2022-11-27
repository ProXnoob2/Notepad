import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LoaderService } from 'src/app/Services/loader-service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loaderSub: Subscription;
  message!: string;
  options: AnimationOptions = {
    path: '/assets/lottie-animations/purple-blueEffect-loader.json',
  };

  constructor(private loaderService: LoaderService, public dialog: MatDialog) {
    this.loaderSub = this.loaderService.loaderMessage.subscribe((data) => {
      if (data && data.length > 0) {
        this.message = data;
      }
    });
  }

  animationCreated(animationItem: AnimationItem): void {
  }

  ngOnInit(): void {
  }

}
