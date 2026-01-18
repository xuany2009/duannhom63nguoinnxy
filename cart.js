// cart.js - Quản lý giỏ hàng
console.log('cart.js đang chạy...');

class CartManager {
    constructor() {
        try {
            const cartData = localStorage.getItem('cart');
            this.cart = cartData ? JSON.parse(cartData) : [];
            console.log('Giỏ hàng khởi tạo thành công với', this.cart.length, 'sản phẩm');
        } catch (error) {
            console.error('Lỗi khi đọc giỏ hàng từ localStorage:', error);
            this.cart = [];
        }
    }
    
    addToCart(product, quantity = 1) {
        try {
            if (!product || !product.id) {
                console.error('Sản phẩm không hợp lệ:', product);
                return false;
            }
            
            const existingItem = this.cart.find(item => item.id === product.id);
            const qty = Math.max(1, Math.min(99, quantity));
            
            if (existingItem) {
                existingItem.quantity += qty;
                console.log(`Đã cập nhật ${product.tendv || product.name}, số lượng: ${existingItem.quantity}`);
            } else {
                this.cart.push({
                    id: product.id,
                    name: product.tendv || product.name || 'Sản phẩm không tên',
                    image: product.anh || product.image || './ảnh/default-flower.jpg',
                    price: parseInt(product.gia || product.price || 0),
                    quantity: qty,
                    category: product.category || 'Không phân loại'
                });
                console.log(`Đã thêm ${product.tendv || product.name} vào giỏ hàng`);
            }
            
            this.saveCart();
            this.updateCartCount();
            return true;
        } catch (error) {
            console.error('Lỗi khi thêm vào giỏ hàng:', error);
            return false;
        }
    }
    
    removeFromCart(productId) {
        try {
            const initialLength = this.cart.length;
            this.cart = this.cart.filter(item => item.id !== productId);
            
            if (this.cart.length < initialLength) {
                console.log(`Đã xóa sản phẩm ${productId} khỏi giỏ hàng`);
                this.saveCart();
                this.updateCartCount();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi xóa khỏi giỏ hàng:', error);
            return false;
        }
    }
    
    updateQuantity(productId, quantity) {
        try {
            const item = this.cart.find(item => item.id === productId);
            if (item) {
                const newQty = Math.max(1, Math.min(99, quantity));
                if (newQty !== item.quantity) {
                    item.quantity = newQty;
                    console.log(`Cập nhật số lượng ${item.name} thành ${newQty}`);
                    this.saveCart();
                    this.updateCartCount();
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi cập nhật số lượng:', error);
            return false;
        }
    }
    
    decreaseQuantity(productId) {
        try {
            const item = this.cart.find(item => item.id === productId);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    this.saveCart();
                    this.updateCartCount();
                    console.log(`Giảm số lượng ${item.name} còn ${item.quantity}`);
                    return true;
                } else {
                    return this.removeFromCart(productId);
                }
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi giảm số lượng:', error);
            return false;
        }
    }
    
    getTotalItems() {
        return this.cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }
    
    getTotalPrice() {
        return this.cart.reduce((sum, item) => {
            const price = item.price || 0;
            const quantity = item.quantity || 0;
            return sum + (price * quantity);
        }, 0);
    }
    
    getCart() {
        return [...this.cart];
    }
    
    hasProduct(productId) {
        return this.cart.some(item => item.id === productId);
    }
    
    getProductQuantity(productId) {
        const item = this.cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    }
    
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
        console.log('Đã xóa toàn bộ giỏ hàng');
    }
    
    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Lỗi khi lưu giỏ hàng:', error);
        }
    }
    
    updateCartCount() {
        try {
            const totalItems = this.getTotalItems();
            const displayCount = totalItems > 99 ? '99+' : totalItems;
            
            const cartBadge = document.getElementById('cart-badge');
            if (cartBadge) {
                cartBadge.textContent = displayCount;
                cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
            }
            
            const cartCountElements = document.querySelectorAll('#cart-count, .cart-count');
            cartCountElements.forEach(element => {
                element.textContent = displayCount;
                element.style.display = totalItems > 0 ? 'inline-block' : 'none';
            });
            
            console.log('Cập nhật số lượng giỏ hàng:', totalItems, 'sản phẩm');
            return totalItems;
        } catch (error) {
            console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
            return 0;
        }
    }
    
    formatPrice(price) {
        return parseInt(price || 0).toLocaleString('vi-VN');
    }
}

// Tạo instance của CartManager và gán vào window
let cartManager;

