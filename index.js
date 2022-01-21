var cartItemsList = document.getElementById("getTimeStoriesList")

fetch('https://my-json-server.typicode.com/Pravallika271023/dummy-data/db')
    .then(response => {
        var i = 1
        return response.json()
            .then(data => data.getTimeStories.forEach(function (story) {
                cartItemsList.innerHTML += `
                <li>
                    <h2 class="number">${i++}</h2>
                    <h4 class="heading">
                        <a class="title" href="${story.link}">${story.title}</a>
                    </h4>
                </li>
                `;
            }))
    })
