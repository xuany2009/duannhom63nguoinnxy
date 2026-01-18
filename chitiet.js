const home = document.getElementById("backhome");
home.addEventListener("click", () => {
    window.location.href = "index.html";
});

const dulieunhan = JSON.parse(localStorage.getItem("dulieutrangchu")) || JSON.parse(localStorage.getItem("selectedProduct")) || {
    tendv: "Không có dữ liệu",
    anh: "./ảnh/default-flower.jpg",
    tt1: "Không có mô tả cho sản phẩm này"
};

function hienthichitiet(data) {
    if (!data) {
        document.body.innerHTML = "<p>Không tìm thấy dữ liệu sản phẩm</p>";
        return;
    }

    let chitietcontainer = document.getElementById("noidung");
    if (!chitietcontainer) {
        chitietcontainer = document.createElement("div");
        chitietcontainer.id = "noidung";
        document.body.appendChild(chitietcontainer);
    }
    
    // Format giá nếu có
    let giaDisplay = "";
    if (data.gia) {
        giaDisplay = `<div class="gia">Giá: ${parseInt(data.gia).toLocaleString('vi-VN')} VNĐ</div>`;
    }
    
    chitietcontainer.innerHTML = `
        <div class="product-detail">
            <h1>${data.tendv}</h1>
            <img src="${data.anh}" alt="${data.tendv}" style="width: 100%; max-width: 500px; border-radius: 10px;">
            ${giaDisplay}
            <p>${data.tt1}</p>
            <div id="image-gallery" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;"></div>
        </div>
    `;
}

window.addEventListener('DOMContentLoaded', () => {
    hienthichitiet(dulieunhan);
});