
function circle(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(230,80,40,0,2*Math.PI);
	ctx.fill();
  document.getElementById("output").innerHTML="";
	document.getElementById("input").innerHTML = "<br><br><br>Enter Radius:<input type=\"number\" id=\"radius\" value=0>&nbsp&nbsp<input type=\"button\" value=\"Submit\" onclick=\"areaCircle();\" >";


	}
  function areaCircle() {
    var rad = parseInt(document.getElementById("radius").value);
		document.getElementById("output").innerHTML = "Area of Circle:<input type=\"number\" value="+rad*rad*(22/7) +"><br><br>Perimeter of Circle:<input type=\"number\" value="+2*(22/7)*rad+">";

  }
	function square() {

		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");

		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
		ctx.fillRect(200,50,100,100);
		ctx.stroke();
    document.getElementById("output").innerHTML = "";
  		document.getElementById("input").innerHTML = "<br><br><br>Enter side length:<input type=\"number\" id=\"length\" value=0>&nbsp&nbsp<input type=\"button\" value=\"Submit\" onclick=\"areaSquare();\">"
	}
  function areaSquare() {
    var length = parseInt(document.getElementById("length").value);
		document.getElementById("output").innerHTML = "Area of Square:<input type=\"number\" value="+ length*length +"><br><br>Perimeter of Square:<input type=\"number\" value="+4*length+">";

  }
	function triangle() {

		var c=document.getElementById("myCanvas");
		var ctx = c.getContext('2d');
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
            var sWidth = c.width;
            var sHeight = c.height;
            var path=new Path2D();
            path.moveTo((sWidth/2)+50,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-50);
            path.lineTo((sWidth/2)-50,sHeight/2);
            ctx.fill(path);
            document.getElementById("output").innerHTML = "";
		document.getElementById("input").innerHTML = "<br><br><br>Enter side 1:&nbsp&nbsp&nbsp<input type=\"number\" id=\"side1\" value=0>&nbsp&nbspEnter side 2:&nbsp&nbsp&nbsp<input type=\"number\" id=\"side2\" value=0>&nbsp&nbspEnter side 3:&nbsp&nbsp&nbsp<input type=\"number\" id=\"side3\" value=0><input type=\"button\" value=\"Submit\" onclick=\"areaTriangle();\" >";

	}
  function areaTriangle(){
		var a = parseInt(document.getElementById("side1").value);

    var b = parseInt(document.getElementById("side2").value);

    var c = parseInt(document.getElementById("side3").value);


    var p =(a+b+c)/2;

    var area = Math.sqrt(p *(p - a)*(p - b)*(p - c));
		document.getElementById("output").innerHTML = "Area of Triangle:<input type=\"number\" value="+area+"><br><br>Perimeter of Triangle:<input type=\"number\" value="+2*p+">";
	}

	function rectangle(){
		//var height = prompt("Enter Height of reactabgle", "3");
		//var width = prompt("Enter Width of reactabgle", "3");
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.beginPath();
		ctx.rect(225,50,80,50);
		ctx.fill();
    document.getElementById("output").innerHTML = "";
		document.getElementById("input").innerHTML = "<br><br><br>Enter lenght:<input type=\"number\" id=\"side1\" value=0><br><br>Enter width:&nbsp<input type=\"number\" id=\"side2\" value=0>&nbsp&nbsp<input type=\"button\" value=\"Submit\" onclick=\"areaRectangle();\" >";

	}
  function areaRectangle(){
  		var base = document.getElementById("side1").value;
  		var height = document.getElementById("side2").value;
  		document.getElementById("output").innerHTML = "Area of Rectangle:<input type=\"number\" value="+base*height +"><br><br>Perimeter of Rectangle:<input type=\"number\" value="+(2*height+ 2*base) +">";
  	}
function hexagon() {
  var canvas = document.querySelector('#myCanvas').getContext('2d');side = 0,
    size = 100,
    x = 250,
    y = 100;

canvas.beginPath();
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (side; side < 7; side++) {
  canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
}

canvas.fillStyle = "#333333";
canvas.fill();
document.getElementById("output").innerHTML="";
document.getElementById("input").innerHTML = "<br><br><br>Enter Side:<input type=\"number\" id=\"side\" value=0>&nbsp&nbsp<input type=\"button\" value=\"Submit\" onclick=\"areaHexagon();\" >";

}
function areaHexagon() {
  var length = parseInt(document.getElementById("side").value);
  var area=((Math.sqrt(3)*3)/2)*length*length
  document.getElementById("output").innerHTML = "Area of Hexagon:<input type=\"number\" value="+ area  +"><br><br>Perimeter of Hexagon:<input type=\"number\" value="+6*length+">";
}
