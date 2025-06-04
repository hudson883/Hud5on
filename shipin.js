document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoItems = document.querySelectorAll('.video-item');
    const playAllButton = document.getElementById('playAll');
    const stopAllButton = document.getElementById('stopAll');
    
    // 设置默认视频
    const firstVideo = videoItems[0];
    videoPlayer.src = firstVideo.getAttribute('data-src');
    videoPlayer.poster = firstVideo.getAttribute('data-thumbnail');
    videoTitle.textContent = firstVideo.getAttribute('data-title');
    
    // 视频项点击事件
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-src');
            const videoTitleText = this.getAttribute('data-title');
            const videoThumbnail = this.getAttribute('data-thumbnail');
            
            videoPlayer.src = videoSrc;
            videoPlayer.poster = videoThumbnail;
            videoTitle.textContent = videoTitleText;
            
            // 移除其他项的活跃状态
            videoItems.forEach(li => li.classList.remove('active'));
            // 添加当前项的活跃状态
            this.classList.add('active');
            
            // 自动播放视频
            videoPlayer.play().catch(e => console.log('自动播放被阻止:', e));
        });
    });
    
    // 播放全部按钮
    playAllButton.addEventListener('click', function() {
        const firstVideo = videoItems[0];
        videoPlayer.src = firstVideo.getAttribute('data-src');
        videoPlayer.poster = firstVideo.getAttribute('data-thumbnail');
        videoTitle.textContent = firstVideo.getAttribute('data-title');
        
        videoItems.forEach(li => li.classList.remove('active'));
        firstVideo.classList.add('active');
        
        videoPlayer.play().catch(e => console.log('自动播放被阻止:', e));
    });
    
    // 停止播放按钮
    stopAllButton.addEventListener('click', function() {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    });
    
    // 视频播放结束后的处理
    videoPlayer.addEventListener('ended', function() {
        const currentActive = document.querySelector('.video-item.active');
        const nextItem = currentActive.nextElementSibling;
        
        if (nextItem) {
            nextItem.click();
        } else {
            // 如果没有下一个视频，则停止播放
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
    });
});