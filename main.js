// main.js - Quản lý hiển thị sản phẩm BÁNH KEM
console.log('main.js đang chạy...');

// Danh sách bánh kem SINH NHẬT (15 sản phẩm)
const dsbanh1 = [
    {
        id: "banhsinhnhat1",
        tendv: "Bánh Sinh Nhật Dâu Tây Tươi", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Dâu Tây Tươi.jpg",
        tt1: "Bánh bông lan tươi với lớp kem phô mai và dâu tây tươi. Trọng lượng: 1kg, phục vụ 6-8 người.",
        gia: "450000",
        category: "Bánh Kem Sinh Nhật",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat2",
        tendv: "Bánh Sinh Nhật Socola Đậm Đà", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Socola Đậm Đà.webp",
        tt1: "Bánh socola nguyên chất với ganache socola đen. Trọng lượng: 1.5kg, phục vụ 8-10 người.",
        gia: "675000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "banhsinhnhat3",
        tendv: "Bánh Sinh Nhật Trái Cây Nhiệt Đới", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Trái Cây Nhiệt Đới.jpg",
        tt1: "Bánh vani với xoài, kiwi, dâu và kem chantilly. Trọng lượng: 2kg, phục vụ 10-12 người.",
        gia: "900000",
        category: "Bánh Kem Sinh Nhật",
        size: "2kg",
        serves: "10-12 người"
    },
    {
        id: "banhsinhnhat4",
        tendv: "Bánh Sinh Nhật Matcha Nhật Bản", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Matcha Nhật Bản.jpg",
        tt1: "Bánh matcha với đậu đỏ và kem matcha nguyên chất. Trọng lượng: 1kg, phục vụ 6-8 người.",
        gia: "550000",
        category: "Bánh Kem Sinh Nhật",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat5",
        tendv: "Bánh Sinh Nhật Tiramisu Ý", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Tiramisu Ý.webp",
        tt1: "Bánh tiramisu truyền thống với cà phê espresso và mascarpone. Trọng lượng: 1.5kg.",
        gia: "720000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "banhsinhnhat6",
        tendv: "Bánh Sinh Nhật Oreo Cream", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Oreo Cream.jpeg",
        tt1: "Bánh socola với kem oreo và bánh oreo vụn. Trọng lượng: 1.2kg, phục vụ 6-8 người.",
        gia: "540000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.2kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat7",
        tendv: "Bánh Sinh Nhật Caramel Macchiato", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Caramel Macchiato.png",
        tt1: "Bánh cà phê với sốt caramel và lớp kem bơ. Trọng lượng: 1.8kg, phục vụ 10-12 người.",
        gia: "810000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.8kg",
        serves: "10-12 người"
    },
    {
        id: "banhsinhnhat8",
        tendv: "Bánh Sinh Nhật Phô Mai New York", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Phô Mai New York.jpeg",
        tt1: "Bánh phô mai nướng kiểu New York với lớp vỏ bánh quy. Trọng lượng: 1.5kg.",
        gia: "750000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "banhsinhnhat9",
        tendv: "Bánh Sinh Nhật Hạnh Nhân Mật Ong", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Hạnh Nhân Mật Ong.jpg",
        tt1: "Bánh hạnh nhân với mật ong và kem hạnh nhân. Trọng lượng: 1kg, phục vụ 6-8 người.",
        gia: "600000",
        category: "Bánh Kem Sinh Nhật",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat10",
        tendv: "Bánh Sinh Nhật 3 Tầng Hỗn Hợp", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật 3 Tầng Hỗn Hợp.jpg",
        tt1: "Bánh 3 tầng với các vị khác nhau. Tổng trọng lượng: 3kg, phục vụ 20-25 người.",
        gia: "1800000",
        category: "Bánh Kem Sinh Nhật",
        size: "3kg",
        serves: "20-25 người"
    },
    {
        id: "banhsinhnhat11",
        tendv: "Bánh Sinh Nhật Red Velvet", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Red Velvet.webp",
        tt1: "Bánh red velvet với kem cheese và quả mâm xôi. Trọng lượng: 1.2kg, phục phụ 6-8 người.",
        gia: "660000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.2kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat12",
        tendv: "Bánh Sinh Nhật Mango Cheese", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Mango Cheese.jpg",
        tt1: "Bánh phô mai xoài với xoài tươi và sốt xoài. Trọng lượng: 1.5kg, phục vụ 8-10 người.",
        gia: "825000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "banhsinhnhat13",
        tendv: "Bánh Sinh Nhật Dừa Nhiệt Đới", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Dừa Nhiệt Đới.jpg",
        tt1: "Bánh dừa với kem dừa và cơm dừa nạo. Trọng lượng: 1kg, phục vụ 6-8 người.",
        gia: "480000",
        category: "Bánh Kem Sinh Nhật",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat14",
        tendv: "Bánh Sinh Nhật Mè Đen", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Mè Đen.jpg",
        tt1: "Bánh mè đen với kem mè đen và hạt mè rang. Trọng lượng: 1kg, phục vụ 6-8 người.",
        gia: "520000",
        category: "Bánh Kem Sinh Nhật",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "banhsinhnhat15",
        tendv: "Bánh Sinh Nhật Trà Xanh Đậu Đỏ", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Sinh Nhật Trà Xanh Đậu Đỏ.jpg",
        tt1: "Bánh trà xanh với nhân đậu đỏ và kem trà xanh. Trọng lượng: 1.2kg, phục vụ 6-8 người.",
        gia: "576000",
        category: "Bánh Kem Sinh Nhật",
        size: "1.2kg",
        serves: "6-8 người"
    }
];

