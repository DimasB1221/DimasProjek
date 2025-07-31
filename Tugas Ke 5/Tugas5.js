// =====================================================
// TUGAS 5 - VANILLA JAVASCRIPT E-COMMERCE PRODUCT LIST
// =====================================================

// 1. ARRAY DATA PRODUK
// Array berisi objek-objek produk dengan properti lengkap
const products = [
    {
        id: 1,
        name: "Smartphone Samsung Galaxy A54 5G",
        price: 4500000,
        category: "elektronik",
        description: "Smartphone dengan kamera 50MP, layar AMOLED 6.4 inci, RAM 8GB, storage 256GB, dan baterai 5000mAh yang tahan lama untuk aktivitas harian.",
        image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Laptop ASUS VivoBook 14 Intel Core i5",
        price: 7200000,
        category: "elektronik",
        description: "Laptop ringan dengan processor Intel Core i5 generasi terbaru, RAM 8GB DDR4, SSD 512GB NVMe untuk produktivitas dan multitasking.",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Sepatu Nike Air Max 270 Running",
        price: 1850000,
        category: "fashion",
        description: "Sepatu olahraga dengan teknologi Air Max untuk kenyamanan maksimal, cocok untuk berlari, gym, dan aktivitas olahraga lainnya.",
        image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Kaos Polo Ralph Lauren Premium",
        price: 650000,
        category: "fashion",
        description: "Kaos polo premium dari bahan cotton 100% berkualitas tinggi dengan desain klasik yang cocok untuk formal maupun casual.",
        image: "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9sbyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        id: 5,
        name: "Rice Cooker Miyako Digital 1.8L",
        price: 385000,
        category: "perabotan",
        description: "Rice cooker digital dengan kapasitas 1.8 liter, dilengkapi timer, fungsi keep warm 12 jam, dan lapisan anti lengket premium.",
        image: "https://plus.unsplash.com/premium_photo-1711051351678-658b273f71d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Blender Philips HR2115 2 Liter",
        price: 485000,
        category: "perabotan",
        description: "Blender 2 liter dengan motor 400W, pisau stainless steel 6 mata, 5 kecepatan, cocok untuk smoothie, jus, dan bumbu.",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Novel Bestseller Laskar Pelangi",
        price: 85000,
        category: "buku",
        description: "Novel fenomenal karya Andrea Hirata yang mengisahkan perjuangan anak-anak Belitung menuntut ilmu dengan penuh semangat dan inspiratif.",
        image: "https://images.unsplash.com/photo-1599495054627-35ad07218a46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Buku Resep Masakan Indonesia Lengkap",
        price: 125000,
        category: "buku",
        description: "Kumpulan 200+ resep masakan tradisional Indonesia dari Sabang sampai Merauke, lengkap dengan foto step-by-step dan tips memasak.",
        image: "https://images.unsplash.com/photo-1590587754541-a3a4f2e0d06f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 9,
        name: "Headphone Sony WH-1000XM4 Wireless",
        price: 4200000,
        category: "elektronik",
        description: "Headphone wireless premium dengan teknologi noise cancelling terdepan, baterai 30 jam, dan kualitas suara Hi-Res Audio.",
        image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Tas Ransel Eiger Adventure Series",
        price: 275000,
        category: "fashion",
        description: "Tas ransel outdoor 25L dengan bahan ripstop tahan air, cocok untuk hiking, traveling, kuliah, dan aktivitas sehari-hari.",
        image: "https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        name: "Set Peralatan Makan Keramik Premium",
        price: 320000,
        category: "perabotan",
        description: "Set lengkap peralatan makan keramik untuk 6 orang, terdiri dari piring, mangkuk, dan cangkir dengan desain minimalis modern.",
        image: "https://images.unsplash.com/photo-1512149519538-136d1b8c574a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        name: "Kamus Bahasa Inggris-Indonesia Terlengkap",
        price: 95000,
        category: "buku",
        description: "Kamus komprehensif dengan 75.000+ kata, idiom, phrasal verbs, dan contoh penggunaan dalam kalimat sehari-hari untuk semua level.",
        image: "https://images.unsplash.com/photo-1678228921482-65bddceabac2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FtdXN8ZW58MHx8MHx8fDA%3D"
    }
];

