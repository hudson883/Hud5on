document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const playlistItems = document.querySelectorAll('.playlist li');
    
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-src');
            player.src = audioSrc;
            player.load();
            player.play();
            
            // 移除其他项的活跃状态
            playlistItems.forEach(li => li.classList.remove('active'));
            // 添加当前项的活跃状态
            this.classList.add('active');
        });
    });
});