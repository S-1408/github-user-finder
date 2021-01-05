import { Component, OnInit , Input} from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
@Input() user: any;

faBuilding= faBuilding;
faLink = faLink;
faPencilAlt =faPencilAlt;
faBook = faBook;
faMapMarkerAlt = faMapMarkerAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
