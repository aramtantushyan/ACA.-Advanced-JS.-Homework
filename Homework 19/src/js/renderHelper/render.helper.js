function createCountryCard (item) {
    const innerHTML = ` 
    <div class="country-card">
        <p class="country-name">${item.name}</p>
        <img class='country-flag' src="${item.flag}" alt="country flag">
        <table class="country-info">
            <tr class="country-info__row">
                <td>Capital:</td>
                <td>${item.capital}</td>
            </tr>
            <tr class="country-info__row">
                <td>Language:</td>
                <td>${item.language}</td>
            </tr>
            <tr class="country-info__row">
                <td>Currency:</td>
                <td>${item.currency}</td>
            </tr>
        </table>
    </div>`
    return innerHTML;
}

function renderCountryCards (element, position, dataArray) {
    dataArray.forEach((el) => element.insertAdjacentHTML(`${position}`, createCountryCard(el)));
}

export {renderCountryCards};