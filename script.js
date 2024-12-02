var template = `
    <ul>
        {{#books}}
        <li>
            <span><strong>Title:</strong> {{title}}</span>
            <span><strong>Author:</strong> {{author}}</span>
            <span><strong>Price:</strong> {{price}}</span>
        </li>
        {{/books}}
    </ul>
`;

var output = document.getElementById('book-list');

fetch('books.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var rendered = Mustache.render(template, { books: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
