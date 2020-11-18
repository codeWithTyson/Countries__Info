const countryOutput = document.getElementById('countryDetail');

// Getting Information From URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const countryName = urlParams.get('name');

const Get__CountryDetails = async () => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
    let output = '';

    // Object destructuring
    const {
        flag,
        name,
        capital,
        nativeName,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders
    } = response.data[0];

    let borderCountries = '';
    const countryLanguages = languages.map(language => language.name);
    const currenciesName = currencies.map(currency => currency.name);
    borders.forEach(border => borderCountries += '<button>'+ border +'</button>')

    output = `
            <div class="country_detail__container">
                <img src="${flag}" alt="country flag not found" />
                <main class="country_right__section">
                    <h2>${name}</h2>
                    <div class="content__grid">
                        <div class="left_grid__child">
                            <span> <strong>Native Name:</strong> ${nativeName}</span> </span>
                            <span> <strong>Population:</strong> ${population}</span> </span>
                            <span> <strong>Region:</strong> ${region}</span> </span>
                            <span> <strong>Sub Region:</strong> ${subregion}</span> </span>
                            <span> <strong>Capital:</strong> ${capital}</span> </span>
                        </div>
                        <div class="right_grid__child">
                            <span> <strong>Top Level Domain:</strong> ${topLevelDomain}</span> </span>
                            <span>
                                <strong>
                                    ${languages.length === 1 ? 'Currencies' : 'Currency'}
                                 </strong>
                                    ${currenciesName.join(', ')} 
                           </span>
                            <span>
                                <strong>
                                    ${languages.length === 1 ? 'language' : 'languages'}
                                 </strong>
                                    ${countryLanguages.join(', ')} 
                           </span>
                        </div>
                    </div>
                    <div class="Country_borders">
                        <strong>Border Countries :- </strong>
                        ${borderCountries}
                    </div>
                </main>
            </div>
    `;

    countryOutput.innerHTML = output;

}

document.addEventListener('DOMContentLoaded', Get__CountryDetails);