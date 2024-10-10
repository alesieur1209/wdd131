const pi = 3.14;
let area = 0;

function Circle_Area(radius) {
    area = radius * radius * pi;
    return area;
}

area = Circle_Area(3);
console.log(area);

area = Circle_Area(4);
console.log(area);

