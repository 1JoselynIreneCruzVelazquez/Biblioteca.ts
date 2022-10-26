import { Libro } from './Libro';
import { Lector } from './Lector';
export class Copia{
    private fecha:string ;
    private id:number = 0;
    private estado:string ;
    private libros: any[]=[];
    
    
    constructor(fecha:string,estado:string){
        this.fecha = fecha;
        this.estado = estado;

    }
    public get_id():number{
        return this.id;
    }
    public set_id(id:number){
        this.id = id;
    }
    public get_estado():string{
        return this.estado;
    }
    public set_estado(estado:string){
        this.estado = estado;
    }
    public get_fecha():string{
        return this.fecha;
    }
    public set_fecha(fecha:string){
        this.fecha = fecha;
    }
    public listaCopias(){
        console.log(this.libros);
    }

    public agregarCopia(Nocpias:number,libro:Libro,lector:Lector){
        this.id++;
        let Registro={
            Registro:this.id,
            lector:Lector,
            NumCopias:Nocpias,
            estado:'proceso',
            libro:libro
        
        };
        this.libros.push(Registro);

    }
    



}