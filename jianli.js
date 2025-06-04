document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    // 设置Canvas大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 粒子属性
    let particles = [];
    const particleCount = 100; // 粒子数量

    // 监听窗口大小变化事件
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init(); // 重新初始化粒子
    });

    // 创建粒子
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width; // 随机水平位置
            this.y = canvas.height; // 初始在底部
            this.size = Math.random() * 3 + 1; // 随机大小
            this.speedY = Math.random() * 2 + 1; // 随机向上速度
            this.color = 'rgba(118, 146, 253, ' + (Math.random() * 0.5 + 0.3) + ')'; // 随机透明度
        }

        // 更新粒子位置
        update() {
            this.y -= this.speedY;

            // 如果粒子超出顶部，重新从底部开始
            if (this.y < -this.size) {
                this.reset();
            }
        }

        // 重置粒子位置
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 2 + 1;
            this.color = 'rgba(118, 146, 253, ' + (Math.random() * 0.5 + 0.3) + ')';
        }

        // 绘制粒子
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 初始化粒子
    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 绘制粒子
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    // 启动粒子效果
    init();
    animate();
});