import { Component, Input } from "@angular/core";
import { GamesCards } from "./games-cards-model";
import { mock_games } from "./mock-games";

@Component({
    selector: 'app-game-card',
    templateUrl: 'game-card.component.html',
    styleUrls: ["game-card.component.css"]
})

export class GameCard {

    @Input()
    picture! :string;
    @Input()
    title! :string;
    @Input()
    followers! :string;

}