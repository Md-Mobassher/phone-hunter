const allPhones = () => {
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    
    fetch(url)
    .then ((res) => res.json())
    .then ((data) => displayPhones(data.data));
}

const displayPhones = (phones) =>{
    for (const phone of phones){
        const phoneContainer = document.getElementById('phones-container');

        phones.forEach( phone => {
            //console.log(phone);
           const div = document.createElement('div');
           div.classList = "col-md-4 mx-auto d-flex flex-column justifu-content-center align-items-center";
           div.innerHTML = `
                <img class="img-fluid mb-3" src="${phone.image}" alt="">
                <h4>Name: ${phone.phone_name}</h4>
                <h4>Brand: ${phone.brand}</h4>
                <button onclick="phoneDetails('${phone.slug}')" class="btn-primary text-white mx-auto py-2 px-4 border-0 rounded-3 mt-2">Details</button>
           `;
           phoneContainer.appendChild(div);
        })
        //console.log(phone);
    }
}

const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
}

const displayPhoneDetails = info => {
    console.log(info);
    document.getElementById('phone-image').innerHTML = `
        <img src="${info.image}" alt="">
    `
    const phoneInfo = document.getElementById('phone-info');

    
}