// Danh sách bánh kem CƯỚI (10 sản phẩm)
const dsbanh2 = [
    {
        id: "banhcuoi1",
        tendv: "Bánh Cưới Tầng Trắng Cổ Điển", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Tầng Trắng Cổ Điển.webp",
        tt1: "Bánh cưới 3 tầng màu trắng với hoa đường tinh xảo. Tổng trọng lượng: 5kg.",
        gia: "3000000",
        category: "Bánh Kem Cưới",
        size: "5kg",
        serves: "50-60 người"
    },
    {
        id: "banhcuoi2",
        tendv: "Bánh Cưới Tầng Hoa Hồng Đỏ", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Tầng Hoa Hồng Đỏ.jpg",
        tt1: "Bánh cưới 4 tầng với hoa hồng đỏ thật. Tổng trọng lượng: 7kg.",
        gia: "4200000",
        category: "Bánh Kem Cưới",
        size: "7kg",
        serves: "70-80 người"
    },
    {
        id: "banhcuoi3",
        tendv: "Bánh Cưới Hiện Đại Hoa Cưới", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Hiện Đại Hoa Cưới.jpg",
        tt1: "Bánh cưới 2 tầng thiết kế hiện đại với hoa cưới tươi. Trọng lượng: 3kg.",
        gia: "1800000",
        category: "Bánh Kem Cưới",
        size: "3kg",
        serves: "30-35 người"
    },
    {
        id: "banhcuoi4",
        tendv: "Bánh Cưới Vintage Hoa Lavender", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Vintage Hoa Lavender.jpg",
        tt1: "Bánh cưới phong cách vintage với hoa lavender. Trọng lượng: 4kg.",
        gia: "2400000",
        category: "Bánh Kem Cưới",
        size: "4kg",
        serves: "40-45 người"
    },
    {
        id: "banhcuoi5",
        tendv: "Bánh Cưới Minimalist Đơn Giản", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Minimalist Đơn Giản.jpg",
        tt1: "Bánh cưới phong cách tối giản, thanh lịch. Trọng lượng: 2.5kg.",
        gia: "1500000",
        category: "Bánh Kem Cưới",
        size: "2.5kg",
        serves: "25-30 người"
    },
    {
        id: "banhcuoi6",
        tendv: "Bánh Cưới Luxury Vàng Trắng", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Luxury Vàng Trắng.jpg",
        tt1: "Bánh cưới sang trọng với chi tiết vàng lá. Trọng lượng: 6kg.",
        gia: "3600000",
        category: "Bánh Kem Cưới",
        size: "6kg",
        serves: "60-70 người"
    },
    {
        id: "banhcuoi7",
        tendv: "Bánh Cưới Rustic Thiên Nhiên", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Rustic Thiên Nhiên.jpg",
        tt1: "Bánh cưới phong cách rustic với hoa khô. Trọng lượng: 3.5kg.",
        gia: "2100000",
        category: "Bánh Kem Cưới",
        size: "3.5kg",
        serves: "35-40 người"
    },
    {
        id: "banhcuoi8",
        tendv: "Bánh Cưới Hoa Cẩm Tú Cầu", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Hoa Cẩm Tú Cầu.webp",
        tt1: "Bánh cưới với hoa cẩm tú cầu tinh xảo. Trọng lượng: 4.5kg.",
        gia: "2700000",
        category: "Bánh Kem Cưới",
        size: "4.5kg",
        serves: "45-50 người"
    },
    {
        id: "banhcuoi9",
        tendv: "Bánh Cưới Royal Cao Cấp", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Royal Cao Cấp.jpg",
        tt1: "Bánh cưới 5 tầng cao cấp phong cách hoàng gia. Trọng lượng: 8kg.",
        gia: "4800000",
        category: "Bánh Kem Cưới",
        size: "8kg",
        serves: "80-100 người"
    },
    {
        id: "banhcuoi10",
        tendv: "Bánh Cưới Modern Geometric", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Cưới Modern Geometric.jpg",
        tt1: "Bánh cưới thiết kế hình học hiện đại. Trọng lượng: 3kg.",
        gia: "1800000",
        category: "Bánh Kem Cưới",
        size: "3kg",
        serves: "30-35 người"
    }
];

