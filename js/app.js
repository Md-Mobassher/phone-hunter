const phoneImage = document.getElementById('phone-image');
const phoneInfo = document.getElementById('phone-info');

// toggle function 
const toggle = (id, displayStyle) => {
    document.getElementById(id).style.display = displayStyle;
}

// search phone 
const allPhones = () => {
    toggle('spinner','block');
    const searchValue = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    
    fetch(url)
    .then ((res) => res.json())
    .then ((data) => displayPhones(data.data));  
}

// display phone 
const displayPhones = (phones) =>{ 
    const phoneContainer = document.getElementById('phones-container');
    document.getElementById('search-box').value = ''; 
    phoneContainer.textContent = '';
    phoneImage.textContent = '';
    phoneInfo.textContent = '';
    console.log(phones);

    if (phones.length == 0){           
        toggle('spinner','none');
        toggle('no-result','block');
    }

    for (const phone of phones){ 
        // console.log(phone);
        toggle('spinner','none');
        toggle('no-result','none');
        phones.forEach( phone => {
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
    }
}


// phone details 
const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
}

const displayPhoneDetails = info => {
    phoneImage.innerHTML = `
        <img src="${info.image}" alt="">
    `
    phoneInfo.innerHTML = `
        <h5><b>Name:</b> ${info.name}</h5>
        <h5><b>Release date:</b> ${info.releaseDate}</h5>
        <h5><b>Main feature:</b></h5>
            <h6><b>Storage:</b> ${info.mainFeatures.storage} </h6>  
            <h6><b>Display Size:</b> ${info.mainFeatures.displaySize} </h6>  
            <h6><b>Chipset:</b> ${info.mainFeatures.chipSet} </h6>  
            <h6><b>Memory:</b> ${info.mainFeatures.memory} </h6>     
        <h5><b>Sensor info:</b></h5>
            <h6><b>WLAN:</b> ${info.others.WLAN} </h6>
            <h6><b>Bluetooth:</b> ${info.others.Bluetooth} </h6>
            <h6><b>GPS:</b> ${info.others.GPS} </h6>
    `; 
}