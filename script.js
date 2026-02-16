const productsData = {
    all: [
        {
            id: 1,
            name: "Cotton jacket vest pink",
            category: "Harness",
            price: 108.8,
            colors: [
                { name: "pink", hex: "#F5A5B8", image: "./images/picks3.png" },
                { name: "blue", hex: "#5EC4DB", image: "./images/picks3.png" },
                { name: "green", hex: "#6BB06C", image: "./images/picks3.png" },
                { name: "black", hex: "#000000", image: "./images/picks3.png" }
            ],
            sizes: ["S", "M", "L", "XL"],
            description: "Premium quality pet harness designed for daily walks and outdoor adventures. Features adjustable straps for a perfect fit and durable construction that lasts.",
            features: [
                "Premium breathable mesh material",
                "Adjustable straps for perfect fit",
                "Reflective stitching for night safety",
                "Easy to clean and maintain",
                "Comfortable padding"
            ],
            currentColor: 0,
            images: [
                "./images/picks3.png",
                "./images/picks3.png",
                "./images/picks3.png",
                "./images/picks3.png"
            ]
        },
        {
            id: 2,
            name: "Cotton jacket vest off white",
            category: "Bed",
            price: 98,
            colors: [
                { name: "blue", hex: "#4A90E2", image: "./images/picks1.png" },
                { name: "pink", hex: "#F5A5B8", image: "./images/picks1.png" },
                { name: "green", hex: "#6BB06C", image: "./images/picks1.png" }
            ],
            sizes: ["S", "M", "L"],
            description: "Ultra-soft and comfortable pet bed that provides optimal support for your furry friend. Machine washable cover for easy maintenance.",
            features: [
                "Ultra-soft plush material",
                "Orthopedic memory foam support",
                "Machine washable removable cover",
                "Non-slip bottom",
                "Available in multiple sizes"
            ],
            currentColor: 0,
            images: [
                "./images/picks1.png",
                "./images/picks1.png",
                "./images/picks1.png",
                "./images/picks1.png"
            ]
        },
        {
            id: 3,
            name: "Cotton jacket vest blue",
            category: "Toy",
            price: 100,
            colors: [
                { name: "green", hex: "#6BB06C", image: "./images/picks2.png" },
                { name: "blue", hex: "#5EC4DB", image: "./images/picks2.png" },
                { name: "pink", hex: "#F5A5B8", image: "./images/picks2.png" }
            ],
            sizes: ["One Size"],
            description: "Engaging interactive toy set that keeps your pet entertained for hours. Made from safe, non-toxic materials.",
            features: [
                "Safe, non-toxic materials",
                "Durable construction",
                "Promotes active play",
                "Easy to clean",
                "Suitable for all pet sizes"
            ],
            currentColor: 0,
            images: [
                "./images/picks2.png",
                "./images/picks2.png",
                "./images/picks2.png",
                "./images/picks2.png"
            ]
        },
        {
            id: 4,
            name: "Cotton jacket vest green",
            category: "Leash",
            price: 89,
            colors: [
                { name: "black", hex: "#000000", image: "./images/picks4.png" },
                { name: "blue", hex: "#5EC4DB", image: "./images/picks4.png" },
                { name: "green", hex: "#6BB06C", image: "./images/picks4.png" },
                { name: "pink", hex: "#F5A5B8", image: "./images/picks4.png" }
            ],
            sizes: ["S (4ft)", "M (5ft)", "L (6ft)"],
            description: "Strong and durable leash with comfortable padded handle. Perfect for daily walks and training sessions.",
            features: [
                "Heavy-duty nylon construction",
                "Padded handle for comfort",
                "Rust-resistant metal clasp",
                "Reflective stitching",
                "Available in multiple lengths"
            ],
            currentColor: 0,
            images: [
                "./images/picks4.png",
                "./images/picks4.png",
                "./images/picks4.png",
                "./images/picks4.png"
            ]
        },
        {
            id: 5,
            name: "Green handbag",
            category: "Bowl",
            price: 34.99,
            colors: [
                { name: "white", hex: "#FFFFFF", image: "./images/daily1.png" },
                { name: "black", hex: "#000000", image: "./images/daily1.png" },
                { name: "blue", hex: "#5EC4DB", image: "./images/daily1.png" }
            ],
            sizes: ["Small", "Medium", "Large"],
            description: "Stainless steel feeding bowl set with non-slip base. Dishwasher safe and easy to clean.",
            features: [
                "Food-grade stainless steel",
                "Non-slip rubber base",
                "Dishwasher safe",
                "Rust and stain resistant",
                "Ergonomic design"
            ],
            currentColor: 0,
            images: [
                "./images/daily1.png",
                "./images/daily1.png",
                "./images/daily1.png",
                "./images/daily1.png"
            ]
        },
        {
            id: 6,
            name: "Blue handbag",
            category: "Carrier",
            price: 59.99,
            colors: [
                { name: "pink", hex: "#F5A5B8", image: "./images/daily2.png" },
                { name: "blue", hex: "#4A90E2", image: "./images/daily2.png" },
                { name: "black", hex: "#000000", image: "./images/daily2.png" }
            ],
            sizes: ["Small", "Medium", "Large"],
            description: "Comfortable and secure travel carrier with ventilation windows. Perfect for vet visits and trips.",
            features: [
                "Well-ventilated design",
                "Secure locking mechanism",
                "Comfortable carrying handles",
                "Lightweight but sturdy",
                "Airline approved"
            ],
            currentColor: 0,
            images: [
                "./images/daily2.png",
                "./images/daily2.png",
                "./images/daily2.png",
                "./images/daily2.png"
            ]
        },
        {
            id: 7,
            name: "Pink handbag",
            category: "Grooming",
            price: 39.99,
            colors: [
                { name: "blue", hex: "#5EC4DB", image: "./images/daily3.png" },
                { name: "pink", hex: "#F5A5B8", image: "./images/daily3.png" }
            ],
            sizes: ["One Size"],
            description: "Complete grooming kit with all essential tools. Keep your pet looking their best with professional-quality tools.",
            features: [
                "Complete grooming tool set",
                "Professional quality",
                "Ergonomic handles",
                "Storage case included",
                "Suitable for all coat types"
            ],
            currentColor: 0,
            images: [
                "./images/daily3.png",
                "./images/daily3.png",
                "./images/daily3.png",
                "./images/daily3.png"
            ]
        },
        {
            id: 8,
            name: "Pet base T-shirt",
            category: "Collar",
            price: 16.99,
            colors: [
                { name: "green", hex: "#6BB06C", image: "./images/image 38.png" },
                { name: "blue", hex: "#5EC4DB", image: "./images/image 38.png" },
                { name: "pink", hex: "#F5A5B8", image: "./images/image 38.png" },
                { name: "black", hex: "#000000", image: "./images/image 38.png" }
            ],
            sizes: ["XS", "S", "M", "L"],
            description: "Durable collar with customizable ID tag. Adjustable design ensures a comfortable fit for pets of all sizes.",
            features: [
                "Adjustable length",
                "Durable nylon material",
                "Includes ID tag",
                "Quick-release buckle",
                "Reflective elements"
            ],
            currentColor: 0,
            images: [
                "./images/image 38.png",
                "./images/image 38.png",
                "./images/image 38.png",
                "./images/image 38.png"
            ]
        }
    ]
};

