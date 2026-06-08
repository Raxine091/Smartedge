// 1. GLOBAL STATE
let currentPage = 1;
const itemsPerPage = 20;
let currentProducts = [...products]; 

function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('smartedge_cart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

// 2. GLOBAL FUNCTIONS
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('smartedge_cart')) || [];
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('smartedge_cart', JSON.stringify(cart));
    updateCartUI();
    showToast(`${product.name} added to cart!`);
};

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

window.showDetails = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.description;
    document.getElementById('modal-price').innerText = `KES ${parseFloat(product.price).toLocaleString()}`;
    document.getElementById('product-modal').style.display = 'flex';
};

window.closeModal = () => document.getElementById('product-modal').style.display = 'none';
window.openSignupModal = () => document.getElementById('signup-modal').style.display = 'flex';
window.closeSignupModal = () => document.getElementById('signup-modal').style.display = 'none';

// 3. DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const searchInput = document.getElementById('search');
    const filterButtons = document.querySelectorAll('.filter-btn');

    window.displayProducts = function(items, isNewFilter = false) {
        if (!productContainer) return;
        if (isNewFilter) currentPage = 1;
        currentProducts = items;

        const paginatedItems = items.slice(0, currentPage * itemsPerPage);
        
        productContainer.innerHTML = paginatedItems.map(product => `
            <div class="card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400'">
                <h3>${product.name}</h3>
                <div class="price">KES ${parseFloat(product.price).toLocaleString()}</div>
                <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn-details" onclick="showDetails(${product.id})">View Details</button>
            </div>
        `).join('');

        if (paginatedItems.length < items.length) {
    const scrollSentinel = document.createElement('div');
    scrollSentinel.className = 'scroll-sentinel';
    scrollSentinel.style.height = '20px'; 
    scrollSentinel.innerHTML = 'Loading more products...'; // Optional loading text/spinner
    productContainer.appendChild(scrollSentinel);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                scrollSentinel.remove(); 
                currentPage++;
                displayProducts(currentProducts, false);
            }
        });
    }, {
        rootMargin: '100px' // Triggers the load 100px *before* the user reaches the absolute bottom
    });
    observer.observe(scrollSentinel);
}
    };

    // Robust Case-Insensitive Filter Logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const cat = btn.getAttribute('data-category').toLowerCase();
            const filtered = (cat === 'all') 
                ? products 
                : products.filter(p => p.category.toLowerCase() === cat);
                
            displayProducts(filtered, true);
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = products.filter(p => p.name.toLowerCase().includes(term));
            displayProducts(filtered, true);
        });
    }

    updateCartUI();
    displayProducts(products);
});