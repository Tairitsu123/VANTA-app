document.addEventListener('DOMContentLoaded', () => {
    // Toggle Sidebar Dropdown
    const toggleBtn = document.getElementById('btn-toggle-service');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const group = this.closest('.nav-item-group');
            group.classList.toggle('open');
        });
    }

    // Sidebar active states (except for dropdown items)
    const navItems = document.querySelectorAll('.sidebar-nav > .nav-item, .sidebar-nav > .nav-item-group > .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.id !== 'btn-toggle-service') {
                navItems.forEach(n => n.classList.remove('active'));
                this.classList.add('active');
                showAlert('Chuyển trang: ' + this.querySelector('span').innerText);
            }
        });
    });
});

let toastTimeout;
function showAlert(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    
    toast.classList.remove('hidden');
    // Force reflow
    void toast.offsetWidth;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3000);
}
