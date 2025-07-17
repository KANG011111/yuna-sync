// 平滑滾動功能
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 視差滾動效果
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background, .particle-system, .glow-effects');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// 滾動時的動畫效果
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.concept-item, .info-item, .ticket-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 初始化動畫元素
function initializeAnimations() {
    const elements = document.querySelectorAll('.concept-item, .info-item, .ticket-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// 粒子系統動畫
function createParticles() {
    const particleContainer = document.querySelector('.particle-system');
    if (!particleContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(138, 79, 255, 0.6);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleMove ${5 + Math.random() * 10}s linear infinite;
        `;
        particleContainer.appendChild(particle);
    }
}

// 創建落下粒子效果
function createFallingParticles() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'falling-particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    `;
    
    heroSection.appendChild(particleContainer);
    
    // 持續生成落下的粒子
    setInterval(() => {
        createSingleFallingParticle(particleContainer);
    }, 800);
}

function createSingleFallingParticle(container) {
    const particle = document.createElement('div');
    const colors = [
        'rgba(138, 79, 255, 0.7)',
        'rgba(0, 240, 255, 0.7)',
        'rgba(255, 100, 255, 0.5)',
        'rgba(100, 255, 255, 0.5)'
    ];
    
    const size = Math.random() * 3 + 2;
    const leftPosition = Math.random() * 100;
    const fallDuration = Math.random() * 4 + 6;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: ${leftPosition}%;
        top: -10px;
        animation: particleFall ${fallDuration}s linear forwards;
        box-shadow: 0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]};
    `;
    
    container.appendChild(particle);
    
    // 粒子動畫結束後移除
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, fallDuration * 1000);
}

// 添加粒子動畫CSS
function addParticleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleMove {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
        
        .particle {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}

// 響應式視頻處理
function handleResponsiveVideo() {
    const video = document.querySelector('.hero-video video');
    if (!video) return;
    
    // 檢查用戶網路狀況和偏好
    if (navigator.connection) {
        const connection = navigator.connection;
        const isSlowConnection = connection.effectiveType === 'slow-2g' || 
                               connection.effectiveType === '2g' ||
                               connection.saveData === true;
        
        if (isSlowConnection) {
            video.preload = 'none';
            console.log('偵測到慢速網路，影片設為手動播放');
        }
    }
    
    function resizeVideo() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 480) {
            video.style.width = '90vw';
            video.style.height = '180px';
        } else if (windowWidth <= 768) {
            video.style.width = '90vw';
            video.style.height = '200px';
        } else if (windowWidth <= 1024) {
            video.style.width = '80vw';
            video.style.height = '250px';
        } else {
            video.style.width = '560px';
            video.style.height = '314px';
        }
    }
    
    resizeVideo();
    window.addEventListener('resize', resizeVideo);
    
    // 添加影片載入錯誤處理
    video.addEventListener('error', function() {
        console.error('影片載入失敗');
        this.style.display = 'none';
    });
    
    // 影片載入完成後的處理
    video.addEventListener('loadedmetadata', function() {
        console.log('影片載入完成');
    });
}

// 票券按鈕點擊效果
function handleTicketButtons() {
    const ticketButtons = document.querySelectorAll('.ticket-button');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 創建點擊效果
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                left: ${e.clientX - this.offsetLeft}px;
                top: ${e.clientY - this.offsetTop}px;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // 這裡可以添加實際的購票邏輯
            alert('購票功能即將開放！');
        });
    });
}

// 添加漣漪效果CSS
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .ticket-button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// 滾動進度指示器
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8A4FFF, #00F0FF);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// 主題切換功能（預留）
function initializeThemeToggle() {
    // 預留給未來的主題切換功能
    const themeToggle = document.createElement('button');
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(138, 79, 255, 0.2);
        border: 1px solid rgba(138, 79, 255, 0.5);
        color: #8A4FFF;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1000;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    `;
    themeToggle.innerHTML = '🌙';
    themeToggle.title = '主題切換（即將推出）';
    
    themeToggle.addEventListener('click', () => {
        alert('主題切換功能即將推出！');
    });
    
    document.body.appendChild(themeToggle);
}

// 載入動畫
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid rgba(138, 79, 255, 0.3);
            border-top: 3px solid #8A4FFF;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    document.body.appendChild(loader);
    
    // 添加旋轉動畫
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

function hideLoadingAnimation() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
}

