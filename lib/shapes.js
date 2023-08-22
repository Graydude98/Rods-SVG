class Shapes {
    fill;
    stroke;
    strokeWidth;
    text;
    textColor;
    constructor(fill, stroke, strokeWidth, text, textColor) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth;
        this.text;
        this.textColor;
    }

    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="${this.textColor}">${this.text}</text>`;
    }

}

class Circle extends Shapes {

    radius;


    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.radius = radius;
    }

    renderCircle() {

        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <circle r="${this.radius}" cx="250" cy="250" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}"/>
        ${super.setText()}</svg>`
    }
}

class Polygon extends Shapes {

    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
    }

    renderPolygon() {
        
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="250, 60 100,400 400, 400" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}"/>
        ${super.setText()}</svg>`
    }
}

class Square extends Shapes {
    width;
    height;

    constructor(fill, stroke, strokeWidth, text, textColor, width, height) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.width;
        this.height;
    }
    
    renderSquare() {
        const xEl = `${this.width}` / 2
        const yEl = `${this.height}` / 2
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.width}" height="${this.height}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}"/>
        <text x="${xEl}" y="${yEl}" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
        fill="${this.textColor}">${this.text}</text></svg>`
    }
}


module.exports = { Shapes, Circle, Polygon, Square }