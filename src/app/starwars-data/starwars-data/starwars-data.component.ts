import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarwarsDataInternal } from 'src/app/models/starwars-data';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars-data',
  templateUrl: './starwars-data.component.html',
  styleUrls: ['./starwars-data.component.css']
})
export class StarwarsDataComponent implements OnInit {

  @Input() starwarsListSelected : any;

  @Input() data: StarwarsDataInternal = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: ""
  }
  
  @Output() favoriteNameEvent = new EventEmitter<StarwarsDataInternal>();

  starwarslist : any; 

  constructor(public starwarsService: StarwarsService) { }

  ngOnInit(): void {
    
    this.starwarsService.getStarWarsList().subscribe(data => {
        this.starwarslist = data;
    });  
    
  }

  ngOnChanges(){
    this.addImage();
  }

  addImage() {
    const newBackground = document.getElementsByClassName('example-header-image') as HTMLCollectionOf<HTMLElement>;
    if (newBackground.length != 0) {
      switch(this.starwarsListSelected){
        
        case 'Luke Skywalker':
          newBackground[0].style.backgroundImage = "url('../assets/images/lukaskywalker.jpeg')";
          break;
        
        case 'C-3PO':
          newBackground[0].style.backgroundImage = "url('../assets/images/c-3po.jpg')";
          break;
        case 'R2-D2':
          newBackground[0].style.backgroundImage = "url('../assets/images/R2-D2.jpeg')";
          break;
        case 'Darth Vader':
          newBackground[0].style.backgroundImage = "url('../assets/images/darthvader.jpg')";
          break;
        case 'Leia Organa':
          newBackground[0].style.backgroundImage = "url('../assets/images/lei.jpg')";
          break;
        case 'Owen Lars':
          newBackground[0].style.backgroundImage = "url('../assets/images/owen.jpg')";
          break;
        case 'Beru Whitesun lars':
          newBackground[0].style.backgroundImage = "url('../assets/images/beru.jpg')";
          break;
        case 'R5-D4':
          newBackground[0].style.backgroundImage = "url('../assets/images/r5.jpeg')";
          break;
        case 'Biggs Darklighter':
          newBackground[0].style.backgroundImage = "url('../assets/images/biggs.jpg')";
          break;
        case 'Obi-Wan Kenobi':
          newBackground[0].style.backgroundImage = "url('../assets/images/obi.jpg')";
          break;
        default:
          newBackground[0].style.backgroundImage = "url('../assets/images/icon.jpg')";
          break;
          
      }
    }
  }

  sendFavoriteName(name: StarwarsDataInternal){
    this.favoriteNameEvent.emit(name);
  }
  
}