// Danh sách bánh CUPCAKE (12 sản phẩm)
const dsbanh3 = [
    {
        id: "cupcake1",
        tendv: "Cupcake Vanilla Bean", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Vanilla Bean.jpg",
        tt1: "Cupcake vani nguyên chất với hạt vani Madagascar. Set 6 cái.",
        gia: "240000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake2",
        tendv: "Cupcake Red Velvet", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Red Velvet.jpg",
        tt1: "Cupcake red velvet với kem cheese và quả mâm xôi. Set 6 cái.",
        gia: "270000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake3",
        tendv: "Cupcake Socola Đắng", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Socola Đắng.jpg",
        tt1: "Cupcake socola đen 70% với ganache socola. Set 6 cái.",
        gia: "255000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake4",
        tendv: "Cupcake Matcha Đậu Đỏ", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Matcha Đậu Đỏ.jpg",
        tt1: "Cupcake matcha với nhân đậu đỏ và kem matcha. Set 6 cái.",
        gia: "285000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake5",
        tendv: "Cupcake Carrot Cake", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Carrot Cake.jpg",
        tt1: "Cupcake bánh cà rốt với kem cheese và quả óc chó. Set 6 cái.",
        gia: "240000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake6",
        tendv: "Cupcake Lemon Curd", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Lemon Curd.jpg",
        tt1: "Cupcake chanh với nhân curd chanh và kem bơ. Set 6 cái.",
        gia: "225000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake7",
        tendv: "Cupcake Salted Caramel", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Salted Caramel.webp",
        tt1: "Cupcake caramel muối với sốt caramel tự làm. Set 6 cái.",
        gia: "270000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake8",
        tendv: "Cupcake Peanut Butter", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Peanut Butter.jpg",
        tt1: "Cupcake bơ đậu phộng với mứt dâu và kem bơ đậu phộng. Set 6 cái.",
        gia: "255000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake9",
        tendv: "Cupcake Tiramisu", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Tiramisu.jpeg",
        tt1: "Cupcake tiramisu với cà phê espresso và mascarpone. Set 6 cái.",
        gia: "300000",
        category: "Bánh Cupcake",
        size: "Set 6 cái",
        serves: "3-4 người"
    },
    {
        id: "cupcake10",
        tendv: "Cupcake Birthday Party Set", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Birthday Party Set.jpg",
        tt1: "Set 24 cupcake đủ loại cho tiệc sinh nhật. Đầy đủ các vị.",
        gia: "960000",
        category: "Bánh Cupcake",
        size: "Set 24 cái",
        serves: "12-15 người"
    },
    {
        id: "cupcake11",
        tendv: "Cupcake Wedding Mini", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Wedding Mini.jpg",
        tt1: "Set 36 cupcake mini cho đám cưới. Trang trí tinh xảo.",
        gia: "1440000",
        category: "Bánh Cupcake",
        size: "Set 36 cái",
        serves: "30-35 người"
    },
    {
        id: "cupcake12",
        tendv: "Cupcake Mixed Assortment", 
        anh: "./ảnh/hoadetang/hoahong/Cupcake Mixed Assortment.webp",
        tt1: "Set 12 cupcake hỗn hợp 4 vị khác nhau. Phù hợp quà tặng.",
        gia: "480000",
        category: "Bánh Cupcake",
        size: "Set 12 cái",
        serves: "6-8 người"
    }
];

