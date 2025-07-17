# 影片部署指南

## 關於影片部署到 GitHub Pages

### 🎬 **影片格式建議**
- **MP4 格式** (H.264 編碼，最相容)
- **WebM 格式** (現代瀏覽器支援)
- **檔案大小**: 建議 < 50MB (GitHub 有檔案大小限制)
- **解析度**: 建議 1080p 或 720p
- **長度**: 建議 < 3 分鐘

### 📁 **影片放置位置**
```
EDMCONCERT/
├── videos/
│   ├── hero-video.mp4
│   ├── hero-video.webm
│   └── poster.jpg (預覽圖)
```

### 🔧 **HTML 修改方式**

#### 方法一：使用 HTML5 video 標籤
```html
<div class="hero-video">
    <video 
        width="560" 
        height="314" 
        controls 
        autoplay 
        muted 
        loop
        poster="videos/poster.jpg">
        <source src="videos/hero-video.mp4" type="video/mp4">
        <source src="videos/hero-video.webm" type="video/webm">
        您的瀏覽器不支援 HTML5 影片。
    </video>
</div>
```

#### 方法二：使用 YouTube 上傳後嵌入
```html
<div class="hero-video">
    <iframe 
        width="560" 
        height="314" 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

### ⚠️ **GitHub Pages 限制**
- 單一檔案大小限制：100MB
- Repository 總大小建議：< 1GB
- 不支援伺服器端處理

### 🚀 **推薦部署方式**

#### 選項1：檔案夠小 (< 50MB)
1. 直接上傳到 GitHub repository
2. 使用 HTML5 video 標籤
3. 設置 autoplay, muted, loop

#### 選項2：檔案較大
1. 上傳到 YouTube (設為 unlisted)
2. 使用 YouTube 嵌入
3. 可控制播放權限

#### 選項3：使用 CDN
1. 上傳到 CDN 服務 (如 AWS S3, Cloudflare)
2. 在 HTML 中引用 CDN URL
3. 更好的載入速度

### 🔄 **如何替換現有的 Facebook 影片**

1. 準備您的影片檔案
2. 我會幫您修改 HTML 程式碼
3. 更新 CSS 樣式以適應新的影片格式
4. 測試在不同裝置上的顯示效果

### 📱 **手機優化**
- 使用 `playsinline` 屬性防止全螢幕播放
- 設置適當的 `poster` 圖片
- 考慮使用較小的影片檔案給手機使用

### 🎯 **最佳實踐**
1. 提供多種格式 (MP4 + WebM)
2. 設置預覽圖片
3. 使用 `preload="metadata"` 減少頻寬
4. 考慮使用 `loading="lazy"`

## 需要我幫您做什麼？

請告訴我：
1. 您的影片檔案有多大？
2. 您希望影片如何播放？(自動播放/點擊播放/循環播放)
3. 您比較傾向哪種部署方式？

我可以根據您的需求調整程式碼！