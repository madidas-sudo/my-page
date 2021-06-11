let sketch = function(p)
{
    p.setup = function(){
        p.createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
        p.frameRate(60);
    }
    
    p.draw = function() {
        p.background(21);
        p.ellipse(p.mouseX, p.mouseY, 20, 20);
    }

};



new p5(sketch, 'container');