
export class Autor{
    private Nombre:string = "";
    private Nacionalidad:string = "";
    private FechaNaci:string = "";

    constructor(Nombre:string,Nacionalidad:string,FechaNaci:string){
        this.Nombre = Nombre;
        this.Nacionalidad = Nacionalidad;
        this.FechaNaci = FechaNaci;

    }
    public get_Nombre():string
    {
        return this.Nombre;
    }
    public set_Nombre(Nombre:string)
    {
        this.Nombre = Nombre;
    }
    public get_Nacionalidad():string{
        return this.Nacionalidad;
    }
    public set_Nacionalidad(Nacionalidad:string)
    {
        this.Nacionalidad = Nacionalidad;
    }
    public get_FechaNaci():string{
        return this.FechaNaci;
    }
    public set_FechaNaci(FechaNaci:string)
    {
        this.FechaNaci = FechaNaci;
    }




}
    

    
        
    