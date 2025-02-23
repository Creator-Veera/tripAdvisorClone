let changingWord = document.getElementById("Dynamic-content");

let elements = document.getElementsByClassName("two"); 

let arr=["Where to ?","Stay SomeWhere Great","Do Something Fun","Find Place to Eat","Find the Best Flight","Explore Place to Rent"];

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        changingWord.innerHTML=arr[i];
    });
}
