document.getElementById('discount-btn').addEventListener('click', function(){
    const currentPriceField = document.getElementById('price');
    currentPrice = currentPriceField.innerText;
    currentPrice = parseFloat(currentPrice);
    const newPrice = currentPrice - currentPrice*(30/100);
    


    const newToBesetField = document.getElementById('price-after-discount');
    newToBesetField.innerText = newPrice;
})