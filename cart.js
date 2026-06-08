document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart-items-container');
    const summary = document.getElementById('summary-details');
    const grandTotal = document.getElementById('grand-total');
    const subtitle = document.getElementById('cart-subtitle');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('smartedge_cart')) || [];
        
        // 1. Handle Empty State (Triggers .empty-cart in your CSS)
        if (cart.length === 0) {
            const grid = document.querySelector('.cart-grid');
            if (grid) {
                grid.innerHTML = `
                    <div class="empty-cart">
                        <span class="icon">🛒</span>
                        <h2>Your cart is empty</h2>
                        <p>Discover our latest Apple products.</p>
                        <a href="index.html" class="btn-hero" style="display:inline-block; margin-top:20px;">Shop Now</a>
                    </div>`;
            }
            if (subtitle) subtitle.innerText = "0 items in your cart";
            return;
        }

        let total = 0;
        let itemsHtml = '';
        let summaryHtml = '';

        cart.forEach((item, index) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity) || 1;
            const subtotal = price * quantity;
            total += subtotal;

            // 2. Build Item Cards (Triggers .cart-card in your CSS)
            itemsHtml += `
                <div class="cart-card">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150'">
                    <div class="item-info">
                        <p class="cat">${item.category || 'Apple Product'}</p>
                        <h3>${item.name}</h3>
                        <p class="price">KES ${price.toLocaleString()}</p>
                    </div>
                    <div class="item-actions">
                        <button class="thrash" onclick="removeFromCart(${index})">🗑️</button>
                        <div class="qty-control">
                            <button onclick="updateQty(${index}, -1)">-</button>
                            <span>${quantity}</span>
                            <button onclick="updateQty(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>`;

            // 3. Build Summary Lines (Triggers .summary-line in your CSS)
            summaryHtml += `
                <div class="summary-line">
                    <span>${item.name} (x${quantity})</span>
                    <span>KES ${subtotal.toLocaleString()}</span>
                </div>`;
        });

        // Inject into HTML
        if (container) container.innerHTML = itemsHtml;
        if (summary) summary.innerHTML = summaryHtml;
        if (grandTotal) grandTotal.innerText = `KES ${total.toLocaleString()}`;
        if (subtitle) subtitle.innerText = `${cart.length} item${cart.length !== 1 ? 's' : ''} in your cart`;
        
        updateNavbarCount(cart.length);
    }

    // Logic Functions
    window.updateQty = (index, change) => {
        let cart = JSON.parse(localStorage.getItem('smartedge_cart')) || [];
        cart[index].quantity = Math.max(1, (cart[index].quantity || 1) + change);
        localStorage.setItem('smartedge_cart', JSON.stringify(cart));
        renderCart();
    };

    window.removeFromCart = (index) => {
        let cart = JSON.parse(localStorage.getItem('smartedge_cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('smartedge_cart', JSON.stringify(cart));
        renderCart();
    };

    function updateNavbarCount(count) {
        const el = document.getElementById('cart-count');
        if (el) el.innerText = count;
    }

    renderCart();
});