let url = document.getElementById('image-url');
let title = document.getElementById('image-title');
let price = document.getElementById('image-price');
let button = document.getElementById('add-btn');
let showDiv = document.getElementById('show-div');
let editingId = null;

window.onload = () => {
    let existingData = JSON.parse(localStorage.getItem("product")) || [];
    existingData.forEach(product => {
        showData(product);
    });
};

document.getElementById('product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (editingId === null) {
        addProduct();
    } else {
        updateProduct();
    }
});

const addProduct = () => {
    let product = {
        id: Date.now(),
        url: url.value,
        title: title.value,
        price: price.value,
    };

    let existingData = JSON.parse(localStorage.getItem("product")) || [];
    existingData.push(product);
    localStorage.setItem("product", JSON.stringify(existingData));

    url.value = "";
    title.value = "";
    price.value = "";
    showData(product);
};

const showData = (product) => {
    let dataDiv = document.createElement("div");
    dataDiv.className = 'product';
    dataDiv.innerHTML = `
        <img src="${product.url}" alt="${product.title}">
        <h3>Product Name:-${product.title}</h3>
        <h4>Product Price:-${product.price}</h4>
        <button id="delete" onclick="deleteItem(${product.id})">Delete</button>
        <button id="edit" onclick="editItem(${product.id})">Edit</button>

    `;
    showDiv.appendChild(dataDiv);
};

const deleteItem = (id) => {
    let existingData = JSON.parse(localStorage.getItem('product')) || [];
    let filteredData = existingData.filter(data => data.id !== id);
    localStorage.setItem('product', JSON.stringify(filteredData));

    showDiv.innerHTML = "";
    filteredData.forEach(product => showData(product));
};

const editItem = (id) => {
    let existingData = JSON.parse(localStorage.getItem('product')) || [];
    let product = existingData.find(p => p.id === id);
    if (product) {
        url.value = product.url;
        title.value = product.title;
        price.value = product.price;
        editingId = id;
        button.textContent = "Update Product";
    }
};

const updateProduct = () => {
    let existingData = JSON.parse(localStorage.getItem('product')) || [];
    let productIndex = existingData.findIndex(p => p.id === editingId);
    if (productIndex !== -1) {
        existingData[productIndex] = {
            id: editingId,
            url: url.value,
            title: title.value,
            price: price.value,
        };
        localStorage.setItem("product", JSON.stringify(existingData));

        url.value = "";
        title.value = "";
        price.value = "";
        button.textContent = "Add Product";
        editingId = null;

        showDiv.innerHTML = "";
        existingData.forEach(product => showData(product));
    }
};