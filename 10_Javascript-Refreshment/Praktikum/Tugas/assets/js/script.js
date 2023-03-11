function validasi(){
let productNameInput = document.getElementById('product-name');
const regex = /^[a-zA-Z0-9]*$/;

// Validasi input max 25 karakter
productNameInput.addEventListener('input', function() {
    if (productNameInput.value.length > 10) {
        let message = document.getElementById('alert-product-name')
        message.innerHTML = "<div  class='mt-2 alert alert-warning d-flex align-items-center'>Warning ! Inputan tidak boleh lebih dari 25 karakter</div>"
        productNameInput.value = productNameInput.value.slice(0,25)
    }else{
        let message = document.getElementById('alert-product-name')
        message.innerHTML = ""
  }
});
// Validasi hanya bisa di input oleh huruf dan angka
productNameInput.addEventListener('input', function() {

    if (!regex.test(this.value)) {
        let message = document.getElementById('alert-error')
        message.innerHTML = "<div  class='mt-2 alert alert-danger d-flex align-items-center'>Warning ! Inputan tidak boleh mengandung symbol</div>"
    }else if (regex.test(this.value)){
        let message = document.getElementById('alert-error')
        message.innerHTML = ""
  }
});

}

function submitForm() {
    
    let productNameInput = document.getElementById("product-name");
    let productCategoryInput = document.getElementById("product-category");
    let imageInput = document.getElementById("image");
    let productFreshnessInput = document.getElementById("product-freshness");
    let descriptionInput = document.getElementById("description");
    let priceInput = document.getElementById("price");

    let productValue = productNameInput.value;
    let productCategoryValue = productCategoryInput.value;
    let imageValue = imageInput.value;
    let productFreshnessValue = productFreshnessInput.value;
    let descriptionValue = descriptionInput.value;
    let priceValue = priceInput.value;
    
    let productNameValid = true;
    let productCategoryValid = true;
    let imageValid = true;
    let productFreshnessValid = true;
    let descriptionValid = true;
    let priceValid = true;
    // validasi inputan tidak boleh kosong
    // product-name
    if (productValue.trim() === "") {
      productNameInput.classList.add("is-invalid");
      productNameValid = false;
    } else {
      productNameInput.classList.remove("is-invalid");
      productNameValid = true;
    }
    // product-cateogry
    if (productCategoryValue.trim() === "") {
        productCategoryInput.classList.add("is-invalid");
        productCategoryValid = false;
      } else {
        productCategoryInput.classList.remove("is-invalid");
        productCategoryValid = true;
      }
    // image
    if (imageValue.trim() === "") {
        imageInput.classList.add("is-invalid");
        imageValid = false;
      } else {
        imageInput.classList.remove("is-invalid");
        imageValid = true;
      }
    // product-freshness
    if (productFreshnessValue.trim() === "") {
        productFreshnessInput.classList.add("is-invalid");
        productFreshnessValid = false;
      } else {
        productFreshnessInput.classList.remove("is-invalid");
        productFreshnessValid = true;
      }
    // description
    if (descriptionValue.trim() === "") {
        descriptionInput.classList.add("is-invalid");
        descriptionValid = false;
      } else {
        descriptionInput.classList.remove("is-invalid");
        descriptionValid = true;
      }
    // price
    if (priceValue.trim() === "") {
      priceInput.classList.add("is-invalid");
      priceValid = false;
    } else {
      priceInput.classList.remove("is-invalid");
      priceValid = true;
    }
    
    if (productNameValid && productCategoryValid && imageValid && productFreshnessValid && descriptionValid && priceValid) {
      alert("Form submitted successfully");
    }
    
    // 
  }
  
