export class Prestamo{
    
    private inicio:string = "";
    private Final:string = "";

    constructor(inicio:string,Final:string){
        this.inicio = inicio;
        this.Final = Final;
    }
    public get_inicio():string{
        return this.inicio;
    }
    public set_inicio(inicio:string){
        this.inicio = inicio;
    }
    public get_Final():string{
        return this.Final;
    }
    public set_Final(Final:string){
        this.Final = Final;
    }
}