// 2. FUNGSI HELPER - FORMAT HARGA KE RUPIAH
// Fungsi ini mengkonversi angka menjadi format mata uang Rupiah
function formatPrice(price) {
    // Menggunakan Intl.NumberFormat untuk format mata uang Indonesia
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',      // Menentukan sebagai format mata uang
        currency: 'IDR',        // Mata uang Indonesia (Rupiah)
        minimumFractionDigits: 0 // Tidak menampilkan desimal (,00)
    }).format(price);
};

// 3.Membuat Funtion untuk loop utama ke halaman
function displayProducts (toDisplayProduct){
    const productContainer = document.getElementById('product-list');
    const productRow = productContainer.querySelector('.row')

    productRow.innerHTML = '';

    for (let i = 0; i < toDisplayProduct.length; i++) {
        let product = toDisplayProduct[i];

        let colDiv = document.createElement('div');
        colDiv.classList = 'col-lg-4 col-md-6 col-sm-12 mb-4'

        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-primary mb-2">${product.category.toUpperCase()}</span>
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small flex-grow-1">${product.description}</p>
                    <div class="mt-auto">
                        <h4 class="text-danger mb-3">${formatPrice(product.price)}</h4>
                        <button class="btn btn-primary w-100" onclick="buyProduct(${product.id})">
                            🛒 Beli Sekarang
                        </button>
                    </div>
                </div>
            </div>
        `
        productRow.appendChild(colDiv)
    };
};

// 4.Membuat fitur filter
function filterProducts () {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const searchFilter = document.getElementById('searchInput').value.toLowerCase();

    let filterProducts = [];
    
    for (let i = 0; i < products.length; i++) {
        let shouldInclude = true
        let product = products[i]
        
        // Category Filter
        if (categoryFilter !== 'semua' && product.category !== categoryFilter) {
            shouldInclude = false;
        }
        
        // Price Filter
        if (priceFilter && shouldInclude) {
            const priceRange = priceFilter.split('-');
            const priceMin = parseInt(priceRange[0]);
            const priceMax = parseInt(priceRange[1]);

            if(product.price < priceMin || product.price > priceMax) {
                shouldInclude = false;
            }
        }

        // Search Filter
        if (searchFilter && shouldInclude) {
            const nameMacth = product.name.toLowerCase().includes(searchFilter)
            const descMacth = product.description.toLowerCase().includes(searchFilter);
            const categoryMacth = product.category.toLowerCase().includes(searchFilter);
            
            if(!nameMacth && !descMacth && !categoryMacth) {
                shouldInclude = false;
            }
        }

        if (shouldInclude) {
            filterProducts.push(product);
        }

    }
    displayProducts(filterProducts);
};

// 5.Membuat setup event

function setUpEvent (){
    // Category event
    const categorySelected = document.getElementById('categoryFilter');
    categorySelected.addEventListener('change',function(){
        filterProducts();
    });

    // Price event 
    const priceSelected = document.getElementById('priceFilter');
    priceSelected.addEventListener('change',function(){
        filterProducts();
    });

    // Search Event
    const searchInput = document.getElementById('searchInput');
    let searchTimeOut;
    searchInput.addEventListener('input',function(){
        filterProducts();
    });

    searchInput.addEventListener('keypress',function(e){
        searchTimeOut;

        if(e.key === "Enter") {
            searchTimeOut = setTimeout(() => {
                filterProducts();
            }, 300);
        }

    })
};

// 6.Inisialisasi app
function inisialisasiApp(){
    displayProducts(products);
    setUpEvent();
};

// 7.Membuat DOM Content Load
document.addEventListener('DOMContentLoaded',function(){
    inisialisasiApp();
});