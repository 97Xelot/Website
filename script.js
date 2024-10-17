let count = 0;
setInterval(() => {
    console.log(count);
},1)

const findSA = (arr) =>{
    for (let index= 0; index < arr.length; index++){
        const Element = arr[index];
        if(Element.cca2 === "ZA")
            return Element;
    }
}

const ChangeJohn = (data) =>{
    const SountAH = findSA(data);
    document.getElementById("profile-pic").src = SountAH.flags.png
}

const data = fetch('https://restcountries.com/v3.1/all').
then((response) =>{ 
    console.log(response);
    response.json().then(data =>{
        console.log(data);
        
    });
})
