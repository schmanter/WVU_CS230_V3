export class GamesCards {
    picture: string;
    title: string;
    followers: string;

    constructor({picture, title, followers} : 
        {picture:string, title:string, followers:string}) {
            this.picture = picture;
            this.title = title;
            this.followers = followers;
        }
}