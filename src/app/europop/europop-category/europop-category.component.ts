import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EuropopService } from '../../services/europop.service';

@Component({
  selector: 'app-europop-category',
  templateUrl: './europop-category.component.html',
  styleUrl: './europop-category.component.scss'
})
export class EuropopCategoryComponent {
  data: any
  categoryInfo: any;
  fixedResourceNumber: string = '';
  constructor(private _pop: EuropopService, private _route: ActivatedRoute){
    _route.paramMap.subscribe(params => {
      let id = params.get('categoryId');
      console.log(params)
      _pop.getPostsByCategory(id).subscribe(fetched => {
        this.data = fetched;
        console.log(fetched)
      })
      _pop.getCategoryInfo(id).subscribe(fetched => {
        this.categoryInfo = fetched;
      }) 
    })
    setTimeout(() => {
      this.categoryInfo.data.resourceCount < 1000 ? this.fixedResourceNumber = this.categoryInfo.data.resourceCount : (
        this.categoryInfo.data.resourceCount >= 1000 && this.categoryInfo.data.resourceCount < 1000000 ? this.fixedResourceNumber = (this.categoryInfo.data.resourceCount / 1000).toFixed(1) + "K" : ''
      )
    }, 2000)
  }
}



// <p>საქართველოს ნაკრების ფეხბურთელმა ხვიჩა კვარაცხელიამ სოციალურ ქსელში დაწერა, რომ შრომას გააგრძელებენ და უფრო ძლიერები დაბრუნებიან. როგორც მან აღნიშნა, ყველაზე ბედნიერი იყო, როცა გახარებულ ქართველებს ხედავდა.</p>
// <p>"ამაყები და თავაწეულები ვტოვებთ ევროპის ჩემპიონატს! უამრავი საოცარი ემოციით და მოგონებით. ჩვენს ხალხს და ქვეყანას ბევრი სიხარული და სიამაყის წუთები ვაჩუქეთ, ამით ყველაზე ბედნიერი ვარ, როცა ვხედავდი ტრიბუნებზე, ტელევიზორებთან, ქუჩებში გახარებულ ქართველებს. მინდა მადლობა გითხრათ ყველას, ვაგრძელებთ შრომას, განვითარებას და დაგიბრუნდებით უფრო ძლიერები", - დაწერა ხვიჩამ სოციალურ ქსელში.</p>
// <p style="margin-left:0px;">შეგახსენებთ, რომ საქართველოს ნაკრებმა ევროპის ჩემპიონატზე ისტორიაში პირველად ითამაშა და ქართული ფეხბურთის ისტორია დაწერა: ვილი სანიოლის გუნდმა პირველივე ცდაზე ჯგუფიდან გასვლა მოახერხა, რაც ძალიან კარგია შედეგია. საქართველომ ჯგუფურ ეტაპზე დორტმუნდში თურქეთთან წააგო (1:3), შემდეგ ჰამბურგში ჩეხეთს დაუზავდა (1:1), ხოლო გელზენკირხენში პორტუგალიასთან ისტორიული გამარჯვება მოიპოვა (2:0).</p>
// <figure class="media"><oembed url="https://www.instagram.com/p/C84v2KbMDUd/?img_index=1"></oembed></figure>