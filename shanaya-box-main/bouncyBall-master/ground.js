class Ground{

    constructor(){


        var option = {

            isStatic :true
        }
    
    //creating physics object
    this.body = Bodies.rectangle (200,380,400,10,option)
    //Add physics body to main world
    World.add(world,this.body)
    
    }
    
    display(){
    
    fill ("red");    
    rectMode(CENTER)
    rect (this.body.position.x , this.body.position.y , 400,10 )
    
    
    }
    
    }