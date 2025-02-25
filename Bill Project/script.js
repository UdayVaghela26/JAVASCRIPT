document.getElementById('billing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('item').value;
    const itemPrice = parseFloat(document.getElementById('price').value);
    const itemQuantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = itemPrice * itemQuantity;

    const itemList = document.getElementById('item-list');
    const totalElement = document.getElementById('total');

    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - Rs. ${totalPrice.toFixed(2)}`; // Corrected template literal
    itemList.appendChild(listItem);

    const currentTotal = parseFloat(totalElement.textContent.replace('Total: Rs. ', '')) || 0;
    totalElement.textContent = `Total: Rs. ${(currentTotal + totalPrice).toFixed(2)}`; // Corrected template literal

    document.getElementById('billing-form').reset();
});