// Danh sách bánh MOUSSE & ĐẶC BIỆT (10 sản phẩm)
const dsbanh4 = [
    {
        id: "mousse1",
        tendv: "Bánh Mousse Xoài Nhiệt Đới", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Mousse Xoài Nhiệt Đới.jpg",
        tt1: "Bánh mousse xoài với lớp xoài tươi và đế bánh bông lan. Trọng lượng: 1kg.",
        gia: "550000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "mousse2",
        tendv: "Bánh Mousse Dâu Tây", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Mousse Dâu Tây.webp",
        tt1: "Bánh mousse dâu tây với dâu tây tươi và lớp thạch dâu. Trọng lượng: 1kg.",
        gia: "520000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "mousse3",
        tendv: "Bánh Mousse Matcha", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Mousse Matcha.jpg",
        tt1: "Bánh mousse matcha với đậu đỏ và lớp matcha nguyên chất. Trọng lượng: 1.2kg.",
        gia: "660000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1.2kg",
        serves: "8-10 người"
    },
    {
        id: "mousse4",
        tendv: "Bánh Mousse Socola", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Mousse Socola.jpg",
        tt1: "Bánh mousse socola đen với lớp ganache socola. Trọng lượng: 1kg.",
        gia: "580000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "cheesecake1",
        tendv: "New York Cheesecake", 
        anh: "./ảnh/hoadetang/hoahong/New York Cheesecake.jpg",
        tt1: "Bánh cheesecake New York nướng truyền thống. Trọng lượng: 1.5kg.",
        gia: "750000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "cheesecake2",
        tendv: "Japanese Cotton Cheesecake", 
        anh: "./ảnh/hoadetang/hoahong/Japanese Cotton Cheesecake.jpg",
        tt1: "Bánh cheesecake Nhật Bản mềm như bông. Trọng lượng: 1kg.",
        gia: "600000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người"
    },
    {
        id: "special1",
        tendv: "Bánh Opera Pháp", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Opera Pháp.jpg",
        tt1: "Bánh Opera truyền thống Pháp với cà phê và socola. Trọng lượng: 1.2kg.",
        gia: "720000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1.2kg",
        serves: "8-10 người"
    },
    {
        id: "special2",
        tendv: "Bánh Black Forest Đức", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Black Forest Đức.jpg",
        tt1: "Bánh Black Forest truyền thống với anh đào và kem tươi. Trọng lượng: 1.5kg.",
        gia: "675000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1.5kg",
        serves: "8-10 người"
    },
    {
        id: "special3",
        tendv: "Bánh Molten Lava Cake", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Molten Lava Cake.webp",
        tt1: "Bánh lava cake với nhân socola chảy ra khi cắt. Set 4 cái.",
        gia: "320000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "Set 4 cái",
        serves: "4 người"
    },
    {
        id: "special4",
        tendv: "Bánh Crepe Cake", 
        anh: "./ảnh/hoadetang/hoahong/Bánh Crepe Cake.jpg",
        tt1: "Bánh crepe 20 lớp với kem matcha hoặc socola. Trọng lượng: 1kg.",
        gia: "650000",
        category: "Bánh Mousse & Đặc Biệt",
        size: "1kg",
        serves: "6-8 người"
    }
];

// Danh sách COMBO & SET QUÀ TẶNG (8 sản phẩm)
const dsbanh5 = [
    {
        id: "combo1",
        tendv: "Combo Sinh Nhật Gia Đình", 
        anh: "./ảnh/hoadetang/hoahong/Combo Sinh Nhật Gia Đình.jpg",
        tt1: "Bánh sinh nhật 1.5kg + 6 cupcake + nến số + hộp quà. Phục vụ 10-12 người.",
        gia: "1200000",
        category: "Combo & Set Quà Tặng",
        size: "Combo đầy đủ",
        serves: "10-12 người"
    },
   
    {
        id: "combo3",
        tendv: "Combo Valentine Lãng Mạn", 
        anh: "./ảnh/hoadetang/hoahong/Cách tổ chức buổi tiệc Valentine lãng mạn cho nàng.jpg",
        tt1: "Bánh tim 1kg + 2 cupcake trái tim + hoa hồng + hộp quà đặc biệt.",
        gia: "9500000",
        category: "Combo & Set Quà Tặng",
        size: "Combo Valentine",
        serves: "2-4 người"
    },
    {
        id: "combo4",
        tendv: "Combo Doanh Nghiệp 30 Người", 
        anh: "./ảnh/hoadetang/hoahong/Combo Doanh Nghiệp 30 Người.webp",
        tt1: "Bánh lớn 3kg + 24 cupcake + dịch vụ setup + thiệp cảm ơn.",
        gia: "2800000",
        category: "Combo & Set Quà Tặng",
        size: "Combo doanh nghiệp",
        serves: "30 người"
    },
 
    {
        id: "combo7",
        tendv: "Combo Healthy Low Sugar", 
        anh: "./ảnh/hoadetang/hoahong/Combo Healthy Low Sugar.webp",
        tt1: "Bánh ít đường 1kg + trà thảo mộc + hộp gỗ. Dành cho người ăn kiêng.",
        gia: "900000",
        category: "Combo & Set Quà Tặng",
        size: "Combo healthy",
        serves: "6-8 người"
    },
  
];