// 初始化所有功能
function initialize() {
    // 顯示載入動畫
    showLoadingAnimation();
    
    // 等待頁面載入完成
    window.addEventListener('load', () => {
        hideLoadingAnimation();
        
        // 初始化各項功能
        initializeAnimations();
        createParticles();
        createFallingParticles();
        addParticleCSS();
        handleResponsiveVideo();
        handleTicketButtons();
        addRippleCSS();
        createScrollProgress();
        initializeThemeToggle();
        
        // 初始化滾動事件
        window.addEventListener('scroll', () => {
            handleParallax();
            handleScrollAnimations();
            handleBackgroundParallax();
        });
        
        // 初始化觸發動畫
        setTimeout(() => {
            handleScrollAnimations();
        }, 100);
    });
}

// 確保DOM載入完成後執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// 錯誤處理
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// 圖片預載入和優化
function preloadImages() {
    const criticalImages = [
        'images/concert-stage.jpg',
        'images/purple-neon.jpg',
        'images/laser-lights.jpg'
    ];
    
    const nonCriticalImages = [
        'images/neon-lights.jpg',
        'images/stage-setup.jpg',
        'images/led-screen.jpg',
        'images/concert-venue.jpg',
        'image/ChatGPT Image .png',
        'image/peggy857439_67446_httpss.mj.run7ObduNqSc98_A_cheerful_young_w_a1e6218b-f79b-4687-a98a-81e32020725c_1.png'
    ];
    
    // 立即載入關鍵圖片
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            console.log(`Critical image loaded: ${src}`);
        };
    });
    
    // 延遲載入非關鍵圖片
    setTimeout(() => {
        nonCriticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                console.log(`Non-critical image loaded: ${src}`);
            };
        });
    }, 2000);
}

// 背景圖片視差效果
function handleBackgroundParallax() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const introSection = document.querySelector('.intro-section');
    const infoSection = document.querySelector('.info-section');
    const ticketSection = document.querySelector('.ticket-section');
    
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
    
    if (introSection) {
        const introTop = introSection.offsetTop;
        const introOffset = scrolled - introTop;
        introSection.style.backgroundPositionY = `${introOffset * 0.3}px`;
    }
    
    if (infoSection) {
        const infoTop = infoSection.offsetTop;
        const infoOffset = scrolled - infoTop;
        infoSection.style.backgroundPositionY = `${infoOffset * 0.4}px`;
    }
    
    if (ticketSection) {
        const ticketTop = ticketSection.offsetTop;
        const ticketOffset = scrolled - ticketTop;
        ticketSection.style.backgroundPositionY = `${ticketOffset * 0.2}px`;
    }
}

// 響應式圖片處理
function handleResponsiveImages() {
    const sections = document.querySelectorAll('.hero-section, .intro-section, .info-section, .ticket-section');
    
    function updateBackgroundImages() {
        const windowWidth = window.innerWidth;
        
        sections.forEach(section => {
            const currentBg = window.getComputedStyle(section).backgroundImage;
            
            // 在小螢幕上降低圖片品質
            if (windowWidth <= 768) {
                section.style.backgroundSize = '120% auto';
            } else if (windowWidth <= 1024) {
                section.style.backgroundSize = '110% auto';
            } else {
                section.style.backgroundSize = 'cover';
            }
        });
    }
    
    updateBackgroundImages();
    window.addEventListener('resize', updateBackgroundImages);
}

// 確保在所有圖片載入後調整佈局
window.addEventListener('load', () => {
    // 預載入圖片
    preloadImages();
    
    // 初始化響應式圖片
    handleResponsiveImages();
    
    // 強制重新計算佈局
    document.body.style.display = 'none';
    document.body.offsetHeight; // 觸發reflow
    document.body.style.display = '';
});