document.addEventListener('DOMContentLoaded', function() {
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentLikes = parseInt(this.textContent.split(' ')[1]);
            const isLiked = this.classList.contains('liked');
            
            if (isLiked) {
                this.textContent = `❤️ ${currentLikes - 1}`;
                this.classList.remove('liked');
            } else {
                this.textContent = `❤️ ${currentLikes + 1}`;
                this.classList.add('liked');
            }
        });
    });
    
    // Follow button functionality
    const followButtons = document.querySelectorAll('.follow-btn');
    
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Ikuti') {
                this.textContent = 'Mengikuti';
                this.style.backgroundColor = '#ddd';
                this.style.color = '#333';
            } else {
                this.textContent = 'Ikuti';
                this.style.backgroundColor = '#fda155';
                this.style.color = 'white';
            }
        });
    });
    
    // Tab functionality in profile
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Form submission simulation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Fitur ini hanya test.');
        });
    });
    
    // Bottom Navigation Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Create Post Button (placeholder functionality)
    const createPostBtn = document.getElementById('create-post-btn');
    if (createPostBtn) {
        createPostBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Fitur create post akan segera hadir!');
        });
    }
});