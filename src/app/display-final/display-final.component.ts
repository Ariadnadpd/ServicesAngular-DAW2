
import { Component, OnInit, ViewChild } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { StarwarsDataInternal } from '../models/starwars-data';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-final',
  templateUrl: './display-final.component.html',
  styleUrls: ['./display-final.component.css'],

})

export class DisplayFinalComponent implements OnInit {

  list: any;
  favoriteName: any[] = [];

  constructor(public starwarsService: StarwarsService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  receiveName($event: StarwarsDataInternal) {
    this.list = $event;
    
    // Mostrar card
    const toggle = document.getElementsByClassName('grid2') as HTMLCollectionOf<HTMLElement>;

    if (toggle.length != 0) {
      toggle[0].style.display = "block";
    }
  }

  openMoreInfo(): void {
    const dialogRef = this.dialog.open(DialogContent);
  }

  receiveFavoriteName($event: StarwarsDataInternal){
    if(!this.favoriteName.includes($event)){
      this.favoriteName.push($event);
    }
  }
 
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent {}