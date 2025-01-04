const cart = [];
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartCountElement = document.getElementById('cart-count');
const cartSection = document.getElementById('cart-section');
const cartButton = document.getElementById('cart-button');

// Fungsi untuk menambah item ke keranjang
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCart();
}

// Fungsi untuk memformat angka menjadi format Rupiah
function formatRupiah(angka) {
    const formatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
    return formatted.replace(',00', '.000');
}

// Fungsi untuk menampilkan dan menghitung isi keranjang
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${formatRupiah(item.price)}`;
        cartItems.appendChild(li);
        total += parseFloat(item.price);
    });

    // Menampilkan total harga dalam format Rupiah
    totalPriceElement.textContent = formatRupiah(total);
    cartCountElement.textContent = cart.length;
}

// Menangani tombol "Tambah ke Keranjang"
const buttons = document.querySelectorAll('.add-to-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});

// Menangani klik tombol keranjang untuk menampilkan/menyembunyikan keranjang
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});
