// 定义 putfile 函数，用于触发文件选择框的点击事件，并处理文件上传逻辑
function putfile() {
    // 获取隐藏的文件输入框和预览区域的引用
    const fileInput = document.getElementById('file-input');
    const previewDiv = document.getElementById('preview');

    // 触发文件选择框的点击事件
    fileInput.click();

    // 监听文件输入框的变化
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            // 显示图片预览
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file); // 创建图片文件的 URL
            img.style.maxWidth = '200px'; // 设置图片的最大宽度
            img.style.maxHeight = '200px'; // 设置图片的最大高度
            img.style.border = '2px solid #ccc'; // 添加边框
            img.style.marginTop = '10px'; // 添加外边距

            // 清空之前的预览内容
            previewDiv.innerHTML = '';
            // 将图片添加到预览区域
            previewDiv.appendChild(img);
        } else {
            previewDiv.innerHTML = '<p>没有选择文件</p>'; // 显示提示信息
        }
    });
}