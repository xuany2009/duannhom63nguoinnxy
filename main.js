// main.js - Quản lý hiển thị sản phẩm
console.log('main.js đang chạy...');

// Danh sách sản phẩm
const dshoa1 = [
    {
        id: "hoahong",
        tendv: "Hoa Hồng", 
        anh: "./ảnh/hoadetang/hoahong/hoahong.png",
        tt1: "Hoa hồng có mùi thơm nhẹ và được dùng để tặng trong ngày lễ tình nhân. Màu sắc đa dạng từ đỏ, hồng, trắng, vàng...",
        gia: "350000",
        category: "Hoa Tặng",
        folder: './ảnh/hoadetang/hoahong',
        imgCount: 1,
    },
    {
        id: "huongduong",
        tendv: "Hoa Hướng Dương", 
        anh: "./ảnh/hoadetang/hoahuongduong/huongduong1.jpg",
        tt1: "Biểu tượng của sự lạc quan và hy vọng. Hoa luôn hướng về phía mặt trời, mang năng lượng tích cực.",
        gia: "280000",
        category: "Hoa Tặng",
        folder: './ảnh/hoadetang/hoahuongduong',
        imgCount: 1,
    },
    {
        id: "hoababy",
        tendv: "Hoa Baby", 
        anh: "./ảnh/hoadetang/hoababy/baby1.webp",
        tt1: "Tượng trưng cho tình yêu vĩnh cửu, tinh khiết. Thường dùng làm hoa phụ trong các bó hoa chính.",
        gia: "150000",
        category: "Hoa Tặng",
        folder: './ảnh/hoadetang/hoababy',
        imgCount: 1,
    },
];

const dshoa2 = [
    {
        id: "hoacattuong",
        tendv: "Hoa Cát Tường", 
        anh: "./ảnh/hoanen/hoacattuong/hoacattuong1.jpeg",
        tt1: "Biểu tượng của tình bạn lâu dài và sự biết ơn. Hoa có màu sắc nhẹ nhàng, thanh tao.",
        gia: "320000",
        category: "Hoa Nền",
        folder: './ảnh/hoanen/hoacattuong',
        imgCount: 1,
    },
    {
        id: "thietmoclan",
        tendv: "Thiết Mộc Lan", 
        anh: "./ảnh/hoanen/hoalaphu/thietmoclan.jpg",
        tt1: "Mang biểu tượng của sự thanh cao, sang trọng. Cây dễ trồng, dễ chăm sóc trong nhà.",
        gia: "450000",
        category: "Hoa Nền",
        folder: './ảnh/hoanen/hoalaphu',
        imgCount: 1,
    },
    {
        id: "hoathachthao",
        tendv: "Hoa Thạch Thảo", 
        anh: "./ảnh/hoanen/hoathachthao/hoathachthao1.jpg",
        tt1: "Tượng trưng cho tình yêu vĩnh cửu, sự chung thủy. Hoa nhỏ nhắn nhưng đầy sức sống.",
        gia: "270000",
        category: "Hoa Nền",
        folder: './ảnh/hoanen/hoathachthao',
        imgCount: 1,
    },
];

const dshoa3 = [
    {
        id: "tieucanh",
        tendv: "Bonsai", 
        anh: "./ảnh/hoachau/caytieucanh/tieucanh1.jpg",
        tt1: "Nghệ thuật cây cảnh thu nhỏ, thể hiện sự kiên nhẫn và tinh tế. Mỗi cây là một tác phẩm nghệ thuật.",
        gia: "1200000",
        category: "Hoa Chậu",
        folder: './ảnh/hoachau/caytieucanh',
        imgCount: 1,
    },
    {
        id: "hoalan",
        tendv: "Hoa Lan", 
        anh: "./ảnh/hoachau/hoalan/hoalan.jpg",
        tt1: "Biểu tượng của sự thanh cao, quý phái. Hoa lan có vẻ đẹp tinh tế và lâu tàn.",
        gia: "850000",
        category: "Hoa Chậu",
        folder: './ảnh/hoachau/hoalan',
        imgCount: 1,
    },
    {
        id: "senda",
        tendv: "Sen Đá", 
        anh: "./ảnh/hoachau/senda/senda1.jpg",
        tt1: "Tượng trưng cho tình yêu vĩnh cửu, sự kiên cường. Dễ chăm sóc, phù hợp để bàn làm việc.",
        gia: "180000",
        category: "Hoa Chậu",
        folder: './ảnh/hoachau/senda',
        imgCount: 1,
    },
];

