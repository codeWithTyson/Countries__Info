const countries_listed = document.getElementById('countries_Listed');
const filterTxt = document.querySelector('input[type=text]');
const dropDown_filter = document.querySelector('.dropDown_filter');

const Get__Countries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    let output = '';

    response.data.forEach(country => {
        output += `<a href="countryDetail.html?name=${country.name}" class="box">
                        <img src="${country.flag}" alt="Flag Not found" class="img_top" />
                        <main class="bottom_content">
                            <h2>${country.name}</h2>
                            <p class="detail">
                                <span> <strong>Population:</strong> ${country.population} </span>
                                <span> <strong>Region:</strong> ${country.region} </span>
                                <span> <strong>Capital:</strong> ${country.capital} </span>
                            </p>
                        </main>
                </a>`;
    })

    // countryLink.innerHTML = output;
    countries_listed.innerHTML = output;
    return output;
}


const filterCountries = event => {
   dropDown_filter.selectedIndex = 0
   const searchString = event.target.value.toLowerCase();

   Array.from(countries_listed.children).forEach(country => {
        const country_Heading = country.querySelector('.bottom_content > h2');

        /* Remove White Space & make text Lower Case */
        const filteredTxt = country_Heading.textContent.toLowerCase();
        
        /* Checking if search Value is match to country name */
        filteredTxt.indexOf(searchString) !== -1 ? country.style.display = 'block' : country.style.display = 'none';
        
   })
   
}

const filterByRegion = event => {
    filterTxt.value = "";
    const searchString = event.target.value.toLowerCase();

    Array.from(countries_listed.children).forEach(country => {
         const region = country.querySelector('.bottom_content > .detail > span:nth-child(2)');

         const filteredRegionText = region.textContent.substring(9).toLowerCase();

        /* Checking if search Value is match to country name */
        filteredRegionText.indexOf(searchString) !== -1 ? country.style.display = 'block' : country.style.display = 'none';
    })
}

/* ADDING EVENTS & EXECUTION FUNCTION */
document.addEventListener('DOMContentLoaded', Get__Countries);
filterTxt.addEventListener('keyup', filterCountries);
dropDown_filter.addEventListener('change',filterByRegion);