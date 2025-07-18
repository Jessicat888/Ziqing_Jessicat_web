function showSection(id) {
    console.log("切换到:", id); // 调试用
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // 隐藏所有
    });
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block'; // 显示选中
    } else {
        console.error("未找到ID:", id);
    }
}
