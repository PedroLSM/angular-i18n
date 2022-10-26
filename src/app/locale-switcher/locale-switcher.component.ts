import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
  styleUrls: ['./locale-switcher.component.scss']
})
export class LocaleSwitcherComponent implements OnInit {

  @Input() footer = false;

  locales = [
    { code: 'pt-BR', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) { }

  ngOnInit(): void {
  }

  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }
}
