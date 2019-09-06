import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document: any, private element: ElementRef) {}
    @HostListener('window:scroll', ['$event'])
    hasScrolled() {
        const navbar = document.getElementsByTagName('nav')[0];
        const st = window.pageYOffset;

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        if (st > lastScrollTop && st > navbarHeight){
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
        } else {
            if (st + window.innerHeight < document.body.scrollHeight) {
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
                if (st < 500) {
                    if (navbar.classList.contains('navbar-blue-color')) {
                        navbar.classList.remove('navbar-blue-color');
                    }
                    navbar.classList.add('navbar-transparent-color');
                } else {
                    if (navbar.classList.contains('navbar-transparent-color')) {
                        navbar.classList.remove('navbar-transparent-color');
                    }
                    navbar.classList.add('navbar-blue-color');
                }
            }
        }
        lastScrollTop = st;
    }

    ngOnInit() {
      this.hasScrolled();
    }
}
