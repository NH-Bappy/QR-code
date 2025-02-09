const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage");
const information = document.querySelector("#information")







function generateQR(){
    if(information.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + information.value;
    imgBox.classList.add("show-img");
    }
}
