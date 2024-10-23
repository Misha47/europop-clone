import { Component} from '@angular/core';
import { EuropopService } from '../../services/europop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-europop-details',
  templateUrl: './europop-details.component.html',
  styleUrl: './europop-details.component.scss'
})
export class EuropopDetailsComponent {
  detailsData: any
  constructor(private _pop: EuropopService, private _route: ActivatedRoute){
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this._pop.getById(id).subscribe(fetched => {
        this.detailsData = fetched;
        console.log(this.detailsData)
        
      })
    });
    setTimeout(() => {
      this.detailsData.data.modules.forEach((itm: any) => {
        if(itm.type === 'TEXT'){

          (<HTMLInputElement>document.getElementById("iframe")).innerHTML += itm.text
        }

        if(itm.type === 'PHOTO_GALLERY'){
          if(itm.galleryType === 'STANDARD'){
            itm.items.forEach((gallery: any) => {
              (<HTMLInputElement>document.getElementById("iframe")).innerHTML += `
                <div class="photo-galery-wrap my-3">
                  <img class="img w-100 rounded-2" src="${gallery.image.fileUrl}">
                  <h6 class="galleryPhoto-title my-2">${gallery.description}</h6>
                  <hr>
                </div>
              `
            })
          }

        }
      })
    }, 3000)
    
  }

}
