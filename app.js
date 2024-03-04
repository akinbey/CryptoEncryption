//! btoa ->     ŞİFRELEME İŞLEMİ YAPAN HAZIR FONKSİYON
//! atob ->     ŞİFRELENMİŞ DATA'YI ÇÖZEN HAZIR FONKSİYON


// ELEMENTLERİ SECELİM

const leftTextArea = document.querySelector("#leftTextArea")
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton")
const decodeButton = document.querySelector("#decodeButton")
const cleanButton = document.querySelector("#cleanButton")

runEventListeners()

function runEventListeners(){
    encodeButton.addEventListener("click" , encode)  //! click oldugunda encode(şifreleme) işlemi yapılmasını sağlayan fonksiyon.
    decodeButton.addEventListener("click", decode)  //! click oldugunda decode(çözme) işlemi yapılmasını saglayan fonksiyon
    cleanButton.addEventListener("click" , clean)   //! click oldugunda decode(çözme) işlemi yapılmasını saglayan fonksiyon
}

function encode(){ //! şifreleme işlemi fonksiyonu
    if(leftTextArea.value==""){ //! girilen degerin value'si boşsa alert verir
        alert("şifrelemek istediginiz alanı bos bırakmayınız")
        return; //! returnla sonlandırır
    }
    else{//! girilen değer doluysa 
        rightTextArea.value = btoa(leftTextArea.value) //! btoa fonksiyonu kullanılarak soldaki  metni base64 formatına çevirir
                                                       //!  ve sağdaki alana şifrelenmiş biçimde yazar
        leftTextArea.value=""  //! soldaki metin kutusunu boş bırakır
    }
}

function decode(){ //! çözme işlemi yapan fonksiyon
        leftTextArea.value= atob(rightTextArea.value);  //! atob fonksiyonu ile sağdaki şifrelenmiş alanın değerini çözer ve 
                                                        //! soldaki metin alanına yazar
        rightTextArea.value=""; //! sağdaki metin kutusunu boş bırakır 
}

function clean(){ //!  temizleme işlemi yapan fonksiyon
    leftTextArea.value=""  ;  //! soldaki metin kutusunu boş bırakır
    rightTextArea.value="" ;  //! sağdaki metin kutusunu boş bırakır 
}

