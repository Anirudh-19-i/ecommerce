/* ===================================================
   ShopEase - Interactive Shopping Application
   Everything You Need, All in One Place
   =================================================== */

// Sample Product Catalog Data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    rating: 4.5,
    price: 2499,
    originalPrice: 3499,
    discount: "29% OFF",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    description: "High fidelity wireless over-ear headphones with deep bass response, active noise reduction, and up to 30 hours of battery playtime."
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    rating: 4.3,
    price: 3999,
    originalPrice: 5999,
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    description: "Water-resistant smartwatch featuring 24/7 heart-rate tracking, sleep analyzer, sport modes, and smart notification syncing."
  },
  {
    id: 3,
    name: "Lightweight Running Shoes",
    category: "Sports",
    rating: 4.6,
    price: 1899,
    originalPrice: 2999,
    discount: "37% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    description: "Breathable athletic shoes with shock-absorbing foam sole engineered for maximum comfort during long-distance jogging and gym sessions."
  },
  {
    id: 4,
    name: "Ergonomic Travel Backpack",
    category: "Accessories",
    rating: 4.4,
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    description: "Durable water-repellent travel backpack featuring a padded 15.6-inch laptop compartment and anti-theft zipper layout."
  },
  {
    id: 5,
    name: "Classic Casual T-Shirt",
    category: "Fashion",
    rating: 4.1,
    price: 599,
    originalPrice: 999,
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80",
    description: "Premium 100% combed cotton crew neck t-shirt tailored for everyday casual comfort, durability, and breathability."
  },
  {
    id: 6,
    name: "Automatic Coffee Maker",
    category: "Home & Living",
    rating: 4.7,
    price: 3499,
    originalPrice: 4999,
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=500&q=80",
    description: "Programmable drip coffee machine with 12-cup glass carafe, keep-warm hot plate, and precision temperature brew control."
  },
  {
    id: 7,
    name: "Minimalist LED Desk Lamp",
    category: "Home & Living",
    rating: 4.2,
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    description: "Modern flexible gooseneck desk lamp with touch-sensitive dimming, three color temperature settings, and USB charging output."
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    rating: 4.5,
    price: 1599,
    originalPrice: 2499,
    discount: "36% OFF",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
    description: "Compact IPX7 waterproof speaker delivering 360-degree stereo sound, deep punchy bass, and 12-hour continuous battery."
  },
  {
    id: 9,
    name: "Polarized UV Sunglasses",
    category: "Accessories",
    rating: 4.0,
    price: 799,
    originalPrice: 1599,
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    description: "Classic unisex polarized sunglasses providing 100% UV400 sun protection with lightweight durable alloy frames."
  },
  {
    id: 10,
    name: "Stainless Steel Fitness Bottle",
    category: "Sports",
    rating: 4.3,
    price: 499,
    originalPrice: 899,
    discount: "44% OFF",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80",
    description: "Double-wall vacuum insulated water bottle keeping beverages icy cold for 24 hours or piping hot for 12 hours."
  },
  {
    id: 11,
    name: "Adjustable Smartphone Stand",
    category: "Accessories",
    rating: 4.2,
    price: 299,
    originalPrice: 699,
    discount: "57% OFF",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=500&q=80",
    description: "Foldable aluminum desktop phone holder with multi-angle rotation, anti-slip rubber padding, and cable management pass-through."
  },
  {
    id: 12,
    name: "Compact Travel Organizer",
    category: "Accessories",
    rating: 4.4,
    price: 649,
    originalPrice: 999,
    discount: "35% OFF",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80",
    description: "Multi-pocket electronics accessory organizer bag for storing charging cables, power banks, memory cards, and earphones."
  }
];

// Application State
let currentProducts = [...products];
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const noProductsMsg = document.getElementById('noProductsMsg');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartBackdrop = document.getElementById('cartBackdrop');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartCount = document.getElementById('cartCount');
const cartHeaderCount = document.getElementById('cartHeaderCount');
const cartItemsTotal = document.getElementById('cartItemsTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartGrandTotal = document.getElementById('cartGrandTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBody = document.getElementById('modalBody');

const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');
const toastNotification = document.getElementById('toastNotification');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(currentProducts);
  setupEventListeners();
});

