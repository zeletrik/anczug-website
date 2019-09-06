import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { SectionsComponent } from './sections.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { FacebookSectionComponent } from './facebook-section/facebook-section.component';
import { MaterialsSectionComponent } from './materials-section/materials-section.component';
import { MembersSectionComponent } from './members-section/members-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GalleryModule } from '@ngx-gallery/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HtmlEscaperPipe } from '../pipe/HtmlEscaperPipe'

@NgModule({
  declarations: [
    SectionsComponent,
    GallerySectionComponent,
    FacebookSectionComponent,
    MaterialsSectionComponent,
    AboutSectionComponent,
    MembersSectionComponent,
    HtmlEscaperPipe
  ],
  entryComponents: [],
  imports: [
    PdfViewerModule,
    GalleryModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
   ],
  exports: [ SectionsComponent ]
})
export class SectionsModule { }