const dshoa4 = [
    {
        id: "camtucau",
        tendv: "Cẩm Tú Cầu", 
        anh: "./ảnh/hoatheomua/hoacamtucau/camtucau1.webp",
        tt1: "Biểu tượng của lòng biết ơn và sự chân thành. Màu sắc hoa thay đổi theo độ pH của đất.",
        gia: "550000",
        category: "Hoa Mùa",
        folder: './ảnh/hoatheomua/hoacamtucau',
        imgCount: 1,
    },
    {
        id: "luuly",
        tendv: "Hoa Lưu Ly", 
        anh: "./ảnh/hoatheomua/hoaluuly/luyly1.png",
        tt1: "Tượng trưng cho tình yêu chung thủy và nỗi nhớ nhung. Màu xanh dịu dàng, thanh thoát.",
        gia: "380000",
        category: "Hoa Mùa",
        folder: './ảnh/hoatheomua/hoaluuly',
        imgCount: 1,
    },
    {
        id: "tulip",
        tendv: "Hoa Tulip", 
        anh: "./ảnh/hoatheomua/hoatulip/tulip1.jpg",
        tt1: "Biểu tượng của tình yêu hoàn hảo và cuộc sống vĩnh cửu. Hoa đặc trưng của Hà Lan.",
        gia: "420000",
        category: "Hoa Mùa",
        folder: './ảnh/hoatheomua/hoatulip',
        imgCount: 1,
    },
];

function createProductCard(product, containerId, cardClass) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        const formattedPrice = formatPrice(product.gia);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh}" alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-flower.jpg'; this.alt='${product.tendv}'">
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv}</div>
                <div class="gia">${formattedPrice} VNĐ</div>
                <button class="add-to-cart-btn" data-id="${product.id}" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
        
        // Click vào card để xem chi tiết
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                console.log('Đã lưu sản phẩm:', product.tendv);
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Click nút thêm vào giỏ hàng
        const addBtn = card.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            try {
                const productData = JSON.parse(this.getAttribute('data-product').replace(/&#39;/g, "'"));
                
                // Kiểm tra đăng nhập trước khi thêm vào giỏ hàng
                const currentUser = localStorage.getItem('currentUser');
                if (!currentUser) {
                    alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1000);
                    return;
                }
                
                if (typeof cartManager !== 'undefined' && cartManager.addToCart) {
                    const success = cartManager.addToCart(productData, 1);
                    if (success) {
                        showNotification(`Đã thêm "${productData.tendv}" vào giỏ hàng!`, 'success');
                        
                        // Thêm hiệu ứng phản hồi
                        this.style.backgroundColor = '#4CAF50';
                        this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                        setTimeout(() => {
                            this.style.backgroundColor = '';
                            this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                        }, 1000);
                    }
                } else {
                    // Fallback nếu cartManager chưa sẵn sàng
                    const cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const existingItem = cart.find(item => item.id === productData.id);
                    
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id: productData.id,
                            name: productData.tendv,
                            image: productData.anh,
                            price: parseInt(productData.gia || 0),
                            quantity: 1,
                            category: productData.category
                        });
                    }
                    
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    showNotification(`Đã thêm "${productData.tendv}" vào giỏ hàng!`, 'success');
                    
                    // Thêm hiệu ứng phản hồi
                    this.style.backgroundColor = '#4CAF50';
                    this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                    setTimeout(() => {
                        this.style.backgroundColor = '';
                        this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                    }, 1000);
                }
            } catch (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
                showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
            }
        });
        
        container.appendChild(card);
        
    } catch (error) {
        console.error(`Lỗi khi tạo card cho ${product.tendv}:`, error);
    }
}

