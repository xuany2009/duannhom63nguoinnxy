// product-detail.js - Xử lý trang chi tiết sản phẩm BÁNH KEM
console.log('product-detail.js đang chạy...');

// ============================================
// 1. HỆ THỐNG DỮ LIỆU SẢN PHẨM BÁNH KEM
// ============================================

const CAKE_DATABASE = {
    "bday-001": {
        id: "bday-001",
        tendv: "🎂 Bánh Sinh Nhật Dâu Tây Tươi",
        anh: "./ảnh/cakes/birthday1.jpg",
        tt1: `Bánh bông lan tươi với lớp kem phô mai và dâu tây tươi nhập khẩu từ Nhật Bản.
        
• Nguyên liệu: Bột mì Nhật, kem phô mai Pháp, dâu tây Nhật
• Kích thước: 1kg (đường kính 20cm)
• Phục vụ: 6-8 người
• Vị: Vani - Dâu tây tươi
• Bảo quản: 2-5°C, sử dụng trong 3 ngày
• Xuất xứ: Sản xuất tại tiệm

Thành phần dinh dưỡng (100g):
• Calo: 320 kcal
• Đường: 25g
• Chất béo: 15g
• Protein: 5g`,
        gia: "450000",
        category: "Bánh Sinh Nhật",
        size: "1kg",
        serves: "6-8 người",
        flavor: "Vani - Dâu tây",
        tags: ["dâu tây", "tươi", "phổ biến", "sinh nhật"],
        nutrition: {
            calories: 320,
            sugar: 25,
            fat: 15,
            protein: 5
        },
        images: [
            "./ảnh/cakes/birthday1.jpg",
            "./ảnh/cakes/birthday1_1.jpg",
            "./ảnh/cakes/birthday1_2.jpg",
            "./ảnh/cakes/birthday1_3.jpg"
        ]
    },
    "bday-002": {
        id: "bday-002",
        tendv: "🍫 Bánh Sinh Nhật Socola Đậm Đà",
        anh: "./ảnh/cakes/birthday2.jpg",
        tt1: `Bánh socola nguyên chất với ganache socola đen 70% từ Bỉ.
        
• Nguyên liệu: Socola đen Bỉ 70%, bơ Pháp, kem tươi
• Kích thước: 1.5kg (đường kính 22cm)
• Phục vụ: 8-10 người
• Vị: Socola đậm đà, ít ngọt
• Bảo quản: 2-5°C, sử dụng trong 4 ngày
• Xuất xứ: Sản xuất tại tiệm

Thành phần dinh dưỡng (100g):
• Calo: 380 kcal
• Đường: 30g
• Chất béo: 20g
• Protein: 6g`,
        gia: "675000",
        category: "Bánh Sinh Nhật",
        size: "1.5kg",
        serves: "8-10 người",
        flavor: "Socola đen",
        tags: ["socola", "đậm đà", "người lớn", "cao cấp"],
        nutrition: {
            calories: 380,
            sugar: 30,
            fat: 20,
            protein: 6
        },
        images: [
            "./ảnh/cakes/birthday2.jpg",
            "./ảnh/cakes/birthday2_1.jpg",
            "./ảnh/cakes/birthday2_2.jpg"
        ]
    },
    "bday-003": {
        id: "bday-003",
        tendv: "🍓 Bánh Sinh Nhật Trái Cây Nhiệt Đới",
        anh: "./ảnh/cakes/birthday3.jpg",
        tt1: `Bánh vani với xoài, kiwi, dâu và kem chantilly.
        
• Nguyên liệu: Xoài Úc, kiwi New Zealand, dâu Đà Lạt
• Kích thước: 2kg (đường kính 24cm)
• Phục vụ: 10-12 người
• Vị: Trái cây tươi, thanh mát
• Bảo quản: 2-5°C, sử dụng trong 2 ngày
• Xuất xứ: Sản xuất tại tiệm`,
        gia: "900000",
        category: "Bánh Sinh Nhật",
        size: "2kg",
        serves: "10-12 người",
        flavor: "Trái cây nhiệt đới",
        tags: ["trái cây", "thanh mát", "mùa hè"],
        images: [
            "./ảnh/cakes/birthday3.jpg",
            "./ảnh/cakes/birthday3_1.jpg"
        ]
    },
    "wed-001": {
        id: "wed-001",
        tendv: "💍 Bánh Cưới Tầng Trắng Cổ Điển",
        anh: "./ảnh/cakes/wedding1.jpg",
        tt1: `Bánh cưới 3 tầng màu trắng với hoa đường tinh xảo.
        
• Tổng trọng lượng: 5kg
• Phục vụ: 50-60 người
• Vị: Vani, socola, dâu (3 tầng 3 vị)
• Thời gian đặt: Trước 7 ngày
• Setup miễn phí trong nội thành
• Tặng kèm dao cắt bánch cao cấp`,
        gia: "3000000",
        category: "Bánh Cưới",
        size: "5kg (3 tầng)",
        serves: "50-60 người",
        flavor: "Vani - Socola - Dâu",
        tags: ["cưới", "3 tầng", "cao cấp", "setup"],
        images: [
            "./ảnh/cakes/wedding1.jpg",
            "./ảnh/cakes/wedding1_1.jpg",
            "./ảnh/cakes/wedding1_2.jpg"
        ]
    },
    "cup-001": {
        id: "cup-001",
        tendv: "🧁 Cupcake Vanilla Bean Premium",
        anh: "./ảnh/cakes/cupcake1.jpg",
        tt1: `Cupcake vani nguyên chất với hạt vani Madagascar.
        
• Set 6 cái
• Phục vụ: 3-4 người
• Vị: Vani Madagascar tự nhiên
• Hộp quà cao cấp đi kèm
• Phù hợp quà tặng, tiệc nhỏ`,
        gia: "240000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người",
        flavor: "Vani nguyên chất",
        tags: ["cupcake", "vani", "quà tặng", "tiệc"],
        images: [
            "./ảnh/cakes/cupcake1.jpg",
            "./ảnh/cakes/cupcake1_1.jpg",
            "./ảnh/cakes/cupcake1_2.jpg"
        ]
    },
    "mousse-001": {
        id: "mousse-001",
        tendv: "🍰 Bánh Mousse Xoài Nhiệt Đới",
        anh: "./ảnh/cakes/mousse1.jpg",
        tt1: `Bánh mousse xoài với lớp xoài tươi và đế bánh bông lan.
        
• Trọng lượng: 1kg
• Phục vụ: 6-8 người
• Vị: Xoài tươi, thanh mát
• Không sử dụng gelatin động vật
• 100% trái cây tự nhiên`,
        gia: "550000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người",
        flavor: "Xoài nhiệt đới",
        tags: ["mousse", "xoài", "thanh mát", "healthy"],
        images: [
            "./ảnh/cakes/mousse1.jpg",
            "./ảnh/cakes/mousse1_1.jpg"
        ]
    },
    "combo-001": {
        id: "combo-001",
        tendv: "🎁 Combo Sinh Nhật Gia Đình",
        anh: "./ảnh/cakes/combo1.jpg",
        tt1: `COMBO ĐẦY ĐỦ CHO TIỆC SINH NHẬT GIA ĐÌNH:

• Bánh sinh nhật 1.5kg (tùy chọn vị)
• 6 cupcake cao cấp
• Nến số và nến trang trí
• Dao cắt bánh cao cấp
• Hộp quà sang trọng
• Thiệp chúc mừng

Tổng giá trị: 1,500,000 VNĐ
Tiết kiệm: 300,000 VNĐ (20%)`,
        gia: "1200000",
        category: "Combo & Set Quà Tặng",
        size: "Combo đầy đủ",
        serves: "10-12 người",
        flavor: "Tùy chọn",
        tags: ["combo", "tiết kiệm", "gia đình", "đầy đủ"],
        images: [
            "./ảnh/cakes/combo1.jpg",
            "./ảnh/cakes/combo1_1.jpg"
        ]
    }
};

