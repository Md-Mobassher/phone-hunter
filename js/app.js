const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    //console.log(url);

    fetch(url)
    .then ((res) => res.json())
    .then ((data) => displayPhones(data.data));
}

const displayPhones = (phones) =>{
    console.log(phones);
    for (const phone of phones){
        const phoneContainer = document.getElementById('phones-container');

        phones.forEach( phone => {
            console.log(phone);
           const div = document.createElement('div');
           div.innerHTML = `
                <img src="${phone.image}" alt="">
                <h4>Name:${phone.phone_name}</h4>
                <h4>Brand:${phone.brand}</h4>
                <button onclick="" class="bg-primary text-white mx-auto py-2 px-4 border-0 rounded-3 mt-2">Details</button>
           `;
           phoneContainer.appendChild(div);
        })

        

        console.log(phone);

        //console.log(phone);
    }
}