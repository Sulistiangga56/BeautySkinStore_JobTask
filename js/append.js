let cart_data = JSON.parse(localStorage.getItem("cart")) || [];

const append=(data,parent)=>{
  var a=1;
   
    parent.innerHTML=null;
    data.map((elem)=>{
    
    let div=document.createElement("div");
    div.setAttribute("class","small");

    let title=document.createElement("h5");
    title.innerText=elem.title;
    title.setAttribute("class","title")
    
    
    let image=document.createElement('img');
    image.src=elem.imageurl;
    
    let price=document.createElement("h3");
    price.setAttribute("class","price")
    price.innerText="Rp "+elem.price;
    
    let rating=document.createElement("h4");
    rating.setAttribute("class","ratin")
    rating.innerText=elem.rating+"★";

    let add=document.createElement("button");
    add.innerText="ADD TO CART"
    $(add).click(function () {
      $('.alert').addClass("show");
      $('.alert').removeClass("hide");
      $('.alert').addClass("showAlert");
      setTimeout(function () {
          $('.alert').removeClass("show");
          $('.alert').addClass("hide");
      }, 2000);
  });
    add.setAttribute("class","adda");
    
    div.append(image,title,rating,price,add);
    parent.append(div);
    add.onclick=()=>{
    
    a=3;
    cart_data.push(elem);
    var count = document.querySelector("#circle")
       count.innerHTML = cart_data.length;
       count.style.background ="#00afef"
      localStorage.setItem("cart",JSON.stringify(cart_data));
     }

     div.onclick= function detail(){
        
       localStorage.setItem("cart",JSON.stringify(elem));
       
       if(a==3){
         return;
       }
       window.location.href="cart.html";
     }
 
     });
}

export default append;