document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止链接跳转
        dropdownMenu.classList.toggle('show');
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('show');
        }
    });
});