// ============================================
// 2. HÀM TIỆN ÍCH
// ============================================

// Format giá tiền
function formatPrice(price) {
    return parseInt(price || 0).toLocaleString('vi-VN');
}

// Lấy cartManager an toàn
function getCartManager() {
    if (typeof window.cartManager !== 'undefined' && window.cartManager) {
        return window.cartManager;
    }
    
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

// ============================================
// 3. HÀM HIỂN THỊ CHI TIẾT SẢN PHẨM
// ============================================

function displayProductDetail() {
    // Lấy thông tin sản phẩm từ nhiều nguồn
    let product = null;
    const productId = getProductIdFromURL();
    
    if (productId && CAKE_DATABASE[productId]) {
        // Nếu có ID trong URL và có trong database
        product = CAKE_DATABASE[productId];
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    } else {
        // Lấy từ localStorage
        try {
            product = JSON.parse(localStorage.getItem('selectedProduct'));
        } catch (error) {
            console.error('Lỗi khi parse product:', error);
        }
    }
    
    // Nếu không có sản phẩm, dùng sản phẩm mặc định
    if (!product) {
        product = {
            id: "default",
            tendv: "Bánh Kem Đặc Biệt",
            anh: "./ảnh/default-cake.jpg",
            tt1: "Bánh kem cao cấp được làm từ nguyên liệu nhập khẩu. Phù hợp cho mọi dịp đặc biệt.",
            gia: "500000",
            category: "Bánh Đặc Biệt",
            size: "1kg",
            serves: "6-8 người",
            flavor: "Vani",
            tags: ["đặc biệt", "cao cấp"]
        };
    }
    
    // Hiển thị breadcrumb
    updateBreadcrumb(product);
    
    // Hiển thị chi tiết sản phẩm
    renderProductDetail(product);
    
    // Thêm sự kiện cho các nút
    setupEventListeners(product);
}

// Lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Cập nhật breadcrumb
function updateBreadcrumb(product) {
    const breadcrumbCategory = document.getElementById('product-category');
    const breadcrumbName = document.getElementById('product-name');
    
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = product.category || 'Bánh Kem';
    }
    if (breadcrumbName) {
        breadcrumbName.textContent = product.tendv || 'Chi tiết sản phẩm';
    }
}

