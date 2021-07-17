class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic': true
        }
        this.bottomBody = Bodies.rectangle(x, y, width, height, options)
        this.leftBody = Bodies.rectangle(x-width/2, y-10, 10, 20, options)
        this.rightBody = Bodies.rectangle(x+width/2, y-10, 10, 20, options)
        this.width = width
        this.height = height

        World.add(world, this.bottomBody)
        World.add(world, this.leftBody)
        World.add(world, this.rightBody)
    }
    display(){
        var bottomPos = this.bottomBody.position
        var leftPos = this.leftBody.position
        var rightPos = this.rightBody.position
        rectMode(CENTER)
        fill('white')
        rect(bottomPos.x, bottomPos.y, this.width, this.height)
        rect(bottomPos.x, bottomPos.y, 10, 20)
    }
}