// Render Product Cards
function renderProducts(items) {
  productsGrid.innerHTML = '';

  if (items.length === 0) {
    noProductsMsg.style.display = 'block';
    resultsCount.textContent = 'Showing 0 products';
    return;
  }

  noProductsMsg.style.display = 'none';
  resultsCount.textContent = `Showing ${items.length} products`;

  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Set Add to Cart button attribute
    const cartButtonAttr = `data-product-id="${product.id}"`;

    card.innerHTML = `
      <div class="product-image-container">
        <span class="product-discount-badge">${product.discount}</span>
        <button class="wishlist-btn" data-id="${product.id}" aria-label="Add to Wishlist">♥</button>
        <img src="${product.image}" alt="${product.name}" class="product-img">
      </div>
      <div class="product-info">
        <span class="product-category-tag">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>☆</span>
          <span class="rating-score">(${product.rating})</span>
        </div>
        <div class="product-pricing">
          <span class="current-price">₹${product.price}</span>
          <span class="original-price">₹${product.originalPrice}</span>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-cart add-to-cart-btn" ${cartButtonAttr}>Add to Cart</button>
          <button class="btn btn-secondary btn-details view-details-btn" data-id="${product.id}">Details</button>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Search Button Click & Enter Key
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  // Category Filter
  categoryFilter.addEventListener('change', handleCategoryFilter);

  // Price Filter
  priceFilter.addEventListener('change', handlePriceFilter);

  // Sort Filter
  sortFilter.addEventListener('change', handleSort);

  // Reset Filters Button
  resetFiltersBtn.addEventListener('click', resetAllFilters);

  // Category Explore Buttons in Category Section
  const categoryExploreBtns = document.querySelectorAll('.category-btn');
  categoryExploreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedCategory = e.target.getAttribute('data-category');
      categoryFilter.value = selectedCategory;
      handleCategoryFilter();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Deal Grab Buttons
  const grabDealBtns = document.querySelectorAll('.grab-deal-btn');
  grabDealBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = parseInt(e.target.getAttribute('data-product-id'));
      addToCart(pId);
      openCart();
    });
  });

  // Product Grid Delegated Events (Add to Cart, View Details, Wishlist)
  productsGrid.addEventListener('click', (e) => {
    // Add to Cart
    if (e.target.classList.contains('add-to-cart-btn')) {
      const pId = parseInt(e.target.getAttribute('data-product-id'));
      addToCart(pId);
    }

    // View Details Modal
    if (e.target.classList.contains('view-details-btn')) {
      const pId = parseInt(e.target.getAttribute('data-id'));
      openProductModal(pId);
    }

    // Wishlist Toggle
    if (e.target.classList.contains('wishlist-btn')) {
      e.target.classList.toggle('active');
    }
  });

  // Cart Open & Close
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartBackdrop.addEventListener('click', closeCart);

  // Clear Cart
  clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCartUI();
  });

  // Checkout Button
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty! Add products before checking out.');
      return;
    }
    alert('Thank you for testing ShopEase! Checkout functionality is intentionally disabled in this prototype.');
  });

  // Cart Item Quantity & Remove (Event Delegation)
  cartItemsList.addEventListener('click', (e) => {
    const target = e.target;
    const itemId = target.getAttribute('data-id');

    if (target.classList.contains('qty-plus')) {
      updateQuantity(itemId, 1);
    } else if (target.classList.contains('qty-minus')) {
      updateQuantity(itemId, -1);
    } else if (target.classList.contains('remove-item-btn')) {
      removeFromCart(itemId);
    }
  });

  // Modal Close
  modalCloseBtn.addEventListener('click', closeProductModal);
  modalOverlay.addEventListener('click', closeProductModal);

  // Newsletter Form Submit
  newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

// Search Handler
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    productsGrid.innerHTML = '<p class="error-msg">Please enter a search keyword</p>';
    resultsCount.textContent = 'Showing 0 products';
    return;
  }

  // Filter products matching search term (case-insensitive, partial match)
  const searchResults = products.filter(product => {
    return product.name.toLowerCase().includes(query);
  });

  renderProducts(searchResults);
}

// Combined Filter Handler — applies category + price filters together
function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;

  let filtered = [...products];

  // Category filter
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Price filter
  if (selectedPrice === 'under-1000') {
    filtered = filtered.filter(p => p.price < 1000);
  } else if (selectedPrice === '1000-3000') {
    filtered = filtered.filter(p => p.price >= 1000 && p.price <= 3000);
  } else if (selectedPrice === 'above-3000') {
    filtered = filtered.filter(p => p.price > 3000);
  }

  currentProducts = filtered;
  renderProducts(currentProducts);
}

// Category Filter Handler
function handleCategoryFilter() {
  applyFilters();
}

// Price Filter Handler
function handlePriceFilter() {
  applyFilters();
}

// Sort Handler
function handleSort() {
  const sortType = sortFilter.value;
  let sorted = [...currentProducts];

  if (sortType === 'price-low') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortType === 'price-high') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortType === 'name-az') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sorted = [...currentProducts];
  }

  renderProducts(sorted);
}

// Reset Filters
function resetAllFilters() {
  searchInput.value = '';
  categoryFilter.value = 'all';
  priceFilter.value = 'all';
  sortFilter.value = 'default';
  currentProducts = [...products];
  renderProducts(currentProducts);
}

// Open Product Modal
function openProductModal(productId) {
  // Retrieve product details
  const product = products.find(p => p.id === productId);

  if (!product) return;

  modalBody.innerHTML = `
    <div class="modal-product-details">
      <img src="${product.image}" alt="${product.name}" class="modal-product-img">
      <div class="modal-product-info">
        <span class="modal-category">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="product-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
          <span class="rating-score">(${product.rating})</span>
        </div>
        <div class="product-pricing">
          <span class="current-price">₹${product.price}</span>
          <span class="original-price">₹${product.originalPrice}</span>
        </div>
        <p class="modal-description">${product.description}</p>
        <button class="btn btn-primary btn-block modal-add-cart-btn" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  const modalAddBtn = modalBody.querySelector('.modal-add-cart-btn');
  modalAddBtn.addEventListener('click', () => {
    addToCart(product.id);
    closeProductModal();
  });

  productModal.classList.add('active');
}

