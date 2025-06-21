document.addEventListener('DOMContentLoaded', function () {
            fetch('daohang.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('navbar-container').innerHTML = data;
                })
                .catch(error => console.error('加载导航栏失败:', error));
        });