// Render chi tiết sản phẩm
function renderProductDetail(product) {
    const detailContainer = document.getElementById('product-detail-content');
    if (!detailContainer) return;
    
    const images = product.images || [product.anh, './ảnh/default-cake.jpg'];
    const nutritionInfo = product.nutrition || {
        calories: 350,
        sugar: 28,
        fat: 18,
        protein: 5
    };
    
    detailContainer.innerHTML = `
        <div class="product-detail-content">
            <!-- PHẦN HÌNH ẢNH -->
            <div class="product-images-section">
                <div class="main-image-container">
                    <img src="${images[0]}" alt="${product.tendv}" 
                         id="main-product-image"
                         onerror="this.src='./ảnh/default-cake.jpg'">
                    <div class="image-badge ${product.category.includes('Sinh Nhật') ? 'birthday' : product.category.includes('Cưới') ? 'wedding' : 'normal'}">
                        ${product.category.includes('Sinh Nhật') ? '🎂' : product.category.includes('Cưới') ? '💍' : '🧁'}
                    </div>
                </div>
                
                <div class="thumbnail-gallery">
                    ${images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                             data-image="${img}"
                             onclick="changeProductImage('${img}')">
                            <img src="${img}" alt="Ảnh ${index + 1}"
                                 onerror="this.src='./ảnh/default-cake.jpg'">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- PHẦN THÔNG TIN -->
            <div class="product-info-section">
                <!-- Tiêu đề và danh mục -->
                <div class="product-header">
                    <h1 class="product-title">${product.tendv}</h1>
                    <div class="product-meta">
                        <span class="category-badge">${product.category}</span>
                        <span class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="rating-text">4.5 (128 đánh giá)</span>
                        </span>
                    </div>
                </div>
                
                <!-- Giá và khuyến mãi -->
                <div class="product-price-section">
                    <div class="current-price">${formatPrice(product.gia)} VNĐ</div>
                    <div class="price-details">
                        <span class="original-price">${formatPrice(parseInt(product.gia) * 1.2)} VNĐ</span>
                        <span class="discount">Tiết kiệm 20%</span>
                    </div>
                    <div class="installment">
                        <i class="fas fa-credit-card"></i>
                        Trả góp 0% qua thẻ tín dụng
                    </div>
                </div>
                
                <!-- Thông tin cơ bản -->
                <div class="basic-info">
                    <div class="info-item">
                        <i class="fas fa-weight"></i>
                        <div>
                            <div class="info-label">Kích thước</div>
                            <div class="info-value">${product.size}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <div class="info-label">Phục vụ</div>
                            <div class="info-value">${product.serves}</div>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-ice-cream"></i>
                        <div>
                            <div class="info-label">Hương vị</div>
                            <div class="info-value">${product.flavor || 'Đa dạng'}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Chọn số lượng -->
                <div class="quantity-section">
                    <label>Số lượng:</label>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" onclick="changeQuantity(-1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" id="quantity" value="1" min="1" max="99" 
                               onchange="validateQuantity(this)">
                        <button class="quantity-btn plus" onclick="changeQuantity(1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="stock-info">
                        <i class="fas fa-check-circle"></i>
                        Còn hàng - Giao trong 2 giờ
                    </div>
                </div>
                
                <!-- Nút hành động -->
                <div class="action-buttons">
                    <button class="btn-add-to-cart" onclick="addToCartFromDetail()">
                        <i class="fas fa-cart-plus"></i>
                        <span>Thêm vào giỏ hàng</span>
                    </button>
                    <button class="btn-buy-now" onclick="buyNow()">
                        <i class="fas fa-bolt"></i>
                        <span>Mua ngay</span>
                    </button>
                    <button class="btn-wishlist" onclick="addToWishlist()">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
                
                <!-- Tags -->
                <div class="product-tags">
                    ${(product.tags || []).map(tag => `
                        <span class="tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- PHẦN MÔ TẢ CHI TIẾT -->
        <div class="product-description-section">
            <div class="section-tabs">
                <button class="tab-btn active" onclick="switchTab('description')">Mô tả</button>
                <button class="tab-btn" onclick="switchTab('nutrition')">Dinh dưỡng</button>
                <button class="tab-btn" onclick="switchTab('reviews')">Đánh giá</button>
                <button class="tab-btn" onclick="switchTab('policy')">Chính sách</button>
            </div>
            
            <div class="tab-content active" id="description-tab">
                <div class="description-content">
                    ${product.tt1.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
                
                <div class="features-grid">
                    <div class="feature">
                        <i class="fas fa-leaf"></i>
                        <h4>Nguyên liệu cao cấp</h4>
                        <p>Nhập khẩu từ Nhật, Pháp, Bỉ</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-clock"></i>
                        <h4>Giao hàng nhanh</h4>
                        <p>Giao trong 2 giờ nội thành</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-gift"></i>
                        <h4>Đóng gói quà tặng</h4>
                        <p>Miễn phí hộp quà cao cấp</p>
                    </div>
                    <div class="feature">
                        <i class="fas fa-undo"></i>
                        <h4>Đổi trả dễ dàng</h4>
                        <p>Đổi trả trong 24 giờ</p>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="nutrition-tab">
                <div class="nutrition-info">
                    <h3>Thông tin dinh dưỡng</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <div class="nutrition-label">Calories</div>
                            <div class="nutrition-value">${nutritionInfo.calories} kcal</div>
                            <div class="nutrition-bar" style="width: ${nutritionInfo.calories/5}%"></div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-label">Đường</div>
                            <div class="nutrition-value">${nutritionInfo.sugar}g</div>
                            <div class="nutrition-bar" style="width: ${nutritionInfo.sugar}%"></div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-label">Chất béo</div>
                            <div class="nutrition-value">${nutritionInfo.fat}g</div>
                            <div class="nutrition-bar" style="width: ${nutritionInfo.fat}%"></div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-label">Protein</div>
                            <div class="nutrition-value">${nutritionInfo.protein}g</div>
                            <div class="nutrition-bar" style="width: ${nutritionInfo.protein*10}%"></div>
                        </div>
                    </div>
                    <div class="nutrition-tip">
                        <i class="fas fa-info-circle"></i>
                        <strong>Lưu ý:</strong> Thông tin dinh dưỡng tính trên 100g sản phẩm
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="reviews-tab">
                <div class="reviews-section">
                    <h3>Đánh giá từ khách hàng</h3>
                    <div class="average-rating">
                        <div class="rating-number">4.5/5</div>
                        <div class="rating-stars">
                            ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="fas fa-star-half-alt"></i>
                        </div>
                        <div class="rating-count">128 đánh giá</div>
                    </div>
                    
                    <div class="review-list">
                        <div class="review">
                            <div class="review-header">
                                <img src="https://i.pravatar.cc/150?img=1" alt="Nguyễn Văn A" class="review-avatar">
                                <div>
                                    <div class="review-name">Nguyễn Văn A</div>
                                    <div class="review-date">20/01/2024</div>
                                </div>
                            </div>
                            <div class="review-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(5)}
                            </div>
                            <div class="review-text">
                                "Bánh rất ngon, dâu tươi và kem không quá ngọt. Con tôi rất thích!"
                            </div>
                        </div>
                        
                        <div class="review">
                            <div class="review-header">
                                <img src="https://i.pravatar.cc/150?img=2" alt="Trần Thị B" class="review-avatar">
                                <div>
                                    <div class="review-name">Trần Thị B</div>
                                    <div class="review-date">15/01/2024</div>
                                </div>
                            </div>
                            <div class="review-rating">
                                ${'<i class="fas fa-star"></i>'.repeat(4)}<i class="far fa-star"></i>
                            </div>
                            <div class="review-text">
                                "Chất lượng tốt, giao hàng đúng giờ. Sẽ ủng hộ lần sau."
                            </div>
                        </div>
                    </div>
                    
                    <div class="write-review-btn" style="margin-top: 20px;">
                        <button onclick="viewAllReviews()" style="
                            background: linear-gradient(135deg, #667eea, #764ba2);
                            color: white;
                            border: none;
                            padding: 12px 30px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: bold;
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            margin: 0 auto;
                        ">
                            <i class="fas fa-edit"></i>
                            Viết đánh giá của bạn
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="policy-tab">
                <div class="policy-section">
                    <h3>Chính sách mua hàng</h3>
                    <div class="policy-list">
                        <div class="policy-item">
                            <i class="fas fa-shipping-fast"></i>
                            <div>
                                <h4>Giao hàng</h4>
                                <p>• Miễn phí giao hàng nội thành đơn từ 500k<br>
                                   • Giao trong 2 giờ (8:00 - 20:00)<br>
                                   • Giao ngoại thành trong 24h</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-exchange-alt"></i>
                            <div>
                                <h4>Đổi trả</h4>
                                <p>• Đổi trả trong 24 giờ nếu có lỗi từ NSX<br>
                                   • Hoàn tiền 100% nếu sản phẩm không đúng mô tả<br>
                                   • Liên hệ hotline: 0937 881 148</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-calendar-alt"></i>
                            <div>
                                <h4>Đặt hàng trước</h4>
                                <p>• Bánh cưới: Đặt trước 7 ngày<br>
                                   • Bánh sinh nhật: Đặt trước 3 ngày<br>
                                   • Cupcake: Đặt trước 1 ngày</p>
                            </div>
                        </div>
                        <div class="policy-item">
                            <i class="fas fa-credit-card"></i>
                            <div>
                                <h4>Thanh toán</h4>
                                <p>• COD (nhận hàng thanh toán)<br>
                                   • Chuyển khoản ngân hàng<br>
                                   • Thẻ tín dụng (trả góp 0%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- SẢN PHẨM LIÊN QUAN -->
        <div class="related-products-section">
            <h2>Sản phẩm liên quan</h2>
            <div class="related-products" id="related-products"></div>
        </div>
    `;
    
    // Hiển thị sản phẩm liên quan
    showRelatedProducts(product);
}

// Hiển thị sản phẩm liên quan
function showRelatedProducts(currentProduct) {
    const container = document.getElementById('related-products');
    if (!container) return;
    
    // Lấy sản phẩm cùng danh mục
    const relatedProducts = Object.values(CAKE_DATABASE)
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) return;
    
    container.innerHTML = relatedProducts.map(product => `
        <div class="related-product" onclick="viewProduct('${product.id}')">
            <img src="${product.anh}" alt="${product.tendv}"
                 onerror="this.src='./ảnh/default-cake.jpg'">
            <div class="related-product-info">
                <div class="related-product-name">${product.tendv}</div>
                <div class="related-product-price">${formatPrice(product.gia)} VNĐ</div>
                <div class="related-product-size">${product.size}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// 4. CÁC HÀM XỬ LÝ SỰ KIỆN
// ============================================

// Thay đổi ảnh sản phẩm
function changeProductImage(imageUrl) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = imageUrl;
        mainImage.onerror = function() {
            this.src = './ảnh/default-cake.jpg';
        };
    }
    
    // Cập nhật active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.dataset.image === imageUrl) {
            thumb.classList.add('active');
        }
    });
}

