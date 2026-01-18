// product-detail.js - Xử lý trang chi tiết sản phẩm
console.log('product-detail.js đang chạy...');

// Hàm format price
function formatPrice(price) {
    return parseInt(price || 0).toLocaleString('vi-VN');
}

// Hàm lấy cartManager an toàn
function getCartManager() {
    if (typeof window.cartManager !== 'undefined' && window.cartManager) {
        return window.cartManager;
    }
    
    // Fallback cartManager
    return {
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
                    console.log(`Đã cập nhật ${product.tendv || product.name}, số lượng: ${existingItem.quantity}`);
                } else {
                    cart.push({
                        id: product.id,
                        name: product.tendv || product.name || 'Sản phẩm không tên',
                        image: product.anh || product.image || './ảnh/default-flower.jpg',
                        price: parseInt(product.gia || product.price || 0),
                        quantity: qty,
                        category: product.category || 'Không phân loại'
                    });
                    console.log(`Đã thêm ${product.tendv || product.name} vào giỏ hàng`);
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Cập nhật số lượng hiển thị
                const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
                const displayCount = totalItems > 99 ? '99+' : totalItems;
                
                document.querySelectorAll('#cart-badge, #cart-count, .cart-count').forEach(el => {
                    if (el) {
                        el.textContent = displayCount;
                        el.style.display = totalItems > 0 ? 'flex' : 'none';
                    }
                });
                
                return true;
            } catch (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
                return false;
            }
        }
    };
}

// Hàm hiển thị chi tiết sản phẩm
function displayProductDetail() {
    // Lấy sản phẩm từ localStorage
    const product = JSON.parse(localStorage.getItem('selectedProduct')) || {
        id: "default",
        tendv: "Không có dữ liệu",
        anh: "./ảnh/default-flower.jpg",
        tt1: "Không có mô tả cho sản phẩm này",
        gia: "0",
        category: "Không phân loại"
    };

    // Hiển thị breadcrumb
    const breadcrumbCategory = document.getElementById('product-category');
    const breadcrumbName = document.getElementById('product-name');
    
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = product.category || 'Hoa Tặng';
    }
    if (breadcrumbName) {
        breadcrumbName.textContent = product.tendv || 'Chi tiết sản phẩm';
    }

    // Hiển thị chi tiết sản phẩm
    const detailContainer = document.getElementById('product-detail-content');
    if (detailContainer && product) {
        detailContainer.innerHTML = `
            <div class="product-detail-content">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${product.anh}" alt="${product.tendv}" 
                             onerror="this.src='./ảnh/default-flower.jpg'">
                    </div>
                </div>
                
                <div class="product-info">
                    <h1 class="product-title">${product.tendv}</h1>
                    <div class="product-category">${product.category || 'Không phân loại'}</div>
                    
                    <div class="product-price">
                        <div class="current-price">${formatPrice(product.gia)} VNĐ</div>
                    </div>
                    
                    <div class="product-description">
                        <p>${product.tt1}</p>
                    </div>
                    
                    <div class="quantity-selector">
                        <label>Số lượng:</label>
                        <div class="quantity-control">
                            <button class="quantity-btn minus" onclick="changeQuantity(-1)">-</button>
                            <input type="number" id="quantity" value="1" min="1" max="99">
                            <button class="quantity-btn plus" onclick="changeQuantity(1)">+</button>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn-add-to-cart" onclick="addToCartFromDetail()">
                            <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                        </button>
                        <button class="btn-buy-now" onclick="buyNow()">
                            <i class="fas fa-bolt"></i> Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="product-detail-content" style="text-align: center; padding: 50px;">
                <h2>Không tìm thấy sản phẩm</h2>
                <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <a href="index.html#products" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 5px;">
                    Quay về trang sản phẩm
                </a>
            </div>
        `;
    }
}

// Hàm thay đổi số lượng
function changeQuantity(change) {
    const input = document.getElementById('quantity');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    if (value > 99) value = 99;
    input.value = value;
}