let currentProduct = null;
let selectedColorIndex = 0;
let selectedSizeIndex = 0;
let quantity = 1;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderTopPicks();
    renderDailyEssentials();

    initializeBackToTop();
    initializeNewsletterForm();
    initializeProductDetailListeners();
    initializeQuantityControls();
    initializeOrderForm();
    initializeSidebar();
    initializeBreadcrumb();

    initializeSmoothScroll();
}

function initializeSidebar() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerBtnDetail = document.getElementById('hamburgerBtnDetail');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const body = document.body;

    hamburgerBtn.addEventListener('click', function() {
        sidebarMenu.classList.add('open');
        body.classList.add('sidebar-open');
    });

    hamburgerBtnDetail.addEventListener('click', function() {
        sidebarMenu.classList.add('open');
        body.classList.add('sidebar-open');
    });

    closeSidebarBtn.addEventListener('click', closeSidebar);

    body.addEventListener('click', function(e) {
        if (body.classList.contains('sidebar-open') &&
            !sidebarMenu.contains(e.target) &&
            !hamburgerBtn.contains(e.target)) {
            closeSidebar();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('sidebar-open')) {
            closeSidebar();
        }
    });

    const categoryLinks = sidebarMenu.querySelectorAll('[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('Category selected:', category);
            closeSidebar();
        });
    });
}

