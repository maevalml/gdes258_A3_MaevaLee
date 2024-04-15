console.log("hello world");
document.getElementById("menu-toggle").addEventListener("click",function(){
  document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: '64s4kauvg214',
    accessToken: 'kFxLtsuLQDJVQyF-cu6pJxlZeWB0EpFUaRBGAPNceSQ',
  });

  var featuredProducts = document.getElementById('featured-products');


  client.getEntries({ content_type: 'assignment3MaevaLee', limit:3}).then(function (entries) {
    // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
        console.log(entry);
        //if statement checks that this field exists
        var product = document.createElement('div');
        product.classList.add('product');


        var mainImage = document.createElement('img');
        mainImage.classList.add('home-image');
        if(entry.fields.mainImage){
          mainImage.src = entry.fields.mainImage.fields.file.url;
        }
        product.append(mainImage);

        var cartButton = document.createElement('a');
            cartButton.href = 'cart.html?id=' + entry.sys.id;
            cartButton.appendChild(mainImage);
            product.append(cartButton);
                
        if(entry.fields.name){
          var name = document.createElement('p');
          name.innerHTML = entry.fields.name;
          product.append(name);
        }

        if(entry.fields.price){
          var price = document.createElement('p');
          price.innerHTML = entry.fields.price;
          product.append(price);
        }

        featuredProducts.appendChild(product);



    });
  });
    
  