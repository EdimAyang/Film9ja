//Button interface
export interface Ibtn {
    children:string,
    size?:string,
    color?:string,
    color2?:string
}

//Login interface
 export interface ILogIn {
    state?:string
    state2?:string
}

//popular Movies

export interface ICategories {
        adult?:boolean
        backdrop_path:string
        id:number
        overview:string
        poster_path:string
        releaseDate:string
        title:string;
        popularity:number
        name:string
}[]