// Close Product Modal
function closeProductModal() {
  productModal.classList.remove('active');
}

// Open Cart
function openCart() {
  cartSidebar.classList.add('active');
  cartBackdrop.classList.add('active');
}

// Close Cart
function closeCart() {
  cartSidebar.classList.remove('active');
  cartBackdrop.classList.remove('active');
}

// Add Item to Cart
function addToCart(productId) {
  const item = products.find(p => p.id === productId);

  if (!item) return;

  const existingItem = cart.find(c => c.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`${item.name} added to cart!`);
}

// Update Item Quantity in Cart
function updateQuantity(productId, change) {
  const item = cart.find(c => c.id == productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

// Calculate and Update Cart UI
function updateCartUI() {
  // Update cart badge and header count (total quantity, not unique items)
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQty;
  cartHeaderCount.textContent = totalQty;

  // Render items list
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="empty-cart-msg">Your cart is currently empty.</div>';
    cartItemsTotal.textContent = '0';
    cartSubtotal.textContent = '₹0';
    cartGrandTotal.textContent = '₹0';
    return;
  }

  let totalItems = 0;
  let totalAmount = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalAmount += item.price * item.quantity;

    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">₹${item.price}</div>
        <div class="cart-qty-control">
          <button class="qty-btn qty-minus" data-id="${item.id}">-</button>
          <span class="cart-qty">${item.quantity}</span>
          <button class="qty-btn qty-plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="remove-item-btn" data-id="${item.id}" title="Remove item">&times;</button>
    `;

    cartItemsList.appendChild(cartItemEl);
  });

  cartItemsTotal.textContent = totalItems;
  cartSubtotal.textContent = `₹${totalAmount}`;
  cartGrandTotal.textContent = `₹${totalAmount}`;
}

// Toast Notification
function showToast(message) {
  toastNotification.textContent = message;
  toastNotification.classList.add('show');
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 2500);
}

// Newsletter Subscription Handler
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = newsletterEmail.value.trim();

  if (email === '') {
    newsletterMessage.textContent = 'Please enter an email address.';
    newsletterMessage.className = 'newsletter-message error';
    return;
  }

  // Basic validation check
  if (email.includes('@')) {
    newsletterMessage.textContent = 'Thank you for subscribing to ShopEase updates!';
    newsletterMessage.className = 'newsletter-message success';
    newsletterEmail.value = '';
  } else {
    newsletterMessage.textContent = 'Please provide a valid email address.';
    newsletterMessage.className = 'newsletter-message error';
  }
}
