

import{Autor} from "./Autor"
export class Libro {

    public id:number =0;
    private Titulo:string = "";
    private Tipo:string = "";
    private Editorial:string = "";
    private Year:number =0;
    private Autor: any [] = [];
    
    
    constructor(Titulo:string,Tipo:string,Editorial:string,Year:number){
        
        this.Titulo = Titulo;
        this.Tipo = Tipo;
        this.Editorial = Editorial;
        this.Year = Year;
        this.id += 1;
        this.Autor.push(Autor);
    }
    public get_Titulo():string{
        return this.Titulo;
    }
    public set_Titulo(Titulo:string){
        this.Titulo = Titulo;
    }
    public get_Tipo():string{
        return this.Tipo;
    }
    public set_Tipo(Tipo:string){
        this.Tipo = Tipo;
    }
    public get_Editorial():string{
        return this.Editorial;
    }
    public set_Editorial(Editorial:string){
        this.Editorial = Editorial;
    }
    public get_Year():number{
        return this.Year;
    }
    public set_Year(Year:number){
        this.Year = Year;
    }

    }