function closeSidebar() {
    const sidebarMenu = document.getElementById('sidebarMenu');
    const body = document.body;
    sidebarMenu.classList.remove('open');
    body.classList.remove('sidebar-open');
}

function initializeBreadcrumb() {
    const breadcrumbHomeLink = document.getElementById('breadcrumbHomeLink');
    if (breadcrumbHomeLink) {
        breadcrumbHomeLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeProductDetail();
        });
    }

    const homeNavDetail = document.getElementById('homeNavDetail');
    const shopNavDetail = document.getElementById('shopNavDetail');
    const aboutNavDetail = document.getElementById('aboutNavDetail');
    const contactNavDetail = document.getElementById('contactNavDetail');

    if (homeNavDetail) {
        homeNavDetail.addEventListener('click', function(e) {
            e.preventDefault();
            closeProductDetail();
        });
    }

    if (shopNavDetail) {
        shopNavDetail.addEventListener('click', function(e) {
            e.preventDefault();
            closeProductDetail();
            setTimeout(() => {
                document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    }

    if (aboutNavDetail) {
        aboutNavDetail.addEventListener('click', function(e) {
            e.preventDefault();
            closeProductDetail();
            setTimeout(() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    }

    if (contactNavDetail) {
        contactNavDetail.addEventListener('click', function(e) {
            e.preventDefault();
            closeProductDetail();
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    }
}

function updateBreadcrumb(productName) {
    const breadcrumbCategory = document.getElementById('breadcrumbCategory');
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = productName;
    }

    const breadcrumbProductName = document.getElementById('breadcrumbProductName');
    if (breadcrumbProductName) {
        breadcrumbProductName.textContent = productName;
    }
}

function renderTopPicks() {
    const grid = document.getElementById('topPicksGrid');
    const topPicks = productsData.all.slice(0, 4);

    grid.innerHTML = topPicks.map(product => createProductCard(product)).join('');

    attachProductCardListeners();
}

function renderDailyEssentials() {
    const grid = document.getElementById('essentialsGrid');
    const essentials = productsData.all.slice(4, 8);

    grid.innerHTML = essentials.map(product => createProductCard(product)).join('');

    attachProductCardListeners();
}

function createProductCard(product) {
    const colorDots = product.colors.map(color =>
        `<div class="color-dot" style="background-color: ${color.hex}"></div>`
    ).join('');

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.colors[0].image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-colors">
                    ${colorDots}
                </div>
            </div>
        </div>
    `;
}

function attachProductCardListeners() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            openProductDetail(productId);
        });
    });
}

function openProductDetail(productId) {
    const product = productsData.all.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    selectedColorIndex = 0;
    selectedSizeIndex = 0;
    quantity = 1;

    updateBreadcrumb(product.name);

    document.getElementById('detailProductName').textContent = product.name;
    document.getElementById('detailPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailMainImage').src = product.colors[0].image;
    document.getElementById('detailMainImage').alt = product.name;

    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');

    renderColorOptions(product);

    renderSizeOptions(product);

    renderRelatedProducts(product.id);

    document.getElementById('quantity').value = 1;

    const mainContent = document.getElementById('mainContent');
    const productDetailPage = document.getElementById('productDetailPage');

    mainContent.classList.add('fade-out');

    setTimeout(() => {
        mainContent.classList.add('hidden');
        productDetailPage.classList.remove('hidden');

        window.scrollTo(0, 0);

        setTimeout(() => {
            productDetailPage.classList.add('show');
        }, 50);
    }, 400);
}

function renderColorOptions(product) {
    const colorOptions = document.getElementById('colorOptions');
    colorOptions.innerHTML = product.colors.map((color, index) =>
        `<div class="color-option ${index === 0 ? 'active' : ''}"
              style="background-color: ${color.hex}"
              data-color-index="${index}"
              title="${color.name}"></div>`
    ).join('');

    const options = colorOptions.querySelectorAll('.color-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const colorIndex = parseInt(this.getAttribute('data-color-index'));
            selectColor(colorIndex);
        });
    });
}

function renderSizeOptions(product) {
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = product.sizes.map((size, index) =>
        `<div class="size-option ${index === 0 ? 'active' : ''}"
              data-size-index="${index}">${size}</div>`
    ).join('');

    const options = sizeOptions.querySelectorAll('.size-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const sizeIndex = parseInt(this.getAttribute('data-size-index'));
            selectSize(sizeIndex);
        });
    });
}

function selectColor(colorIndex) {
    if (!currentProduct) return;

    selectedColorIndex = colorIndex;

    const options = document.querySelectorAll('.color-option');
    options.forEach((option, index) => {
        if (index === colorIndex) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    document.getElementById('detailMainImage').src = currentProduct.colors[colorIndex].image;
}

function selectSize(sizeIndex) {
    selectedSizeIndex = sizeIndex;

    const options = document.querySelectorAll('.size-option');
    options.forEach((option, index) => {
        if (index === sizeIndex) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function renderRelatedProducts(currentProductId) {
    const grid = document.getElementById('relatedProductsGrid');
    const related = productsData.all
        .filter(p => p.id !== currentProductId)
        .slice(0, 4);

    grid.innerHTML = related.map(product => createProductCard(product)).join('');

    attachProductCardListeners();
}

function initializeProductDetailListeners() {
    document.getElementById('closeDetail').addEventListener('click', function() {
        closeProductDetail();
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));

            this.classList.add('active');

            if (currentProduct && currentProduct.images[index]) {
                document.getElementById('detailMainImage').src = currentProduct.images[index];
            }
        });
    });
}

function closeProductDetail() {
    const mainContent = document.getElementById('mainContent');
    const productDetailPage = document.getElementById('productDetailPage');

    productDetailPage.classList.remove('show');

    setTimeout(() => {
        productDetailPage.classList.add('hidden');
        mainContent.classList.remove('hidden');

        window.scrollTo(0, 0);

        setTimeout(() => {
            mainContent.classList.remove('fade-out');
        }, 50);
    }, 400);
}

function initializeQuantityControls() {
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', function() {
        let currentQty = parseInt(quantityInput.value);
        if (currentQty > 1) {
            quantityInput.value = currentQty - 1;
            quantity = currentQty - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let currentQty = parseInt(quantityInput.value);
        if (currentQty < 10) {
            quantityInput.value = currentQty + 1;
            quantity = currentQty + 1;
        }
    });
}

function initializeOrderForm() {
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!currentProduct) return;

        const orderDetails = {
            product: currentProduct.name,
            color: currentProduct.colors[selectedColorIndex].name,
            size: currentProduct.sizes[selectedSizeIndex],
            quantity: quantity,
            price: currentProduct.price,
            total: (currentProduct.price * quantity).toFixed(2)
        };

        alert(`Added to Cart!\n\nProduct: ${orderDetails.product}\nColor: ${orderDetails.color}\nSize: ${orderDetails.size}\nQuantity: ${orderDetails.quantity}\nTotal: $${orderDetails.total}`);
    });
}

function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initializeNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email && validateEmail(email)) {
            alert(`Thank you for subscribing!\n\nWe'll send updates to: ${email}`);

            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const shopSection = document.getElementById('shop');
            if (shopSection) {
                shopSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function filterProducts(category) {
    if (category === 'all') {
        return productsData.all;
    }
    return productsData.all.filter(product => product.category === category);
}

console.log('FurHouse Studio - Pet Supplies Website Initialized');
console.log(`Loaded ${productsData.all.length} products`);
