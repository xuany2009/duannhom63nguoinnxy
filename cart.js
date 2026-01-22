// cart.js - Quản lý giỏ hàng bánh kem
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
            localStorage.setItem('cart', JSON.stringify([]));
        }
    }
    
    // Lấy toàn bộ giỏ hàng
    getCart() {
        return [...this.cart];
    }
    
    // Lấy tổng số lượng sản phẩm
    getTotalItems() {
        return this.cart.reduce((total, item) => total + (item.quantity || 0), 0);
    }
    
    // Lấy tổng giá trị
    getTotalPrice() {
        return this.cart.reduce((total, item) => {
            const price = parseInt(item.price) || 0;
            const quantity = parseInt(item.quantity) || 0;
            return total + (price * quantity);
        }, 0);
    }
    
    // Thêm vào giỏ hàng
    addToCart(product, quantity = 1) {
        try {
            if (!product || !product.id) {
                console.error('Sản phẩm không hợp lệ:', product);
                return false;
            }
            
            const existingItem = this.cart.find(item => item.id === product.id);
            const qty = Math.max(1, Math.min(99, parseInt(quantity) || 1));
            
            if (existingItem) {
                existingItem.quantity += qty;
                console.log(`Đã cập nhật ${product.tendv || product.name}, số lượng: ${existingItem.quantity}`);
            } else {
                this.cart.push({
                    id: product.id,
                    name: product.tendv || product.name || 'Sản phẩm không tên',
                    image: product.anh || product.image || './ảnh/default-cake.jpg',
                    price: parseInt(product.gia || product.price || 0),
                    quantity: qty,
                    category: product.category || 'Không phân loại',
                    size: product.size || '1kg',
                    serves: product.serves || '6-8 người'
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
    
    // Xóa một sản phẩm khỏi giỏ hàng
    removeFromCart(productId) {
        try {
            const initialLength = this.cart.length;
            this.cart = this.cart.filter(item => item.id !== productId);
            
            if (this.cart.length < initialLength) {
                this.saveCart();
                this.updateCartCount();
                console.log(`Đã xóa sản phẩm ${productId} khỏi giỏ hàng`);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
            return false;
        }
    }
    
    // Cập nhật số lượng sản phẩm
    updateQuantity(productId, quantity) {
        try {
            const item = this.cart.find(item => item.id === productId);
            if (item) {
                const newQty = Math.max(1, Math.min(99, parseInt(quantity) || 1));
                if (newQty !== item.quantity) {
                    item.quantity = newQty;
                    this.saveCart();
                    this.updateCartCount();
                    console.log(`Đã cập nhật số lượng ${productId} thành ${newQty}`);
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('Lỗi khi cập nhật số lượng:', error);
            return false;
        }
    }
    
    // Xóa toàn bộ giỏ hàng
    clearCart() {
        try {
            this.cart = [];
            this.saveCart();
            this.updateCartCount();
            console.log('Đã xóa toàn bộ giỏ hàng');
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa giỏ hàng:', error);
            return false;
        }
    }
    
    // Lưu giỏ hàng vào localStorage
    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Lỗi khi lưu giỏ hàng:', error);
        }
    }
    
    // Cập nhật số lượng hiển thị
    updateCartCount() {
        try {
            const totalItems = this.getTotalItems();
            const displayCount = totalItems > 99 ? '99+' : totalItems;
            
            // Cập nhật tất cả các badge giỏ hàng
            document.querySelectorAll('#cart-badge, #cart-count, .cart-count').forEach(el => {
                if (el) {
                    el.textContent = displayCount;
                    el.style.display = totalItems > 0 ? 'flex' : 'none';
                }
            });
            
            return totalItems;
        } catch (error) {
            console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
            return 0;
        }
    }
}

// Tạo instance của CartManager
let cartManager;

try {
    cartManager = new CartManager();
    window.cartManager = cartManager;
    console.log('CartManager đã được khởi tạo');
} catch (error) {
    console.error('Không thể khởi tạo CartManager:', error);
    
    // Fallback cartManager
    const fallbackCartManager = {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        
        getCart: function() {
            return JSON.parse(localStorage.getItem('cart')) || [];
        },
        
        getTotalItems: function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((total, item) => total + (item.quantity || 0), 0);
        },
        
        getTotalPrice: function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((total, item) => {
                const price = parseInt(item.price) || 0;
                const quantity = parseInt(item.quantity) || 0;
                return total + (price * quantity);
            }, 0);
        },
        
        addToCart: function(product, quantity = 1) {
            try {
                if (!product || !product.id) {
                    console.error('Sản phẩm không hợp lệ:', product);
                    return false;
                }
                
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingItem = cart.find(item => item.id === product.id);
                const qty = Math.max(1, Math.min(99, parseInt(quantity) || 1));
                
                if (existingItem) {
                    existingItem.quantity += qty;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.tendv || product.name || 'Sản phẩm không tên',
                        image: product.anh || product.image || './ảnh/default-cake.jpg',
                        price: parseInt(product.gia || product.price || 0),
                        quantity: qty,
                        category: product.category || 'Không phân loại',
                        size: product.size || '1kg',
                        serves: product.serves || '6-8 người'
                    });
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                this.cart = cart;
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
                    this.cart = newCart;
                    this.updateCartCount();
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
                return false;
            }
        },
        
        updateQuantity: function(productId, quantity) {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const item = cart.find(item => item.id === productId);
                if (item) {
                    const newQty = Math.max(1, Math.min(99, parseInt(quantity) || 1));
                    if (newQty !== item.quantity) {
                        item.quantity = newQty;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        this.cart = cart;
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
        
        clearCart: function() {
            localStorage.setItem('cart', JSON.stringify([]));
            this.cart = [];
            this.updateCartCount();
            console.log('Đã xóa toàn bộ giỏ hàng');
        },
        
        updateCartCount: function() {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);
                const displayCount = totalItems > 99 ? '99+' : totalItems;
                
                document.querySelectorAll('#cart-badge, #cart-count, .cart-count').forEach(el => {
                    if (el) {
                        el.textContent = displayCount;
                        el.style.display = totalItems > 0 ? 'flex' : 'none';
                    }
                });
                
                return totalItems;
            } catch (error) {
                console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
                return 0;
            }
        }
    };
    
    cartManager = fallbackCartManager;
    window.cartManager = cartManager;
}

// Hàm formatPrice toàn cục
window.formatPrice = function(price) {
    try {
        return parseInt(price || 0).toLocaleString('vi-VN');
    } catch (error) {
        console.error('Lỗi formatPrice:', error);
        return '0';
    }
};

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    try {
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        
        setTimeout(() => {
            try {
                if (window.cartManager && typeof window.cartManager.updateCartCount === 'function') {
                    window.cartManager.updateCartCount();
                } else {
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const totalItems = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
                    const displayCount = totalItems > 99 ? '99+' : totalItems;
                    
                    document.querySelectorAll('#cart-badge, .cart-count').forEach(el => {
                        if (el) {
                            el.textContent = displayCount;
                            el.style.display = totalItems > 0 ? 'flex' : 'none';
                        }
                    });
                }
            } catch (error) {
                console.warn('Lỗi khi khởi tạo cart:', error);
            }
        }, 100);
    } catch (error) {
        console.error('Lỗi khởi tạo cart:', error);
    }
});

// Debug function
window.debugCart = function() {
    console.log('=== DEBUG CART ===');
    console.log('LocalStorage cart:', localStorage.getItem('cart'));
    console.log('cartManager exists:', !!window.cartManager);
    
    if (window.cartManager) {
        console.log('Cart items:', window.cartManager.getCart ? window.cartManager.getCart() : 'No getCart method');
        console.log('Total items:', window.cartManager.getTotalItems ? window.cartManager.getTotalItems() : 'No getTotalItems method');
        console.log('Total price:', window.cartManager.getTotalPrice ? window.cartManager.getTotalPrice() : 'No getTotalPrice method');
    }
    console.log('===================');
};