// Thay đổi số lượng
function changeQuantity(change) {
    const input = document.getElementById('quantity');
    if (!input) return;
    
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    if (value > 99) value = 99;
    input.value = value;
}

// Validate số lượng
function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 1) {
        input.value = 1;
    } else if (value > 99) {
        input.value = 99;
    }
}

// Thêm vào giỏ hàng từ trang chi tiết
function addToCartFromDetail() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) {
        showNotification('Không tìm thấy thông tin sản phẩm', 'error');
        return;
    }

    const quantityInput = document.getElementById('quantity');
    if (!quantityInput) {
        showNotification('Không tìm thấy ô số lượng', 'error');
        return;
    }
    
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Kiểm tra đăng nhập
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'warning');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    const cartManager = getCartManager();
    const success = cartManager.addToCart(product, quantity);
    
    if (success) {
        showNotification(`Đã thêm ${quantity} "${product.tendv}" vào giỏ hàng!`, 'success');
        
        // Hiệu ứng phản hồi
        const addBtn = document.querySelector('.btn-add-to-cart');
        if (addBtn) {
            const originalHTML = addBtn.innerHTML;
            const originalBackground = addBtn.style.background;
            
            addBtn.innerHTML = '<i class="fas fa-check"></i> <span>Đã thêm</span>';
            addBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                addBtn.innerHTML = originalHTML;
                addBtn.style.background = originalBackground;
            }, 1000);
        }
    } else {
        showNotification('Không thể thêm sản phẩm vào giỏ hàng!', 'error');
    }
}

