// error-handler.js - Xử lý lỗi toàn cục
console.log('Error handler đang chạy...');

window.addEventListener('error', function(e) {
    const errorInfo = {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        time: new Date().toISOString()
    };
    
    console.error('Lỗi JavaScript:', errorInfo);
    
    try {
        const errors = JSON.parse(localStorage.getItem('js_errors') || '[]');
        errors.unshift(errorInfo);
        if (errors.length > 50) errors.length = 50;
        localStorage.setItem('js_errors', JSON.stringify(errors));
    } catch (storageError) {
        console.error('Không thể lưu lỗi:', storageError);
    }
    
    e.preventDefault();
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise bị từ chối:', e.reason);
});

window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        if (img.naturalWidth === 0) {
            console.warn('Ảnh bị lỗi:', img.src);
            if (!img.hasAttribute('data-error-handled')) {
                img.src = './ảnh/default-flower.jpg';
                img.alt = 'Ảnh không khả dụng';
                img.setAttribute('data-error-handled', 'true');
            }
        }
    });
});

const originalError = console.error;
console.error = function(...args) {
    const message = args[0];
    if (typeof message === 'string') {
        if (message.includes('Failed to load resource') || 
            message.includes('404') ||
            message.includes('net::ERR')) {
            console.warn('Resource không tải được:', args[1]);
            return;
        }
        
        if (message.includes('font')) {
            return;
        }
    }
    
    originalError.apply(console, args);
};

window.debugCart = function() {
    console.log('=== DEBUG GIỎ HÀNG ===');
    console.log('LocalStorage cart:', localStorage.getItem('cart'));
    console.log('cartManager:', window.cartManager);
    console.log('Số lượng sản phẩm:', window.cartManager?.getTotalItems());
    console.log('Tổng tiền:', window.cartManager?.getTotalPrice());
    console.log('========================');
};

window.clearErrors = function() {
    localStorage.removeItem('js_errors');
    console.log('Đã xóa lịch sử lỗi');
};

if (window.location.search.includes('debug')) {
    setTimeout(() => {
        window.debugCart();
    }, 1000);
}

console.log('Error handler đã sẵn sàng');