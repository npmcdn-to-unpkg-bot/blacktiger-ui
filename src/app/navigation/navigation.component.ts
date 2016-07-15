import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared';

class MenuEntry {
  key: string;
  title: string;
  url: string;
  children: MenuEntry[];
}

@Component({
  moduleId: module.id,
  selector: 'bt-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
@Injectable()
export class NavigationComponent implements OnInit {
  openEntry: string;
  selectedEntry: string = 'transmission';
  shown: boolean = false;

  entries: MenuEntry[] = [
    {
      key: 'transmission',
      title: 'Mødetransmission',
      url: '/',
      children: null
    },
    {
      key: 'settings',
      title: 'Indstillinger',
      url: null,
      children: [
        {
          key: 'settings.general',
          title: 'Generelt',
          url: '/settings/general',
          children: null
        },
        {
          key: 'settings.contact',
          title: 'Teknisk kontaktperson',
          url: '/settings/contact',
          children: null
        },
        {
          key: 'settings.create-listener',
          title: 'Tilføj lytter',
          url: '/settings/listener',
          children: null
        }
      ]
    }/*,
    {
      key: 'admin',
      title: 'Administration',
      url: null,
      children: [
        {
          key: 'admin.history',
          title: 'Historik',
          url: '/admin/history',
          children: null
        },
        {
          key: 'admin.actuators',
          title: 'Realtid',
          url: '/admin/actuators',
          children: null
        }
      ]
    }*/,
    {
      key: 'help',
      title: 'Hjælp',
      url: '/help',
      children: null
    }

  ];

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.onAuthenticationChange.subscribe(() => {
      this.shown = loginService.isAuthenticated();
    });
  }

  ngOnInit() { }

  goToUrl(entry: MenuEntry) { 
    this.router.navigate([entry.url]);
  }

  public isActive(entry: MenuEntry): boolean {
    return entry.key === this.selectedEntry;
  }

  public isOpen(entry: MenuEntry): boolean {
    return entry.key === this.openEntry;
  }

  onEntryClick(entry: MenuEntry) {
    if(entry.children != null) {
      console.log('Toggling ' + entry.key);
      
      // Toggle children of entry
      if(this.openEntry === entry.key) {
        this.openEntry = null;
      } else {
        this.openEntry = entry.key;
      }

    } else {
      console.log('Selecting ' + entry.key);
      this.selectedEntry = entry.key;
      this.goToUrl(entry);
    }
  }

}