function displayProductList(products, containerId, cardClass) {
    if (!products || !Array.isArray(products)) {
        console.error('Danh sách sản phẩm không hợp lệ:', products);
        return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Không tìm thấy container: ${containerId}`);
        return;
    }
    
    container.innerHTML = '';
    
    products.forEach(product => {
        createProductCard(product, containerId, cardClass);
    });
    
    console.log(`Đã hiển thị ${products.length} sản phẩm trong ${containerId}`);
}

function formatPrice(price) {
    const numPrice = parseInt(price || 0);
    if (isNaN(numPrice)) return '0';
    return numPrice.toLocaleString('vi-VN');
}

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        
        const cartBadges = document.querySelectorAll('#cart-badge, .cart-badge');
        cartBadges.forEach(badge => {
            badge.textContent = totalItems > 99 ? '99+' : totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
        
        console.log('Số lượng giỏ hàng:', totalItems);
        return totalItems;
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
        return 0;
    }
}

function showNotification(message, type = 'success') {
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
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
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
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.style.display = 'none';
            notification.style.animation = '';
        }, 300);
    }, 3000);
}

function addProductCardStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .ten-card1, .ten-card2, .ten-card3, .ten-card4 {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            margin: 15px;
            width: 280px;
        }
        
        .ten-card1:hover, .ten-card2:hover, 
        .ten-card3:hover, .ten-card4:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .product-image {
            height: 200px;
            overflow: hidden;
        }
        
        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .ten-card1:hover .product-image img,
        .ten-card2:hover .product-image img,
        .ten-card3:hover .product-image img,
        .ten-card4:hover .product-image img {
            transform: scale(1.1);
        }
        
        .product-info {
            padding: 20px;
            text-align: center;
        }
        
        .product-info .ten {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .product-info .gia {
            font-size: 16px;
            color: #e91e63;
            font-weight: bold;
            margin-bottom: 15px;
        }
        
        .add-to-cart-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
        }
        
        .add-to-cart-btn:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
            transform: scale(1.05);
        }
        
        .ten-container1, .ten-container2, 
        .ten-container3, .ten-container4 {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px auto;
            max-width: 1200px;
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hiển thị sản phẩm...');
    
    addProductCardStyles();
    
    try {
        displayProductList(dshoa1, "danhsach1", "ten-card1");
        displayProductList(dshoa2, "danhsach2", "ten-card2");
        displayProductList(dshoa3, "danhsach3", "ten-card3");
        displayProductList(dshoa4, "danhsach4", "ten-card4");
        
        console.log('Đã hiển thị tất cả sản phẩm');
    } catch (error) {
        console.error('Lỗi khi hiển thị sản phẩm:', error);
    }
});

window.displayProductList = displayProductList;
window.formatPrice = formatPrice;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;





// Thêm vào main.js hoặc tạo file mới
document.addEventListener('DOMContentLoaded', function() {
    // Tạo nút cuộn lên nếu chưa có
    if (!document.getElementById('scrollToTop')) {
        const scrollToTopBtn = document.createElement('div');
        scrollToTopBtn.id = 'scrollToTop';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.title = 'Lên đầu trang';
        scrollToTopBtn.innerHTML = '<img src="./ảnh/angle-down.png" alt="Lên đầu trang" style="transform: rotate(180deg);">';
        document.body.appendChild(scrollToTopBtn);
    }
    
    // Lấy các phần tử
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Xử lý sự kiện cuộn
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Sự kiện click để cuộn lên đầu trang
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Sự kiện click để cuộn xuống phần sản phẩm từ banner
    const toBottomElement = document.querySelector('.to-bottom');
    if (toBottomElement) {
        toBottomElement.addEventListener('click', function(e) {
            e.preventDefault();
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});