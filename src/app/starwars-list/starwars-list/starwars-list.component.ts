import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
import { StarwarsDataInternal } from 'src/app/models/starwars-data';

@Component({
  selector: 'app-starwars-list',
  templateUrl: './starwars-list.component.html',
  styleUrls: ['./starwars-list.component.css']
})
export class StarwarsListComponent implements OnInit {

  @Input() favoriteNameSelected : any;

  @Input() data: StarwarsDataInternal = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
  }

  @Output() nameEvent = new EventEmitter<StarwarsDataInternal>();
  
  starwarsList : any;
  selectedName: string | undefined;
  
  constructor(public starwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.starwarsService.getStarWarsList().subscribe(data => {
      this.starwarsList = data;
    });
  }

  sendName(name: StarwarsDataInternal){
    this.nameEvent.emit(name); 
  }

}

