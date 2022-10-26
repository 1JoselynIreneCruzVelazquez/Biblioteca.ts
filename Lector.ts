export class Lector{
    private No_socio:string= "";
    private Nombre:string ="";
    private Telefono:string="";
    private Direccion:string = "";
    private TC:string = "";

    constructor(No_socio:string,Nombre:string,Telefono:string,Direccion:string,TC:string)
    {
        this.No_socio;
        this.Nombre;
        this.Telefono;
        this.Direccion;
        this.TC;
    }
    public get_No_socio():string{
        return this.No_socio;
    }
    public set_No_socio(No_socio:string)
    {
        this.No_socio = No_socio;
    }
    public get_Nombre():string
    {
        return this.Nombre;
    }
    public set_Nombre(Nombre:string)
    {
        this.Nombre = Nombre;
    }
    public get_Telefono():string
    {
        return this.Telefono;
    }
    public set_Telefono(Telefono:string)
    {
        this.Telefono = Telefono;
    }
    public get_Direccion():string
    {
        return this.Direccion;
    }
    public set_Direccion(Direccion:string)
    {
        this.Direccion = Direccion;
    }
    public get_TC():string
    {
        return this.TC;
    }
    public set_TC(TC:string)
    {
        this.TC = TC;
    }
    

    public multar (multar:string):string
    {
        return multar;
    }
    public devolver(devolver:string):string
    {
        return devolver;
    }
    public prestar (prestar:string):string
    {
        return prestar;
    }




    

}