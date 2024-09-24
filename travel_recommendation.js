
function searchFunction() {
    let input = document.getElementById('searchInput').value;
    if (input) {
        fetch('travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                if(input == 'beach'){
                    show_result(data.beaches)
                } else if(input == 'temple'){
                    show_result(data.temples)
                } else if(input == 'country'){
                    show_result(data.countries)
                } else {
                    alert('you need to search beach, temple, country')
                }
            })
            .catch(error => console.error('Error loading JSON:', error));
    } else {
        alert("Please enter a keyword to search.");
    }
}

function show_result(data){
    document.getElementById('search-result').innerHTML = ''
    let html = ``
    data.forEach(element => {
        html += `
            <div style="border-radius:10px;background:white;width:400px;margin-bottom:1em">
                <img style="border-radius:10px;width:100%" src="${element.imageUrl}" />
                <div style="padding:1em">
                    <div style="font-size:24px;font-weight:bolder">${element.name}</div>
                    <div style="focolor:grey">${element.description}</div>
                </div>
            </div>
        `
    });
    document.getElementById('search-result').innerHTML = html
}

function resetFunction() {
    document.getElementById('searchInput').value = '';
}


const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);