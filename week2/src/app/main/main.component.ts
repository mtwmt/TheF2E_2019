import { Component, OnInit, ElementRef, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { fromEvent, } from 'rxjs';
import { map, takeUntil, concatAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  type = [
    { icon: 'spade', color: 'black' },
    { icon: 'heart', color: 'red' },
    { icon: 'diamond', color: 'red' },
    { icon: 'club', color: 'black' },
  ];

  imgSrc = {
    type: ['club', 'diamond', 'heart', 'spade'],
    num: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    template: 'TheF2E_2019/week2/dist/week2/assets/images/cards/{{ type }}/{{ num }}_{{ type }}.svg'
  };

  cards: Array<any> = [];
  putCard: Array<any> = [[], [], [], [], [], [], [], []];

  constructor(
    private el: ElementRef
  ) {
    for (let i in this.type) {
      if (this.type.hasOwnProperty(i)) {
        for (let j = 0; j < 13; j++) {
          let imaSrc = this.imgSrc.template;
          imaSrc = imaSrc.replace(/{{ type }}/g, this.type[i].icon);
          imaSrc = imaSrc.replace('{{ num }}', this.imgSrc.num[j]);
          this.cards.push({
            imgSrc: imaSrc,
            initX: 0,
            initY: 0,
            icon: this.type[i].icon,
            color: this.type[i].color,
            num: (j + 1) + (13 * +i)
          });
        }
      }
    }

    this.doRandom(this.cards);
  }

  ngOnInit() {

    // this.getElement();
    this.setCartPos();

    // const down$ = fromEvent(document.getElementsByClassName('.card'), 'mousedown');
    // const move$ = fromEvent(document, 'mousemove');
    // const up$ = fromEvent(document, 'mouseup');

    // down$.pipe()


  }
  setCartPos() {
    this.cards.map((e, i) => {
      this.putCard[i % this.putCard.length].push(this.cards[i]);

    });
  }
  // getElement() {
  //   let $el = this.el.nativeElement.querySelectorAll('.box-put li');

  //   $el.forEach((e, i) => {
  //     console.log( 'e',e )
  //     // console.log(123, e.offsetLeft, e.offsetTop )

  //     // this.refPos.push( { 'refX': e.offsetLeft, 'refY':e.offsetTop} );
  //   });
  // }
  // shuffle 亂數排列(洗牌)
  doRandom(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
