function toggleDropdown(event) {
    event.preventDefault(); // 阻止默认链接跳转
    const dropdownMenu = event.target.nextElementSibling;

    // 关闭其他已展开的菜单
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
            menu.classList.remove('show');
        }
    });

    // 切换当前菜单
    dropdownMenu.classList.toggle('show');
}

// 点击页面其他地方关闭菜单
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
