console.log("hello world");
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');
document.getElementById("menu-toggle").addEventListener("click",function(){
  document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: '64s4kauvg214',
    accessToken: 'kFxLtsuLQDJVQyF-cu6pJxlZeWB0EpFUaRBGAPNceSQ',
  });

  
  var cartProduct = document.getElementById('cart-product');
  client.getEntry(id).then(function (entry) {
      console.log(entry);
      var name = document.createElement('p');
      name.innerHTML = entry.fields.name;
      cartProduct.appendChild(name);
  
      var contentDiv = document.createElement('div'); //create new div
          contentDiv.classList.add('content');
              var mainImage = document.createElement('img');
              mainImage.classList.add('details-image');
              if (entry.fields.mainImage){
                  mainImage.src = entry.fields.mainImage.fields.file.url;
              }
              cartProduct.appendChild(mainImage);
  
              var descriptionPrice = document.createElement('div');//new div
              descriptionPrice.classList.add('description-price');//new class
              var description = document.createElement('p');
              description.classList.add('description');
              description.innerHTML = entry.fields.description;
              cartProduct.append(description);
  
              var price = document.createElement('p');
              price.innerHTML = entry.fields.price;
              cartProduct.append(price);
              contentDiv.appendChild(descriptionPrice);

            });
            