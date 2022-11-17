import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input()
  userGameListToChild: User = new User('', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

 isAddGameFormVisible: boolean = false;

 userGameInfoResult : UserGameInfo = new UserGameInfo (0,'', '', 0, '', '', '');


  constructor() { }

  ngOnInit(): void {}

  toggleEditButton(): void {
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  receiveUserGameInfoForm(event : UserGameInfo) : void {
    this.userGameInfoResult = event;
  }

}
