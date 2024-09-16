import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  userHasSnapped: boolean = false;
  snapButtonText!: string;

  ngOnInit(): void {
      this.snapButtonText = 'Oh Snap!'
    }

  onSnap(): void {
    if(this.userHasSnapped) {
      this.unSanp();
    } else {
      this.snap();
    }
  }

  unSanp(): void {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap(): void {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Ooops, Unsnap!';
    this.userHasSnapped = true;
  }
}
