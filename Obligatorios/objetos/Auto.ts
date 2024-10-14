export class Auto{
    private modelo: number;
    private marca: string;
    private color: string;

    public constructor(modelo:number, marca:string, color:string){
        this.modelo=modelo;
        this.marca=marca;
        this.color=color;
    }

    getModelo():number{
        return this.modelo
    }

    getMarca():string{
        return this.marca
    }
    
    getColorAuto(p0: string):string{
        return this.color
    }

    setModelo(modelo:number): void{
        this.modelo=modelo
    }

    setMarca(marca:string):void {
        this.marca=marca
    }

    setColor (color:string):void{
        this.color=color
    }
}


