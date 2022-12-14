import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss']
})
export class ThirdFormComponent implements OnInit {

  @Output()
  sendthirdForm : EventEmitter<PlayerHabit> = new EventEmitter;

  thirdFormResults : PlayerHabit = new PlayerHabit(
    0, false, 0, false, false, false, false
  );

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sendthirdForm.emit(this.thirdFormResults);
  }

}