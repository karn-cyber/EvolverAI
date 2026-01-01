// ===================================
// PRODUCT DATA
// ===================================
const categories = [
  { id: 1, name: 'Electronics', icon: '⚡', count: 2500 },
  { id: 2, name: 'Smart Home', icon: '🏠', count: 1800 },
  { id: 3, name: 'Gaming', icon: '🎮', count: 1200 },
  { id: 4, name: 'Audio', icon: '🎧', count: 950 },
  { id: 5, name: 'Wearables', icon: '⌚', count: 780 },
  { id: 6, name: 'Photography', icon: '📷', count: 650 },
  { id: 7, name: 'Fitness', icon: '💪', count: 890 },
  { id: 8, name: 'Lifestyle', icon: '✨', count: 1500 }
];

const products = [
  {
    id: 1,
    name: 'Premium Wireless Earbuds Pro',
    category: 'Audio',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    description: 'Crystal clear sound with active noise cancellation and 30-hour battery life.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 2,
    name: 'Smart Watch Ultra',
    category: 'Wearables',
    price: 399.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    description: 'Advanced fitness tracking, heart rate monitoring, and GPS navigation.',
    badge: 'Hot Deal',
    amazonLink: '#'
  },
  {
    id: 3,
    name: 'Mechanical Gaming Keyboard RGB',
    category: 'Gaming',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
    description: 'Customizable RGB lighting with tactile mechanical switches.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 4,
    name: '4K Action Camera',
    category: 'Photography',
    price: 299.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    description: 'Waterproof 4K recording with image stabilization and WiFi connectivity.',
    badge: 'Hot Deal',
    amazonLink: '#'
  },
  {
    id: 5,
    name: 'Smart LED Light Strips',
    category: 'Smart Home',
    price: 49.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'Voice-controlled RGB lighting with 16 million colors and music sync.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 6,
    name: 'Portable Bluetooth Speaker',
    category: 'Audio',
    price: 89.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    description: '360° sound with deep bass, waterproof design, and 24-hour battery.',
    badge: 'Hot Deal',
    amazonLink: '#'
  },
  {
    id: 7,
    name: 'Wireless Gaming Mouse',
    category: 'Gaming',
    price: 79.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
    description: 'Ultra-lightweight with 20,000 DPI sensor and customizable buttons.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 8,
    name: 'Smart Fitness Tracker',
    category: 'Fitness',
    price: 129.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    description: 'Track your workouts, sleep, and health metrics with precision.',
    badge: 'Hot Deal',
    amazonLink: '#'
  },
  {
    id: 9,
    name: 'Noise Cancelling Headphones',
    category: 'Audio',
    price: 349.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    description: 'Industry-leading noise cancellation with premium sound quality.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 10,
    name: 'Smart Thermostat',
    category: 'Smart Home',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80',
    description: 'Energy-saving climate control with voice assistant integration.',
    badge: 'Hot Deal',
    amazonLink: '#'
  },
  {
    id: 11,
    name: 'Professional Drone',
    category: 'Photography',
    price: 899.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    description: '4K camera drone with obstacle avoidance and 30-minute flight time.',
    badge: 'Trending',
    amazonLink: '#'
  },
  {
    id: 12,
    name: 'VR Headset Pro',
    category: 'Gaming',
    price: 499.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
    description: 'Immersive virtual reality with high-resolution display and spatial audio.',
    badge: 'Hot Deal',
    amazonLink: '#'
  }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let cart = [];
let filteredProducts = [...products];

// ===================================
// DOM ELEMENTS
// ===================================
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartSidebarClose = document.getElementById('cartSidebarClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');

const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

const categoryGrid = document.getElementById('categoryGrid');
const trendingGrid = document.getElementById('trendingGrid');
const dealsGrid = document.getElementById('dealsGrid');

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// ===================================
// RENDER FUNCTIONS
// ===================================
function renderCategories() {
  categoryGrid.innerHTML = categories.map(category => `
    <div class="category-card" onclick="filterByCategory('${category.name}')">
      <span class="category-icon">${category.icon}</span>
      <h3 class="category-name">${category.name}</h3>
      <p class="category-count">${category.count} products</p>
    </div>
  `).join('');
}

function renderProducts() {
  const trendingProducts = products.filter(p => p.badge === 'Trending').slice(0, 6);
  const dealProducts = products.filter(p => p.badge === 'Hot Deal').slice(0, 6);
  
  trendingGrid.innerHTML = trendingProducts.map(createProductCard).join('');
  dealsGrid.innerHTML = dealProducts.map(createProductCard).join('');
}

function createProductCard(product) {
  return `
    <div class="product-card" onclick="showProductModal(${product.id})">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <span class="product-badge ${product.badge === 'Trending' ? 'trending' : ''}">${product.badge}</span>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <div class="product-rating">
            <span>★</span>
            <span>${product.rating}</span>
          </div>
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// ===================================
// MODAL FUNCTIONS
// ===================================
function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  modalBody.innerHTML = `
    <div style="padding: 2rem;">
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 16px; margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
        <div>
          <div style="color: var(--color-accent-primary); font-size: 0.875rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">${product.category}</div>
          <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">${product.name}</h2>
          <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--color-warning); font-weight: 600;">
            <span>★</span>
            <span>${product.rating}</span>
            <span style="color: var(--color-text-tertiary);">(1,234 reviews)</span>
          </div>
        </div>
        <div style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          $${product.price.toFixed(2)}
        </div>
      </div>
      <p style="color: var(--color-text-secondary); line-height: 1.8; margin-bottom: 2rem;">${product.description}</p>
      <div style="display: flex; gap: 1rem;">
        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();" style="flex: 1;">Add to Cart</button>
        <a href="${product.amazonLink}" target="_blank" class="btn btn-secondary" style="flex: 1; text-decoration: none; display: flex; align-items: center; justify-content: center;">View on Amazon</a>
      </div>
    </div>
  `;
  
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// ===================================
// CART FUNCTIONS
// ===================================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartUI();
  showNotification('Added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
      </div>
      <button onclick="removeFromCart(${item.id})" style="background: var(--color-error); color: white; border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1.25rem; display: flex; align-items: center; justify-content: center;">&times;</button>
    </div>
  `).join('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// ===================================
// SEARCH & FILTER
// ===================================
function filterByCategory(categoryName) {
  filteredProducts = products.filter(p => p.category === categoryName);
  trendingGrid.innerHTML = filteredProducts.map(createProductCard).join('');
  
  // Scroll to products section
  document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
}

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
  
  trendingGrid.innerHTML = filteredProducts.map(createProductCard).join('');
});

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
  // Search modal
  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
  });
  
  searchClose.addEventListener('click', () => {
    searchModal.classList.remove('active');
  });
  
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
    }
  });
  
  // Cart sidebar
  cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
  });
  
  cartSidebarClose.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
  });
  
  // Product modal
  modalClose.addEventListener('click', closeProductModal);
  
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
  
  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  
  // Hero CTA buttons
  document.querySelectorAll('.hero-cta .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  document.querySelectorAll('.hero-cta .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('deals').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Navbar scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
      navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
      navbar.style.background = 'var(--glass-bg)';
      navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--gradient-primary);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius-full);
    font-weight: 600;
    box-shadow: var(--shadow-xl);
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===================================
// EXPOSE FUNCTIONS TO GLOBAL SCOPE
// ===================================
window.showProductModal = showProductModal;
window.closeProductModal = closeProductModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.filterByCategory = filterByCategory;
