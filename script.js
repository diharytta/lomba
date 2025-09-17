// Data meme contoh
const memeData = [
    {
        id: 1,
        title: "Ketika guru bilang 'Ini akan keluar di ujian'",
        image: "https://picsum.photos/seed/meme1/400/300.jpg",
        likes: 245,
        liked: false
    },
    {
        id: 2,
        title: "Senyummu itu seperti... indahnya pagi hari",
        image: "https://picsum.photos/seed/meme2/400/300.jpg",
        likes: 189,
        liked: false
    },
    {
        id: 3,
        title: "Waktu ngumpulin tugas 5 menit sebelum deadline",
        image: "https://picsum.photos/seed/meme3/400/300.jpg",
        likes: 312,
        liked: true
    },
    {
        id: 4,
        title: "Ekspresi wajah saat lihat tagihan listrik",
        image: "https://picsum.photos/seed/meme4/400/300.jpg",
        likes: 421,
        liked: false
    },
    {
        id: 5,
        title: "Ketika pacar bilang 'Aku cuma mau temenin kamu'",
        image: "https://picsum.photos/seed/meme5/400/300.jpg",
        likes: 567,
        liked: true
    },
    {
        id: 6,
        title: "Senin vs Jumat dalam satu gambar",
        image: "https://picsum.photos/seed/meme6/400/300.jpg",
        likes: 789,
        liked: false
    },
    {
        id: 7,
        title: "Anak kos vs anak rumah",
        image: "https://picsum.photos/seed/meme7/400/300.jpg",
        likes: 634,
        liked: false
    },
    {
        id: 8,
        title: "Waktu lihat mantan dapat pacar baru",
        image: "https://picsum.photos/seed/meme8/400/300.jpg",
        likes: 923,
        liked: true
    },
    {
        id: 9,
        title: "Ketika teman ngajak makan tapi uang tinggal 10rb",
        image: "https://picsum.photos/seed/meme9/400/300.jpg",
        likes: 456,
        liked: false
    }
];

// Fungsi untuk render meme cards
function renderMemes() {
    const memeGrid = document.getElementById('memeGrid');
    memeGrid.innerHTML = '';
    
    memeData.forEach(meme => {
        const memeCard = document.createElement('div');
        memeCard.className = 'meme-card';
        
        memeCard.innerHTML = `
            <img src="${meme.image}" alt="${meme.title}" class="meme-image">
            <div class="meme-content">
                <h3 class="meme-title">${meme.title}</h3>
                <div class="meme-actions">
                    <button class="like-btn ${meme.liked ? 'liked' : ''}" data-id="${meme.id}">
                        <i class="${meme.liked ? 'fas' : 'far'} fa-heart"></i>
                        <span>${meme.likes}</span>
                    </button>
                    <button class="share-btn" data-id="${meme.id}">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        `;
        
        memeGrid.appendChild(memeCard);
    });
    
    // Tambah event listener untuk tombol like
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
    
    // Tambah event listener untuk tombol share
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', handleShare);
    });
}

// Fungsi handle like
function handleLike(e) {
    const btn = e.currentTarget;
    const memeId = parseInt(btn.dataset.id);
    const meme = memeData.find(m => m.id === memeId);
    
    if (meme) {
        if (meme.liked) {
            meme.likes--;
            meme.liked = false;
            btn.classList.remove('liked');
            btn.querySelector('i').className = 'far fa-heart';
        } else {
            meme.likes++;
            meme.liked = true;
            btn.classList.add('liked');
            btn.querySelector('i').className = 'fas fa-heart';
        }
        
        btn.querySelector('span').textContent = meme.likes;
    }
}

// Fungsi handle share
function handleShare(e) {
    const btn = e.currentTarget;
    const memeId = parseInt(btn.dataset.id);
    const meme = memeData.find(m => m.id === memeId);
    
    if (meme) {
        // Simulasi share
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.background = '#ffd700';
        notification.style.color = '#1a1a2e';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        notification.style.zIndex = '10000';
        notification.style.fontWeight = '500';
        notification.innerHTML = `<i class="fas fa-check-circle"></i> Meme "${meme.title}" berhasil dibagikan!`;
        
        document.body.appendChild(notification);
        
        // Hapus notifikasi setelah 3 detik
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
        
        // Animasi tombol
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 300);
    }
}

// Toggle sidebar untuk mobile
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Handle category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Handle nav links
function handleNavigation(page) {
    // Update active state for sidebar nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Update active state for bottom nav
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Update page title based on selected page
    const pageTitle = document.getElementById('pageTitle');
    const categoriesContainer = document.getElementById('categoriesContainer');
    
    switch(page) {
        case 'home':
            pageTitle.textContent = 'Meme Terbaru';
            categoriesContainer.style.display = 'flex';
            break;
        case 'trending':
            pageTitle.textContent = 'Meme Trending';
            categoriesContainer.style.display = 'flex';
            break;
        case 'topics':
            pageTitle.textContent = 'Topik Meme';
            categoriesContainer.style.display = 'none';
            break;
        case 'latest':
            pageTitle.textContent = 'Meme Terbaru';
            categoriesContainer.style.display = 'flex';
            break;
        case 'favorites':
            pageTitle.textContent = 'Meme Favorit';
            categoriesContainer.style.display = 'flex';
            break;
        case 'profile':
            pageTitle.textContent = 'Profil Saya';
            categoriesContainer.style.display = 'none';
            break;
        default:
            pageTitle.textContent = 'Meme Terbaru';
            categoriesContainer.style.display = 'flex';
    }
    
    // Close sidebar on mobile after clicking a link
    if (window.innerWidth <= 992) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Add event listeners to sidebar nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        handleNavigation(page);
    });
});

// Add event listeners to bottom nav items
document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        handleNavigation(page);
    });
});

// Handle create button
document.querySelector('.create-btn').addEventListener('click', () => {
    showNotification('Fitur pembuatan meme akan segera hadir!', 'info');
});

// Handle Floating Action Button
document.getElementById('fab').addEventListener('click', () => {
    showNotification('Fitur pembuatan meme akan segera hadir!', 'info');
});

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    
    // Set posisi notifikasi berdasarkan jenis
    if (type === 'info') {
        notification.style.position = 'fixed';
        notification.style.top = '80px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.background = '#667eea';
    } else {
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.background = '#ffd700';
        notification.style.color = '#1a1a2e';
    }
    
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = '500';
    notification.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    
    document.body.appendChild(notification);
    
    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Inisialisasi halaman
document.addEventListener('DOMContentLoaded', () => {
    renderMemes();
});