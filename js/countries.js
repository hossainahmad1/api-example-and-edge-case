

// countries countainer:(akhane countries countainer er kaj prothom 2 ta function)
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {

    // for and forEach same kaj kore for diye ja korsi seta forEach diyeo tai hosse;
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country.name.common)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick ="localCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}






// country details er kaj: (akhane prothom 2 ta function holo country details er kaj)
const localCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = ` https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML =`
    <h2>Details:${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries();