try {
    cartManager = new CartManager();
    window.cartManager = cartManager;
} catch (error) {
    console.error('Không thể khởi tạo CartManager:', error);
    
    // Fallback object
    const fallbackCartManager = {
        cart: [],
        addToCart: function(product, quantity = 1) {
            try {
                if (!product || !product.id) {
                    console.error('Sản phẩm không hợp lệ:', product);
                    return false;
                }
                
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.id === product.id);
                const qty = Math.max(1, Math.min(99, quantity));
                
                if (existingItem) {
                    existingItem.quantity += qty;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.tendv || product.name || 'Sản phẩm không tên',
                        image: product.anh || product.image || './ảnh/default-flower.jpg',
                        price: parseInt(product.gia || product.price || 0),
                        quantity: qty,
                        category: product.category || 'Không phân loại'
                    });
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                this.updateCartCount();
                return true;
            } catch (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
                return false;
            }
        },
        removeFromCart: function(productId) {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const initialLength = cart.length;
                const newCart = cart.filter(item => item.id !== productId);
                
                if (newCart.length < initialLength) {
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    this.updateCartCount();
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Lỗi khi xóa khỏi giỏ hàng:', error);
                return false;
            }
        },
        updateQuantity: function(productId, quantity) {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const item = cart.find(item => item.id === productId);
                if (item) {
                    const newQty = Math.max(1, Math.min(99, quantity));
                    if (newQty !== item.quantity) {
                        item.quantity = newQty;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        this.updateCartCount();
                    }
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Lỗi khi cập nhật số lượng:', error);
                return false;
            }
        },
        decreaseQuantity: function(productId) {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const item = cart.find(item => item.id === productId);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        this.updateCartCount();
                        return true;
                    } else {
                        return this.removeFromCart(productId);
                    }
                }
                return false;
            } catch (error) {
                console.error('Lỗi khi giảm số lượng:', error);
                return false;
            }
        },
        getTotalItems: function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        },
        getTotalPrice: function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((sum, item) => {
                const price = item.price || 0;
                const quantity = item.quantity || 0;
                return sum + (price * quantity);
            }, 0);
        },
        getCart: function() {
            return JSON.parse(localStorage.getItem('cart')) || [];
        },
        hasProduct: function(productId) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.some(item => item.id === productId);
        },
        getProductQuantity: function(productId) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const item = cart.find(item => item.id === productId);
            return item ? item.quantity : 0;
        },
        clearCart: function() {
            localStorage.setItem('cart', JSON.stringify([]));
            this.updateCartCount();
            console.log('Đã xóa toàn bộ giỏ hàng');
        },
        saveCart: function() {
            // Không làm gì trong fallback
        },
        updateCartCount: function() {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
                const displayCount = totalItems > 99 ? '99+' : totalItems;
                
                const cartBadge = document.getElementById('cart-badge');
                if (cartBadge) {
                    cartBadge.textContent = displayCount;
                    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
                }
                
                const cartCountElements = document.querySelectorAll('#cart-count, .cart-count');
                cartCountElements.forEach(element => {
                    element.textContent = displayCount;
                    element.style.display = totalItems > 0 ? 'inline-block' : 'none';
                });
                
                return totalItems;
            } catch (error) {
                console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
                return 0;
            }
        },
        formatPrice: function(price) {
            return parseInt(price || 0).toLocaleString('vi-VN');
        }
    };
    
    cartManager = fallbackCartManager;
    window.cartManager = cartManager;
}

// Đảm bảo cartManager luôn tồn tại trên window
if (!window.cartManager) {
    window.cartManager = cartManager;
}

// Hàm formatPrice toàn cục
window.formatPrice = function(price) {
    return parseInt(price || 0).toLocaleString('vi-VN');
};

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo localStorage có cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    // Cập nhật số lượng giỏ hàng
    setTimeout(() => {
        try {
            if (window.cartManager && typeof window.cartManager.updateCartCount === 'function') {
                window.cartManager.updateCartCount();
            } else {
                // Fallback manual update
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
                const displayCount = totalItems > 99 ? '99+' : totalItems;
                
                document.querySelectorAll('#cart-badge, #cart-count, .cart-count').forEach(el => {
                    if (el) {
                        el.textContent = displayCount;
                        el.style.display = totalItems > 0 ? 'inline-block' : 'none';
                    }
                });
            }
            
            console.log('Cart initialized:', window.cartManager.getCart());
        } catch (error) {
            console.error('Lỗi khi khởi tạo cart:', error);
        }
    }, 100);
});

// Debug function
window.debugCart = function() {
    console.log('=== DEBUG CART ===');
    console.log('LocalStorage cart:', localStorage.getItem('cart'));
    console.log('cartManager exists:', !!window.cartManager);
    console.log('cartManager methods:', Object.keys(window.cartManager || {}));
    console.log('Cart items:', window.cartManager ? window.cartManager.getCart() : 'N/A');
    console.log('Total items:', window.cartManager ? window.cartManager.getTotalItems() : 'N/A');
    console.log('Total price:', window.cartManager ? window.cartManager.getTotalPrice() : 'N/A');
    console.log('===================');
};