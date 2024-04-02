import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _Renderer2: Renderer2) {}
  ngOnInit(): void {}

  searchForm: FormGroup = new FormGroup({
    movieName: new FormControl(null),
  });

  @ViewChild('navbar') navElement!: ElementRef; //^ (1) element
  @HostListener('window:scroll') //^ (2) method
  onScroll(): void {
    // console.log('hello scroll '); //& for test
    if (scrollY > 400) {
      this._Renderer2.addClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow-lg');
      // this._Renderer2.setStyle(
      //   this.navElement.nativeElement,
      //   'background-color',
      //   'rgba(0, 0, 0, 0.658)'
      // );
    } else {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow-lg');
      // this._Renderer2.removeStyle(
      //   this.navElement.nativeElement,
      //   'background-color'
      // );
    }
  }
}
