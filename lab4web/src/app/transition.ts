
export class setget{
    value: string = 'home'

    valueSetter(value: string): void{
        this.value = value;
    }
    valueGetter(){
        return this.value
    }
}