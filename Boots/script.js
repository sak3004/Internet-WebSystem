$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

var categoriesstr = "<div class=\"container\"><div class=\"row text-center\">  <div class=\"col-sm-4\"><div class=\"thumbnail\"><img src=\"images/electronics/category.jpg\" alt=\"Electronics\" width=\"400\" height=\"300\"> <p><strong>Electronics</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalElectronics\">Show Items</button></div></div><div class=\"col-sm-4\"><div class=\"thumbnail\"><img src=\"images/transport/category.jpg\" alt=\"Transport\" width=\"400\" height=\"300\"><p><strong>Transport</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalTransport\">Show Items</button></div></div><div class=\"col-sm-4\"><div class=\"thumbnail\">        <img src=\"images/fooditems/category.jpg\" alt=\" FoodItems\" width=\"400\" height=\"300\"><p><strong>Food Items</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalFoodItems\">Show Items</button></div></div></div></div><div class=\"container\"><div class=\"row text-center\">  <div class=\"col-sm-4\"><div class=\"thumbnail\"><img src=\"images/electronics/category.jpg\" alt=\"Electronics\" width=\"400\" height=\"300\"> <p><strong>Electronics</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalElectronics\">Show Items</button></div></div><div class=\"col-sm-4\"><div class=\"thumbnail\"><img src=\"images/transport/category.jpg\" alt=\"Transport\" width=\"400\" height=\"300\"><p><strong>Transport</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalTransport\">Show Items</button></div></div><div class=\"col-sm-4\"><div class=\"thumbnail\">        <img src=\"images/fooditems/category.jpg\" alt=\" FoodItems\" width=\"400\" height=\"300\"><p><strong>Food Items</strong></p><button class=\"btn\" data-toggle=\"modal\" data-target=\"#myModalFoodItems\">Show Items</button></div></div></div></div>"

var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){


        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");


        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects

        for(var product in shoppingCart){
            //add new row
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties
            var cellID=row.insertCell(0)
            var cellName = row.insertCell(1);

            var cellDescription = row.insertCell(2);
            var cellPrice = row.insertCell(3);

            var quantity=row.insertCell(4);
            cellID.className='col-md-4';
            cellName.className='col-md-4';
            cellDescription.className='col-md-4';
            cellPrice.className='col-md-4 text-right';

            //fill cells with values from current product object of our array
            if(search)
            cellID.innerHTML = shoppingCart[product].Id;
            console.log("DISP"+shoppingCart[product].Id);
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            quantity.innerHTML=shoppingCart[product].Quantity;

            cart_total_price+=shoppingCart[product].Price*shoppingCart[product].Quantity;
        }
        //fill total cost of our shopping cart
        document.getElementById("cart_total").innerHTML="Rs:"+cart_total_price;
    }

function search(id) {
//console.log(1);
  for(var i=0;i<shoppingCart.length;i++){
    //console.log(1);
    console.log("SC "+parseInt(shoppingCart[i].Id) +"ID "+id);
    console.log(shoppingCart[i]);
    if(shoppingCart[i].Id===parseInt(id)){

      return i;

    }

  }
  return -1;
}

    function AddtoCart(name,description,price,id){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //console.log("ID"+id);
       //Fill the product object with data
       if(shoppingCart.length==0){
       singleProduct.Id=id;
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       singleProduct.Quantity=document.getElementById(id).value;
       //Add newly created product to our shopping cart
       //if(search(id)===-1)
        shoppingCart.push(singleProduct);
       //else {
         //singleProduct.Quantity=document.getElementById(id).value;
       //}
      }

     else {
       console.log("Inside else(length>0)");
       //Add newly created product to our shopping cart
       var z=search(id);
      if(z===-1){
        console.log("Index not there");
        singleProduct.Id=id;
        singleProduct.Name=name;
        singleProduct.Description=description;
        singleProduct.Price=price;
        singleProduct.Quantity=document.getElementById(id).value;

        shoppingCart.push(singleProduct);

      }
        else {
          console.log("Index there");
          shoppingCart[z].Quantity=parseInt(document.getElementById(id).value);
          console.log(document.getElementById(id).value);
        }
      }



       //call display function to show on screen
       displayShoppingCart();



    }



    function addCategories(){
       var CategoryName = prompt("Enter Name of the category:");
       //console.log(document.getElementsByClassName("card"));
       var index = document.getElementsByClassName("card").length;
       var img="http://via.placeholder.com/350x150";
       var cat = document.getElementById("tour");
       console.log(index);

       /*if(index % 3 == 0){
         cat.innerHTML += "<div class=\"container\">             <div class=\"row text-center\">";
       }
       cat.innerHTML += "<div class=\" col-sm-4\">        <div class=\"thumbnail\">           <img class=\"card-img-top img-responsive\" src=\" "+ img +" \" alt=\"Card image cap\">           <div class=\"card-block\">             <h3 class=\"card-title\">" + CategoryName + "</h3>             <a href=\"beverages.html\" class=\"btn btn-primary\">View Products</a>           </div>         </div>      </div>";
       if(index % 3 == 2){
         cat.innerHTML += "</div></div>";
       }
       */
       tour.innerHTML = categoriesstr + "<div class=\"container\"><div class=\"row text-center\"><div class=\"col-sm-4\"><div class=\"thumbnail\"><img src=\""+img+"\" alt=\"Card Image\" width=\"400\" height=\"300\"><p><strong>"+CategoryName+"</strong></p><button class=\"btn\" >Show Items</button</div</div></div></div>";

    }