// Hàm thêm vào giỏ hàng từ trang chi tiết
function addToCartFromDetail() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) {
        alert('Không tìm thấy thông tin sản phẩm');
        return;
    }

    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) {
        alert('Không tìm thấy ô số lượng');
        return;
    }
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Kiểm tra đăng nhập
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thêm vào giỏ hàng!');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
        return;
    }

    const cartManager = getCartManager();
    const success = cartManager.addToCart(product, quantity);
    
    if (success) {
        alert(`Đã thêm ${quantity} ${product.tendv} vào giỏ hàng!`);
        
        // Hiệu ứng phản hồi
        const addBtn = document.querySelector('.btn-add-to-cart');
        if (addBtn) {
            const originalHTML = addBtn.innerHTML;
            const originalBackground = addBtn.style.background;
            
            addBtn.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            addBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                addBtn.innerHTML = originalHTML;
                addBtn.style.background = originalBackground;
            }, 1000);
        }
    } else {
        alert('Không thể thêm sản phẩm vào giỏ hàng!');
    }
}

// Hàm mua ngay
function buyNow() {
    addToCartFromDetail();
    setTimeout(() => {
        window.location.href = 'sop.html';
    }, 500);
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo trang chi tiết sản phẩm...');
    
    // Đảm bảo localStorage có cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    // Hiển thị chi tiết sản phẩm
    displayProductDetail();
    
    // Thêm CSS nếu chưa có
    addProductDetailStyles();
});

// Thêm CSS cho trang chi tiết
function addProductDetailStyles() {
    if (document.querySelector('#product-detail-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'product-detail-styles';
    style.textContent = `
        .breadcrumb {
            background: #f5f5f5;
            padding: 15px 0;
            margin-top: 20px;
        }
        
        .breadcrumb-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .breadcrumb-container a {
            text-decoration: none;
            color: #666;
            transition: color 0.3s;
        }
        
        .breadcrumb-container a:hover {
            color: #e91e63;
        }
        
        .breadcrumb-container .current {
            color: #e91e63;
            font-weight: 600;
        }
        
        .product-detail-container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }
        
        .product-detail-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-top: 30px;
        }
        
        .product-images {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .main-image {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            height: 400px;
        }
        
        .main-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .product-info {
            padding: 20px 0;
        }
        
        .product-title {
            font-size: 32px;
            color: #333;
            margin-bottom: 10px;
        }
        
        .product-category {
            color: #666;
            font-size: 16px;
            margin-bottom: 20px;
            padding: 5px 10px;
            background: #f0f0f0;
            display: inline-block;
            border-radius: 5px;
        }
        
        .product-price {
            margin: 25px 0;
        }
        
        .current-price {
            font-size: 36px;
            color: #e91e63;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .product-description {
            color: #666;
            line-height: 1.6;
            margin: 25px 0;
            font-size: 16px;
        }
        
        .quantity-selector {
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 30px 0;
        }
        
        .quantity-control {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .quantity-btn {
            width: 40px;
            height: 40px;
            border: 1px solid #ddd;
            background: white;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            font-size: 18px;
        }
        
        .quantity-btn:hover {
            background: #f5f5f5;
            border-color: #667eea;
        }
        
        .quantity-control input {
            width: 60px;
            height: 40px;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin: 30px 0;
        }
        
        .btn-add-to-cart, .btn-buy-now {
            flex: 1;
            padding: 15px 25px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s;
        }
        
        .btn-add-to-cart {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        
        .btn-add-to-cart:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            transform: translateY(-2px);
        }
        
        .btn-buy-now {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
        }
        
        .btn-buy-now:hover {
            background: linear-gradient(135deg, #f5576c, #f093fb);
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .product-detail-content {
                grid-template-columns: 1fr;
                padding: 20px;
                gap: 30px;
            }
            
            .main-image {
                height: 300px;
            }
            
            .product-title {
                font-size: 24px;
            }
            
            .current-price {
                font-size: 28px;
            }
            
            .action-buttons {
                flex-direction: column;
            }
            
            .quantity-selector {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        
        @media (max-width: 480px) {
            .product-detail-content {
                padding: 15px;
            }
            
            .main-image {
                height: 250px;
            }
            
            .product-title {
                font-size: 20px;
            }
            
            .current-price {
                font-size: 24px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Gán các hàm lên window để sử dụng trong onclick
window.changeQuantity = changeQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.formatPrice = formatPrice;