// Mua ngay
function buyNow() {
    addToCartFromDetail();
    setTimeout(() => {
        window.location.href = 'sop.html';
    }, 800);
}

// Thêm vào wishlist
function addToWishlist() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Kiểm tra nếu đã có trong wishlist
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        const wishlistBtn = document.querySelector('.btn-wishlist');
        if (wishlistBtn) {
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
            wishlistBtn.style.color = '#e91e63';
        }
        
        showNotification('Đã thêm vào danh sách yêu thích!', 'success');
    } else {
        showNotification('Sản phẩm đã có trong danh sách yêu thích!', 'info');
    }
}

// Chuyển tab
function switchTab(tabName) {
    // Ẩn tất cả tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Xóa active tất cả tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hiển thị tab được chọn
    const tabContent = document.getElementById(`${tabName}-tab`);
    const tabBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
    
    if (tabContent) tabContent.classList.add('active');
    if (tabBtn) tabBtn.classList.add('active');
}

// Xem tất cả đánh giá
function viewAllReviews() {
    // Tạo modal để hiển thị tất cả đánh giá
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    
    const reviews = getProductReviews(product.id);
    
    const modalHTML = `
        <div class="reviews-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        ">
            <div class="modal-content" style="
                background: white;
                border-radius: 15px;
                padding: 30px;
                max-width: 800px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
            ">
                <div class="modal-header" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #eee;
                ">
                    <h2 style="margin: 0; color: #333;">Đánh giá sản phẩm</h2>
                    <button onclick="closeModal()" style="
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #666;
                    ">&times;</button>
                </div>
                
                <div class="reviews-summary" style="
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f9f9f9;
                    border-radius: 10px;
                ">
                    <div style="text-align: center;">
                        <div style="font-size: 48px; font-weight: bold; color: #333;">4.5</div>
                        <div style="color: #ff9800; font-size: 18px;">
                            ${'★'.repeat(4)}<span style="color: #ddd;">★</span>
                        </div>
                        <div style="color: #666; margin-top: 5px;">${reviews.length} đánh giá</div>
                    </div>
                    
                    <div style="flex: 1;">
                        ${[5, 4, 3, 2, 1].map(star => `
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                                <div style="color: #ff9800; width: 60px;">${star} sao</div>
                                <div style="flex: 1; height: 8px; background: #eee; border-radius: 4px; overflow: hidden;">
                                    <div style="
                                        height: 100%;
                                        background: #ff9800;
                                        width: ${(reviews.filter(r => r.rating === star).length / reviews.length * 100)}%;
                                    "></div>
                                </div>
                                <div style="width: 40px; text-align: right; color: #666; font-size: 14px;">
                                    ${reviews.filter(r => r.rating === star).length}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="add-review-section" style="
                    margin-bottom: 30px;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 10px;
                    color: white;
                ">
                    <h3 style="margin: 0 0 15px 0;">Thêm đánh giá của bạn</h3>
                    <div class="review-stars-input" style="margin-bottom: 15px;">
                        ${[1,2,3,4,5].map(star => `
                            <span style="
                                font-size: 24px;
                                cursor: pointer;
                                color: #ddd;
                                margin-right: 5px;
                            " onclick="rateProduct(${star})" data-star="${star}">★</span>
                        `).join('')}
                        <span id="selected-rating-text" style="margin-left: 10px;"></span>
                    </div>
                    <textarea id="review-text" placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..." style="
                        width: 100%;
                        height: 100px;
                        padding: 12px;
                        border: none;
                        border-radius: 8px;
                        resize: vertical;
                        margin-bottom: 15px;
                    "></textarea>
                    <button onclick="submitReview()" style="
                        background: white;
                        color: #667eea;
                        border: none;
                        padding: 10px 25px;
                        border-radius: 8px;
                        font-weight: bold;
                        cursor: pointer;
                    ">Gửi đánh giá</button>
                </div>
                
                <div class="all-reviews">
                    ${reviews.map(review => `
                        <div class="review-item" style="
                            padding: 20px;
                            border-bottom: 1px solid #eee;
                            margin-bottom: 15px;
                        ">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                                <img src="${review.avatar}" alt="${review.name}" style="
                                    width: 50px;
                                    height: 50px;
                                    border-radius: 50%;
                                    object-fit: cover;
                                ">
                                <div>
                                    <div style="font-weight: bold; color: #333;">${review.name}</div>
                                    <div style="color: #666; font-size: 14px;">${formatDate(review.date)}</div>
                                </div>
                            </div>
                            <div style="color: #ff9800; margin-bottom: 10px;">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                            </div>
                            <div style="color: #333; line-height: 1.6; margin-bottom: 10px;">
                                ${review.comment}
                            </div>
                            <div style="display: flex; gap: 10px;">
                                <button onclick="likeReview('${review.id}')" style="
                                    background: none;
                                    border: 1px solid #ddd;
                                    padding: 5px 15px;
                                    border-radius: 20px;
                                    color: #666;
                                    cursor: pointer;
                                ">
                                    <i class="fas fa-thumbs-up"></i> Hữu ích (${review.likes || 0})
                                </button>
                                <button onclick="reportReview('${review.id}')" style="
                                    background: none;
                                    border: none;
                                    color: #999;
                                    cursor: pointer;
                                ">
                                    Báo cáo
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    setupReviewStars();
}

// Đóng modal
function closeModal() {
    const modal = document.querySelector('.reviews-modal');
    if (modal) modal.remove();
}

// Lấy đánh giá sản phẩm
function getProductReviews(productId) {
    // Dữ liệu mẫu - trong thực tế lấy từ server
    return [
        {
            id: "review-1",
            productId: productId,
            name: "Nguyễn Văn A",
            avatar: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            date: "2024-01-20",
            comment: "Bánh rất ngon, dâu tươi và kem không quá ngọt. Con tôi rất thích! Giao hàng đúng giờ, đóng gói cẩn thận.",
            likes: 12
        },
        {
            id: "review-2",
            productId: productId,
            name: "Trần Thị B",
            avatar: "https://i.pravatar.cc/150?img=2",
            rating: 4,
            date: "2024-01-15",
            comment: "Chất lượng tốt, giao hàng đúng giờ. Hương vị đậm đà, nhưng hơi ngọt một chút. Sẽ ủng hộ lần sau.",
            likes: 8
        },
        {
            id: "review-3",
            productId: productId,
            name: "Lê Văn C",
            avatar: "https://i.pravatar.cc/150?img=3",
            rating: 5,
            date: "2024-01-10",
            comment: "Tuyệt vời! Bánh đẹp như hình, hương vị thơm ngon. Nhân viên tư vấn nhiệt tình. Rất đáng tiền!",
            likes: 15
        },
        {
            id: "review-4",
            productId: productId,
            name: "Phạm Thị D",
            avatar: "https://i.pravatar.cc/150?img=4",
            rating: 3,
            date: "2024-01-05",
            comment: "Bánh ngon nhưng hơi nhỏ so với mô tả. Nên cải thiện phần đóng gói cho chắc chắn hơn.",
            likes: 3
        },
        {
            id: "review-5",
            productId: productId,
            name: "Hoàng Văn E",
            avatar: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            date: "2024-01-02",
            comment: "Đã mua nhiều lần, chất lượng luôn ổn định. Bánh tươi, nguyên liệu tốt. 5 sao!",
            likes: 20
        },
        {
            id: "review-6",
            productId: productId,
            name: "Nguyễn Thị F",
            avatar: "https://i.pravatar.cc/150?img=6",
            rating: 4,
            date: "2023-12-28",
            comment: "Phù hợp cho sinh nhật bé. Bánh đẹp, trang trí dễ thương. Giá cả hợp lý.",
            likes: 7
        }
    ];
}

// Đánh giá sản phẩm
function rateProduct(rating) {
    const stars = document.querySelectorAll('[data-star]');
    stars.forEach((star, index) => {
        const starNum = parseInt(star.dataset.star);
        star.style.color = starNum <= rating ? '#ffd700' : '#ddd';
    });
    
    const ratingText = document.getElementById('selected-rating-text');
    const texts = [
        "Rất tệ",
        "Tệ",
        "Bình thường",
        "Tốt",
        "Tuyệt vời"
    ];
    ratingText.textContent = texts[rating - 1];
    ratingText.style.color = '#ffd700';
    
    // Lưu rating tạm thời
    window.tempRating = rating;
}

// Setup stars khi mở modal
function setupReviewStars() {
    const stars = document.querySelectorAll('[data-star]');
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.dataset.star);
            stars.forEach((s, index) => {
                const starNum = parseInt(s.dataset.star);
                s.style.color = starNum <= rating ? '#ffd700' : '#ddd';
            });
        });
        
        star.addEventListener('mouseout', function() {
            if (window.tempRating) {
                stars.forEach(s => {
                    const starNum = parseInt(s.dataset.star);
                    s.style.color = starNum <= window.tempRating ? '#ffd700' : '#ddd';
                });
            } else {
                stars.forEach(s => {
                    s.style.color = '#ddd';
                });
            }
        });
    });
}

// Gửi đánh giá
function submitReview() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        showNotification('Vui lòng đăng nhập để đánh giá sản phẩm!', 'warning');
        setTimeout(() => {
            closeModal();
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    
    const rating = window.tempRating;
    const comment = document.getElementById('review-text').value.trim();
    
    if (!rating) {
        showNotification('Vui lòng chọn số sao đánh giá!', 'error');
        return;
    }
    
    if (!comment) {
        showNotification('Vui lòng nhập nội dung đánh giá!', 'error');
        return;
    }
    
    // Lấy thông tin user
    const userData = JSON.parse(user);
    
    // Tạo review mới
    const newReview = {
        id: 'review-' + Date.now(),
        productId: JSON.parse(localStorage.getItem('selectedProduct')).id,
        name: userData.name || userData.email,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
        rating: rating,
        date: new Date().toISOString().split('T')[0],
        comment: comment,
        likes: 0
    };
    
    // Trong thực tế, gửi lên server
    // Ở đây chỉ hiển thị thông báo
    showNotification('Cảm ơn bạn đã đánh giá sản phẩm!', 'success');
    
    // Đóng modal sau 1.5 giây
    setTimeout(() => {
        closeModal();
        // Reload lại phần đánh giá
        switchTab('reviews');
    }, 1500);
}

// Thích đánh giá
function likeReview(reviewId) {
    // Trong thực tế, gửi request lên server
    showNotification('Cảm ơn phản hồi của bạn!', 'info');
}

// Báo cáo đánh giá
function reportReview(reviewId) {
    const reason = prompt('Vui lòng nhập lý do báo cáo:');
    if (reason && reason.trim()) {
        showNotification('Đã gửi báo cáo. Cảm ơn bạn đã đóng góp!', 'info');
    }
}

// Format ngày
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

// Xem sản phẩm khác
function viewProduct(productId) {
    if (CAKE_DATABASE[productId]) {
        localStorage.setItem('selectedProduct', JSON.stringify(CAKE_DATABASE[productId]));
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

// Hiển thị thông báo
function showNotification(message, type = 'success') {
    try {
        let notification = document.getElementById('global-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'global-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 25px;
                border-radius: 8px;
                color: white;
                font-weight: bold;
                z-index: 9999;
                display: none;
                min-width: 300px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(notification);
        }
        
        const colors = {
            'success': 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            'error': 'linear-gradient(135deg, #ff5252, #d32f2f)',
            'info': 'linear-gradient(135deg, #2196F3, #1976D2)',
            'warning': 'linear-gradient(135deg, #FF9800, #F57C00)'
        };
        
        notification.style.background = colors[type] || colors['success'];
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        notification.style.display = 'block';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('Lỗi khi hiển thị thông báo:', error);
    }
}

// Setup event listeners
function setupEventListeners(product) {
    // Lắng nghe sự kiện nhấn Enter trên ô số lượng
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addToCartFromDetail();
            }
        });
    }
    
    // Kiểm tra nếu sản phẩm đã có trong wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const wishlistBtn = document.querySelector('.btn-wishlist');
    if (wishlistBtn && isInWishlist) {
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
        wishlistBtn.style.color = '#e91e63';
    }
}

// ============================================
// 5. KHỞI TẠO KHI DOM SẴN SÀNG
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo trang chi tiết sản phẩm...');
    
    // Đảm bảo localStorage có cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    // Đảm bảo localStorage có wishlist
    if (!localStorage.getItem('wishlist')) {
        localStorage.setItem('wishlist', JSON.stringify([]));
    }
    
    // Hiển thị chi tiết sản phẩm
    displayProductDetail();
    
    // Thêm CSS nếu chưa có
    addProductDetailStyles();
    
    // Cập nhật số lượng giỏ hàng
    updateCartCount();
});

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const cartBadge = document.getElementById('cart-badge');
        
        if (cartBadge) {
            cartBadge.textContent = totalItems > 99 ? '99+' : totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    } catch (error) {
        console.error('Lỗi khi cập nhật giỏ hàng:', error);
    }
}

// ============================================
// 6. THÊM CSS CHO TRANG CHI TIẾT
// ============================================

function addProductDetailStyles() {
    if (document.querySelector('#product-detail-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'product-detail-styles';
    style.textContent = `
        /* ===== BREADCRUMB ===== */
        .breadcrumb {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 15px 0;
            margin-top: 20px;
            border-bottom: 1px solid #e0e0e0;
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
            font-weight: 500;
        }
        
        .breadcrumb-container a:hover {
            color: #e91e63;
        }
        
        .breadcrumb-container .current {
            color: #e91e63;
            font-weight: 600;
        }
        
        /* ===== MAIN CONTAINER ===== */
        .product-detail-container {
            max-width: 1200px;
            margin: 30px auto;
            padding: 0 20px;
        }
        
        /* ===== PRODUCT CONTENT LAYOUT ===== */
        .product-detail-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            margin-top: 20px;
        }
        
        @media (max-width: 768px) {
            .product-detail-content {
                grid-template-columns: 1fr;
                padding: 20px;
                gap: 30px;
            }
        }
        
        /* ===== IMAGES SECTION ===== */
        .product-images-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .main-image-container {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            height: 400px;
            background: #f9f9f9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .main-image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: transform 0.3s;
        }
        
        .main-image-container:hover img {
            transform: scale(1.02);
        }
        
        .image-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 18px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            z-index: 2;
        }
        
        .image-badge.birthday {
            background: linear-gradient(135deg, #ff4081, #e91e63);
            color: white;
        }
        
        .image-badge.wedding {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        
        .image-badge.normal {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
        }
        
        .thumbnail-gallery {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 10px 0;
        }
        
        .thumbnail {
            min-width: 80px;
            height: 80px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s;
            opacity: 0.7;
        }
        
        .thumbnail:hover {
            opacity: 0.9;
        }
        
        .thumbnail.active {
            border-color: #e91e63;
            opacity: 1;
        }
        
        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* ===== INFO SECTION ===== */
        .product-info-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .product-header {
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .product-title {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
            line-height: 1.3;
        }
        
        .product-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .category-badge {
            background: #f0f0f0;
            color: #666;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 14px;
        }
        
        .rating {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #ff9800;
        }
        
        .rating-text {
            color: #666;
            font-size: 14px;
            margin-left: 5px;
        }
        
        /* ===== PRICE SECTION ===== */
        .product-price-section {
            background: linear-gradient(135deg, #f9f9f9, #f0f0f0);
            padding: 20px;
            border-radius: 10px;
        }
        
        .current-price {
            font-size: 36px;
            color: #e91e63;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .price-details {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }
        
        .original-price {
            text-decoration: line-through;
            color: #999;
            font-size: 18px;
        }
        
        .discount {
            background: #ff4081;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
        }
        
        .installment {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #666;
            font-size: 14px;
        }
        
        /* ===== BASIC INFO ===== */
        .basic-info {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
        }
        
        @media (max-width: 480px) {
            .basic-info {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .info-item i {
            font-size: 24px;
            color: #667eea;
            width: 30px;
        }
        
        .info-label {
            font-size: 12px;
            color: #999;
            text-transform: uppercase;
        }
        
        .info-value {
            font-weight: 600;
            color: #333;
        }
        
        /* ===== QUANTITY SECTION ===== */
        .quantity-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .quantity-section label {
            font-weight: 600;
            color: #333;
        }
        
        .quantity-control {
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 150px;
        }
        
        .quantity-btn {
            width: 40px;
            height: 40px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            font-size: 16px;
            color: #333;
        }
        
        .quantity-btn:hover {
            background: #f5f5f5;
            border-color: #667eea;
            color: #667eea;
        }
        
        #quantity {
            width: 60px;
            height: 40px;
            text-align: center;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            padding: 0;
        }
        
        #quantity:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .stock-info {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #4CAF50;
            font-size: 14px;
        }
        
        /* ===== ACTION BUTTONS ===== */
        .action-buttons {
            display: flex;
            gap: 15px;
            margin: 20px 0;
        }
        
        @media (max-width: 480px) {
            .action-buttons {
                flex-direction: column;
            }
        }
        
        .btn-add-to-cart, .btn-buy-now, .btn-wishlist {
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
            padding: 15px 25px;
        }
        
        .btn-add-to-cart {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            flex: 2;
        }
        
        .btn-add-to-cart:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
        
        .btn-buy-now {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: white;
            flex: 2;
        }
        
        .btn-buy-now:hover {
            background: linear-gradient(135deg, #f5576c, #f093fb);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(245, 87, 108, 0.3);
        }
        
        .btn-wishlist {
            background: #f0f0f0;
            color: #666;
            flex: 1;
            max-width: 60px;
        }
        
        .btn-wishlist:hover {
            background: #e0e0e0;
            transform: translateY(-2px);
        }
        
        /* ===== TAGS ===== */
        .product-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .tag {
            background: #f0f0f0;
            color: #666;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 13px;
        }
        
        /* ===== DESCRIPTION SECTION ===== */
        .product-description-section {
            margin-top: 40px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        
        .section-tabs {
            display: flex;
            background: #f9f9f9;
            border-bottom: 1px solid #eee;
        }
        
        .tab-btn {
            padding: 15px 30px;
            background: none;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: #666;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
        }
        
        .tab-btn:hover {
            color: #667eea;
        }
        
        .tab-btn.active {
            color: #667eea;
        }
        
        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: #667eea;
        }
        
        .tab-content {
            padding: 30px;
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .description-content {
            color: #666;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        
        .description-content p {
            margin-bottom: 15px;
        }
        
        /* ===== FEATURES ===== */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 30px;
        }
        
        @media (max-width: 768px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 480px) {
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .feature {
            text-align: center;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
            transition: transform 0.3s;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .feature i {
            font-size: 32px;
            color: #667eea;
            margin-bottom: 15px;
        }
        
        .feature h4 {
            color: #333;
            margin-bottom: 10px;
            font-size: 16px;
        }
        
        .feature p {
            color: #666;
            font-size: 14px;
            line-height: 1.5;
        }
        
        /* ===== NUTRITION ===== */
        .nutrition-info {
            max-width: 600px;
        }
        
        .nutrition-grid {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 20px 0;
        }
        
        .nutrition-item {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .nutrition-label {
            width: 100px;
            font-weight: 600;
            color: #333;
        }
        
        .nutrition-value {
            width: 80px;
            text-align: right;
            color: #666;
        }
        
        .nutrition-bar {
            flex: 1;
            height: 8px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            border-radius: 4px;
        }
        
        .nutrition-tip {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            color: #1976d2;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        }
        
        /* ===== REVIEWS ===== */
        .reviews-section {
            max-width: 800px;
        }
        
        .average-rating {
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 20px 0 30px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        
        .rating-number {
            font-size: 36px;
            font-weight: bold;
            color: #333;
        }
        
        .rating-stars {
            color: #ff9800;
            font-size: 20px;
        }
        
        .rating-count {
            color: #666;
        }
        
        .review-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .review {
            padding: 20px;
            background: white;
            border: 1px solid #eee;
            border-radius: 10px;
        }
        
        .review-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
        }
        
        .review-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .review-name {
            font-weight: 600;
            color: #333;
        }
        
        .review-date {
            color: #999;
            font-size: 14px;
        }
        
        .review-rating {
            color: #ff9800;
            margin-bottom: 10px;
        }
        
        .review-text {
            color: #666;
            line-height: 1.6;
        }
        
        /* ===== REVIEWS MODAL ===== */
        .reviews-modal .modal-content {
            animation: modalFadeIn 0.3s ease;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .reviews-modal .review-stars-input span:hover {
            transform: scale(1.2);
            transition: transform 0.2s;
        }
        
        .reviews-modal .review-item:hover {
            background: #f9f9f9;
            border-radius: 8px;
            transition: background 0.3s;
        }
        
        /* ===== POLICY ===== */
        .policy-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
        
        .policy-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        
        .policy-item i {
            font-size: 24px;
            color: #667eea;
            margin-top: 5px;
        }
        
        .policy-item h4 {
            color: #333;
            margin-bottom: 10px;
        }
        
        .policy-item p {
            color: #666;
            line-height: 1.6;
        }
        
        /* ===== RELATED PRODUCTS ===== */
        .related-products-section {
            margin-top: 40px;
        }
        
        .related-products-section h2 {
            text-align: left;
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
        }
        
        .related-products {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        
        @media (max-width: 992px) {
            .related-products {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .related-products {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 480px) {
            .related-products {
                grid-template-columns: 1fr;
            }
        }
        
        .related-product {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            cursor: pointer;
            transition: transform 0.3s;
        }
        
        .related-product:hover {
            transform: translateY(-5px);
        }
        
        .related-product img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }
        
        .related-product-info {
            padding: 15px;
        }
        
        .related-product-name {
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .related-product-price {
            color: #e91e63;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .related-product-size {
            color: #666;
            font-size: 13px;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// 7. EXPORT FUNCTIONS TO GLOBAL SCOPE
// ============================================

window.changeProductImage = changeProductImage;
window.changeQuantity = changeQuantity;
window.validateQuantity = validateQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.addToWishlist = addToWishlist;
window.switchTab = switchTab;
window.viewAllReviews = viewAllReviews;
window.viewProduct = viewProduct;
window.formatPrice = formatPrice;
window.rateProduct = rateProduct;
window.submitReview = submitReview;
window.likeReview = likeReview;
window.reportReview = reportReview;
window.closeModal = closeModal;

console.log('product-detail.js đã sẵn sàng!');
