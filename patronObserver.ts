interface Observable {
    attach(o:Observer):void;
    detech(o:Observer):void;
    notify():void;
    noticia:string
}

interface Observer{
    update():void;
}

class NoticiasBarcelona implements Observable{

    private barcelonaFollowers:Observer[] = []

    noticia = 'Ultima noticia'

    attach(o:Observer) {
        this.barcelonaFollowers.push(o)
    }

    detech(o:Observer) {
        this.barcelonaFollowers.filter((followers) => followers !== o )
    }

    addNewNotice(tilte:string) {
        this.noticia = tilte
        this.notify()
    }

    notify(){
        for(let hincha of this.barcelonaFollowers){
            hincha.update();
        }
    }
}

class Hincha implements Observer {

    private observable:Observable

    constructor(observable: Observable) {
        this.observable = observable
    }

    update() {
        console.log(`Noticia nueva de: ${this.observable.noticia}`);
        
    }
}

let barca = new NoticiasBarcelona()
let h1 = new Hincha(barca)
let h2 = new Hincha(barca)

barca.addNewNotice('Messi se lesiono')
