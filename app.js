const word = "UTKARSH RAJ|";
const span = document.querySelector('.animated');

const word2 = "Developer";
const span1 = document.querySelector('.typewritter-text');

function printWord(word, h) {
    let index = 0; 
    
    function type() {
        if (index < word.length) {
            h.innerHTML += word[index];  
            index++;
            setTimeout(type, 300); 
        } else {
            index = 0;
            h.innerHTML = ''; 
            setTimeout(type, 300); 
        }
    }
    
    //type();
}

setTimeout(() => printWord(word, span), 600);
setTimeout(() => printWord(word2, span1), 1000);

// for three button
const hamberg=document.querySelector(".hamburg");
const cancel=document.querySelector(".cancel");
const dropdown=document.querySelector(".dropdown");
hamberg.addEventListener('click',()=>{
    dropdown.classList.add('active');
    cancel.classList.add('can');
    
});
cancel.addEventListener('click',()=>{
    dropdown.classList.remove('active');
    
});

//In section 3 content->div->h move h6 to h5
let h6=document.querySelectorAll(".content h6");
h6.forEach(h6=>{
     let h5=document.createElement("h5");
     h5.innerHTML=h6.innerHTML;
     h6.parentNode.replaceChild(h5,h6);
});
//In section 3 content->div->i increases font-size 
let icon = document.querySelectorAll(".content div i");

function increase_icon_size() {
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.fontSize = "20px"; // Corrected: Use icon[i]
    }
}
increase_icon_size();

//add target and nooper to open insta or github in new tab
let a=document.querySelectorAll(".social-links a");
a.forEach(a=>{
    a.target="_blank";
    a.rel="noopener noreferrer";
});