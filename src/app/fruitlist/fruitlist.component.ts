import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdate = inject(FruitlistdataService)

  fontColorGood = 'green';
  fontColorBad = 'red';

  nameLog(name: string){
    console.log(name)
  }

  addComment(comment:string, index:number){
  //   console.log(comment, index)
  //   this.fruitlist[index].reviews.push({
  //   name:"*** TheRay ***",
  //   text:comment,
  // })
  }
}