function createProductCard(product, containerId, cardClass) {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Không tìm thấy container: ${containerId}`);
            return;
        }
        
        if (!product || !product.id) {
            console.error('Dữ liệu sản phẩm không hợp lệ:', product);
            return;
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                <div class="gia">${formattedPrice} VNĐ</div>
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Click vào card để xem chi tiết
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Click nút thêm vào giỏ hàng
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    const currentUser = localStorage.getItem('currentUser');
                    if (!currentUser) {
                        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 1000);
                        return;
                    }
                    
                    if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
                        const success = window.cartManager.addToCart(product, 1);
                        if (success) {
                            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                            
                            this.style.backgroundColor = '#4CAF50';
                            this.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                                this.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                            }, 1000);
                        }
                    } else {
                        const cart = JSON.parse(localStorage.getItem('cart')) || [];
                        const existingItem = cart.find(item => item.id === product.id);
                        
                        if (existingItem) {
                            existingItem.quantity += 1;
                        } else {
                            cart.push({
                                id: product.id,
                                name: product.tendv,
                                image: product.anh || './ảnh/default-cake.jpg',
                                price: parseInt(product.gia || 0),
                                quantity: 1,
                                category: product.category || 'Không phân loại'
                            });
                        }
                        
                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartCount();
                        showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                        
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
        }
        
        // Click nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        container.appendChild(card);
        
    } catch (error) {
        console.error(`Lỗi khi tạo card cho sản phẩm:`, error);
    }
}

function formatPriceFallback(price) {
    try {
        return parseInt(price || 0).toLocaleString('vi-VN');
    } catch (e) {
        return '0';
    }
}

function displayProductList(products, containerId, cardClass) {
    try {
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
        
        // CHỈ HIỂN THỊ 9 SẢN PHẨM ĐẦU TIÊN
        const limitedProducts = products.slice(0, 9);
        
        limitedProducts.forEach(product => {
            createProductCard(product, containerId, cardClass);
        });
        
        console.log(`Đã hiển thị ${limitedProducts.length} sản phẩm trong ${containerId}`);
    } catch (error) {
        console.error('Lỗi khi hiển thị danh sách sản phẩm:', error);
    }
}

function updateCartCount() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 0), 0);
        
        document.querySelectorAll('#cart-badge, .cart-badge').forEach(badge => {
            if (badge) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = totalItems > 0 ? 'flex' : 'none';
            }
        });
        
        return totalItems;
    } catch (error) {
        console.error('Lỗi khi cập nhật số lượng giỏ hàng:', error);
        return 0;
    }
}

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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hiển thị sản phẩm bánh kem...');
    
    try {
        // CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI DANH MỤC
        displayProductList(dsbanh1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(dsbanh2.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(dsbanh3.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(dsbanh4.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(dsbanh5.slice(0, 9), "danhsach5", "ten-card5");
        
        console.log('Đã hiển thị tất cả sản phẩm bánh kem (9 sản phẩm mỗi danh mục)');
    } catch (error) {
        console.error('Lỗi khi hiển thị sản phẩm:', error);
    }
});

window.displayProductList = displayProductList;
window.updateCartCount = updateCartCount;
window.showNotification = showNotification;

// ============================================
// HỆ THỐNG PHÂN TRANG VÀ LỌC SẢN PHẨM
// ============================================

// Cấu hình phân trang - CHỈ HIỂN THỊ 9 SẢN PHẨM MỖI TRANG
const PRODUCTS_PER_PAGE = 9;

// Hợp nhất tất cả sản phẩm
const ALL_PRODUCTS = [
    ...dsbanh1.map(p => ({...p, type: 'birthday'})),
    ...dsbanh2.map(p => ({...p, type: 'wedding'})),
    ...dsbanh3.map(p => ({...p, type: 'cupcake'})),
    ...dsbanh4.map(p => ({...p, type: 'mousse'})),
    ...dsbanh5.map(p => ({...p, type: 'combo'}))
];

// Biến toàn cục
let currentCategory = 'all';
let currentPage = 1;
let filteredProducts = [...ALL_PRODUCTS];

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Cập nhật active state cho danh mục
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.onclick && item.onclick.toString().includes(`'${category}'`)) {
            item.classList.add('active');
        }
    });
    
    // Lọc sản phẩm
    if (category === 'all') {
        filteredProducts = [...ALL_PRODUCTS];
        document.getElementById('category-title').textContent = 'TẤT CẢ SẢN PHẨM';
        document.getElementById('category-description').textContent = 'Khám phá những chiếc bánh kem thơm ngon, tươi mới';
    } else if (category === 'birthday') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'birthday');
        document.getElementById('category-title').textContent = 'BÁNH KEM SINH NHẬT';
        document.getElementById('category-description').textContent = 'Những chiếc bánh sinh nhật đẹp mắt, ngọt ngào cho ngày đặc biệt';
    } else if (category === 'wedding') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'wedding');
        document.getElementById('category-title').textContent = 'BÁNH KEM CƯỚI';
        document.getElementById('category-description').textContent = 'Bánh cưới sang trọng, tinh tế cho ngày trọng đại';
    } else if (category === 'cupcake') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'cupcake');
        document.getElementById('category-title').textContent = 'BÁNH CUPCAKE';
        document.getElementById('category-description').textContent = 'Những chiếc cupcake xinh xắn, thơm ngon';
    } else if (category === 'mousse') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'mousse');
        document.getElementById('category-title').textContent = 'BÁNH MOUSSE & ĐẶC BIỆT';
        document.getElementById('category-description').textContent = 'Bánh mousse mềm mịn, thanh mát';
    } else if (category === 'combo') {
        filteredProducts = ALL_PRODUCTS.filter(p => p.type === 'combo');
        document.getElementById('category-title').textContent = 'COMBO & SET QUÀ TẶNG';
        document.getElementById('category-description').textContent = 'Combo tiết kiệm, set quà tặng ý nghĩa';
    } else if (category === 'sale') {
        // Sản phẩm giảm giá (demo)
        filteredProducts = ALL_PRODUCTS.slice(0, 15).map(p => ({
            ...p,
            originalPrice: parseInt(p.gia) * 1.2
        }));
        document.getElementById('category-title').textContent = 'SẢN PHẨM KHUYẾN MÃI';
        document.getElementById('category-description').textContent = 'Những ưu đãi hấp dẫn đang chờ bạn';
    } else if (category === 'new') {
        // Sản phẩm mới (demo - lấy 10 sản phẩm đầu)
        filteredProducts = ALL_PRODUCTS.slice(0, 10);
        document.getElementById('category-title').textContent = 'SẢN PHẨM MỚI';
        document.getElementById('category-description').textContent = 'Những sản phẩm mới nhất của tiệm bánh';
    }
    
    // Hiển thị sản phẩm
    renderProducts();
    renderPagination();


const productsContainer = document.querySelector('.products-main-content');
    if (productsContainer) {
        productsContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Hàm hiển thị sản phẩm
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${product.tendv || 'Sản phẩm không tên'}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy sản phẩm</h3>
                <p style="color: #999;">Hiện không có sản phẩm nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm hiển thị phân trang
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    
    // Nếu chỉ có 1 trang thì ẩn phân trang
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Nút Previous
    html += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Các trang số
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    // Nút Next
    html += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    // Thông tin phân trang
    const startItem = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
    const endItem = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length);
    
    html += `
        <div class="pagination-info">
            Hiển thị ${startItem}-${endItem} của ${filteredProducts.length} sản phẩm
        </div>
    `;
    
    pagination.innerHTML = html;
}

// Hàm chuyển trang
function changePage(page) {
    if (page < 1 || page > Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)) {
        return;
    }
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Cuộn lên đầu phần sản phẩm
    document.querySelector('.products-main-content').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Hàm lấy class card theo loại
function getCardClassByType(type) {
    switch(type) {
        case 'birthday': return 'ten-card1';
        case 'wedding': return 'ten-card2';
        case 'cupcake': return 'ten-card3';
        case 'mousse': return 'ten-card4';
        case 'combo': return 'ten-card5';
        default: return 'ten-card1';
    }
}

// Hàm xử lý thêm vào giỏ hàng
function handleAddToCart(product, button) {
    try {
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
            alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
            return;
        }
        
        if (window.cartManager && typeof window.cartManager.addToCart === 'function') {
            const success = window.cartManager.addToCart(product, 1);
            if (success) {
                showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
                
                button.style.backgroundColor = '#4CAF50';
                button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
                setTimeout(() => {
                    button.style.backgroundColor = '';
                    button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
                }, 1000);
            }
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.tendv,
                    image: product.anh || './ảnh/default-cake.jpg',
                    price: parseInt(product.gia || 0),
                    quantity: 1,
                    category: product.category || 'Không phân loại',
                    type: product.type || 'unknown'
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`Đã thêm "${product.tendv}" vào giỏ hàng!`, 'success');
            
            button.style.backgroundColor = '#4CAF50';
            button.innerHTML = '<i class="fas fa-check"></i> Đã thêm';
            setTimeout(() => {
                button.style.backgroundColor = '';
                button.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm vào giỏ';
            }, 1000);
        }
    } catch (error) {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        showNotification('Không thể thêm sản phẩm vào giỏ hàng', 'error');
    }
}

// Hàm khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo hệ thống phân trang và lọc sản phẩm...');
    
    // Kiểm tra xem đã có phần hiển thị sản phẩm mới chưa
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        // Ẩn các phần hiển thị sản phẩm cũ
        document.querySelectorAll('.ten-container1, .ten-container2, .ten-container3, .ten-container4, .ten-container5').forEach(container => {
            container.style.display = 'none';
        });
        
        document.querySelectorAll('#products, h2:nth-of-type(2), h2:nth-of-type(3), h2:nth-of-type(4), h2:nth-of-type(5)').forEach(el => {
            el.style.display = 'none';
        });
        
        // Khởi tạo hiển thị sản phẩm
        filterProducts('all');
    } else {
        // Nếu không có phần hiển thị mới, dùng hệ thống cũ
        console.log('Sử dụng hệ thống hiển thị sản phẩm cũ...');
        displayProductList(dsbanh1.slice(0, 9), "danhsach1", "ten-card1");
        displayProductList(dsbanh2.slice(0, 9), "danhsach2", "ten-card2");
        displayProductList(dsbanh3.slice(0, 9), "danhsach3", "ten-card3");
        displayProductList(dsbanh4.slice(0, 9), "danhsach4", "ten-card4");
        displayProductList(dsbanh5.slice(0, 9), "danhsach5", "ten-card5");
    }
});

// Thêm CSS cho giá sale
const style = document.createElement('style');
style.textContent = `
    .sale-price {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .sale-price .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 16px;
    }
    
    .sale-price .current-price {
        color: #e91e63;
        font-size: 22px;
        font-weight: bold;
    }
    
    .sale-price .discount-badge {
        background: #e91e63;
        color: white;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        display: inline-block;
        margin-top: 5px;
    }
    
    .product-image {
        position: relative;
    }
    
    .sale-tag, .new-tag {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #e91e63;
        color: white;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
        z-index: 2;
    }
    
    .new-tag {
        background: #4CAF50;
    }
`;
document.head.appendChild(style);

// Export functions to global scope
window.filterProducts = filterProducts;
window.changePage = changePage;
window.handleAddToCart = handleAddToCart;

// ============================================
// HỆ THỐNG TÌM KIẾM SẢN PHẨM
// ============================================

let isSearching = false;
let searchResults = [];
let searchQuery = '';

// Hàm tìm kiếm sản phẩm
function searchProducts(event) {
    if (event.key === 'Enter') {
        performSearch();
        return;
    }
    
    // Tự động tìm kiếm sau 500ms ngừng gõ
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
}

// Thực hiện tìm kiếm
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.trim().toLowerCase();
    
    if (searchQuery.length === 0) {
        // Nếu ô tìm kiếm trống, hiển thị lại danh mục hiện tại
        isSearching = false;
        document.getElementById('search-results-header').style.display = 'none';
        filterProducts(currentCategory);
        return;
    }
    
    isSearching = true;
    
    // Tìm kiếm trong tất cả sản phẩm
    searchResults = ALL_PRODUCTS.filter(product => {
        const searchFields = [
            product.tendv || '',
            product.category || '',
            product.tt1 || '',
            product.flavor || '',
            product.size || '',
            product.serves || '',
            ...(product.tags || [])
        ].join(' ').toLowerCase();
        
        return searchFields.includes(searchQuery);
    });
    
    // Hiển thị kết quả tìm kiếm
    displaySearchResults();
}

// Hiển thị kết quả tìm kiếm
function displaySearchResults() {
    const resultsHeader = document.getElementById('search-results-header');
    const resultsCount = document.getElementById('search-results-count');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    
    if (searchResults.length === 0) {
        // Không tìm thấy kết quả
        const grid = document.getElementById('products-grid');
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Không tìm thấy sản phẩm nào phù hợp với từ khóa "<strong>${searchQuery}</strong>"</p>
                <button class="promo-btn" onclick="clearSearch()" style="max-width: 200px; margin: 0 auto;">
                    <i class="fas fa-times"></i> Xóa tìm kiếm
                </button>
            </div>
        `;
        
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy 0 sản phẩm cho "${searchQuery}"`;
        document.getElementById('pagination').innerHTML = '';
        
    } else {
        // Có kết quả tìm kiếm
        resultsHeader.style.display = 'block';
        resultsCount.textContent = `Tìm thấy ${searchResults.length} sản phẩm cho "${searchQuery}"`;
        
        categoryTitle.textContent = 'KẾT QUẢ TÌM KIẾM';
        categoryDescription.textContent = `Tìm kiếm: "${searchQuery}"`;
        
        // Hiển thị sản phẩm tìm được
        filteredProducts = searchResults;
        currentPage = 1;
        renderProducts();
        renderPagination();
    }
}

// Xóa tìm kiếm
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    isSearching = false;
    searchQuery = '';
    searchResults = [];
    
    document.getElementById('search-results-header').style.display = 'none';
    
    // Quay lại danh mục hiện tại
    filterProducts(currentCategory);
}

// Cập nhật hàm filterProducts để xử lý khi đang tìm kiếm
const originalFilterProducts = window.filterProducts;
window.filterProducts = function(category) {
    // Nếu đang tìm kiếm, xóa tìm kiếm trước
    if (isSearching) {
        clearSearch();
    }
    
    // Gọi hàm filterProducts gốc
    originalFilterProducts(category);
};

// Cập nhật hàm renderProducts để hỗ trợ highlight từ khóa
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    // Tính toán sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Xóa nội dung cũ
    grid.innerHTML = '';
    
    // Hiển thị sản phẩm
    productsToShow.forEach(product => {
        const cardClass = getCardClassByType(product.type);
        const formattedPrice = window.formatPrice ? window.formatPrice(product.gia) : formatPriceFallback(product.gia);
        
        // Highlight từ khóa tìm kiếm nếu đang tìm kiếm
        let productName = product.tendv || 'Sản phẩm không tên';
        if (isSearching && searchQuery) {
            productName = highlightSearchText(productName, searchQuery);
        }
        
        const card = document.createElement("div");
        card.className = cardClass;
        
        // Kiểm tra nếu có giá gốc (sale)
        let priceHTML = `<div class="gia">${formattedPrice} VNĐ</div>`;
        if (product.originalPrice) {
            const originalFormatted = window.formatPrice ? 
                window.formatPrice(product.originalPrice) : 
                formatPriceFallback(product.originalPrice);
            priceHTML = `
                <div class="gia sale-price">
                    <span class="original-price">${originalFormatted} VNĐ</span>
                    <span class="current-price">${formattedPrice} VNĐ</span>
                    <span class="discount-badge">-20%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.anh || './ảnh/default-cake.jpg'}" 
                     alt="${product.tendv}" 
                     onerror="this.onerror=null; this.src='./ảnh/default-cake.jpg';">
                ${product.originalPrice ? '<div class="sale-tag">Sale</div>' : ''}
                ${currentCategory === 'new' ? '<div class="new-tag">Mới</div>' : ''}
            </div>
            <div class="product-info">
                <div class="ten">${productName}</div>
                <div class="product-details">
                    <span class="size"><i class="fas fa-weight"></i> ${product.size || '1kg'}</span>
                    <span class="serves"><i class="fas fa-users"></i> ${product.serves || '6-8 người'}</span>
                </div>
                ${priceHTML}
                <div class="action-buttons">
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                    <button class="view-detail-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </div>
            </div>
        `;
        
        // Thêm sự kiện click (giữ nguyên từ code cũ)
        card.addEventListener("click", (e) => {
            if (e.target.closest('.add-to-cart-btn') || e.target.closest('.view-detail-btn')) {
                return;
            }
            
            try {
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html";
            } catch (error) {
                console.error('Lỗi khi lưu sản phẩm:', error);
                alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
            }
        });
        
        // Sự kiện cho nút thêm vào giỏ (giữ nguyên)
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                handleAddToCart(product, this);
            });
        }
        
        // Sự kiện cho nút xem chi tiết (giữ nguyên)
        const viewBtn = card.querySelector('.view-detail-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "product-detail.html";
                } catch (error) {
                    console.error('Lỗi khi lưu sản phẩm:', error);
                    alert('Không thể mở chi tiết sản phẩm. Vui lòng thử lại.');
                }
            });
        }
        
        grid.appendChild(card);
    });
    
    // Nếu không có sản phẩm
    if (productsToShow.length === 0 && !isSearching) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">Không tìm thấy sản phẩm</h3>
                <p style="color: #999;">Hiện không có sản phẩm nào trong danh mục này.</p>
            </div>
        `;
    }
}

// Hàm highlight từ khóa tìm kiếm
function highlightSearchText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Thêm CSS cho highlight
const highlightStyle = document.createElement('style');
highlightStyle.textContent = `
    .search-highlight {
        background: linear-gradient(135deg, #ffeb3b, #ffc107);
        color: #333;
        padding: 2px 5px;
        border-radius: 4px;
        font-weight: bold;
    }
`;
document.head.appendChild(highlightStyle);

// Export hàm tìm kiếm ra global scope
window.searchProducts = searchProducts;
window.performSearch = performSearch;
window.clearSearch = clearSearch;
