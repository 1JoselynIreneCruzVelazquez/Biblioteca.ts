export class Multa{

    private FechaInicio:string= "";
    private FechaFinal:string= "";

    constructor(FechaInicio:string,FechaFinal:string)
    {
        this.FechaInicio = FechaInicio;
        this.FechaFinal = FechaFinal;
    }
    public get_FechaInicio():string
    {
        return this.FechaInicio;
    }
    public set_FechaInicio(FechaInicio:string){
        this.FechaInicio = FechaInicio;
    }
    public get_FechaFinal():string
    {
        return this.FechaFinal;
    }
    public set_FechaFinal(FechaFinal:string){
        this.FechaFinal = FechaFinal;
    }

}