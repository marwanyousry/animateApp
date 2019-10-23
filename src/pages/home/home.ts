import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimationBuilder, AnimationMode } from 'css-animator/builder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('card1') firstCard: ElementRef;
  @ViewChild('card2') secondCard: ElementRef;
  @ViewChild('card3') thirdCard: ElementRef;

  card: string[];
  constructor(public navCtrl: NavController) {
    this.card = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
  }

  ionViewDidLoad(){
    let animater = new AnimationBuilder();
    animater.pin = false;
    animater.duration = 1000;

    animater.setType('fadeInLeft').show(this.firstCard.nativeElement).then(()=>{

    });
    animater.setType('fadeInLeft').show(this.secondCard.nativeElement).then(()=>{

    });
    animater.setType('fadeInLeft').show(this.thirdCard.nativeElement).then(()=>{

    });
  }

}
