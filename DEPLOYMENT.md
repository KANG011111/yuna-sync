# 部署說明文件

## 快速部署指南

### 1. GitHub 部署準備

```bash
# 初始化 Git repository
git init
git add .
git commit -m "Initial commit: HYPER SYNC website"

# 添加 GitHub remote
git remote add origin https://github.com/your-username/hyper-sync-website.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 部署

#### 方法一：透過 Settings 設置

1. 進入 GitHub repository 頁面
2. 點擊 **Settings** 標籤
3. 在左側菜單找到 **Pages**
4. 在 **Source** 部分選擇 **Deploy from a branch**
5. 選擇 **main** branch 和 **/ (root)** 目錄
6. 點擊 **Save**
7. 等待部署完成（通常 2-5 分鐘）

#### 方法二：使用 GitHub Actions（推薦）

專案已包含 `.github/workflows/deploy.yml` 文件，推送到 main 分支時會自動部署。

### 3. Zeabur 部署

#### 步驟：

1. 前往 [Zeabur 控制台](https://zeabur.com)
2. 點擊 **New Project**
3. 選擇 **Import from GitHub**
4. 選擇您的 repository
5. 確認配置：
   - **Framework**: Static Site
   - **Build Command**: `npm run build`
   - **Output Directory**: `./`
6. 點擊 **Deploy**

#### 環境變數設置（如需要）：

```
NODE_ENV=production
ZEABUR_ENV=production
```

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
# 使用 Python 服務器
npm start

# 或使用 live-server
npm run dev
```

### 程式碼檢查

```bash
npm run lint
```

## 域名設置

### GitHub Pages 自定義域名

1. 在 repository 根目錄創建 `CNAME` 文件
2. 在文件中添加您的域名：
   ```
   your-domain.com
   ```
3. 在域名 DNS 設置中添加 CNAME 記錄指向 `your-username.github.io`

### Zeabur 自定義域名

1. 在 Zeabur 控制台進入專案設置
2. 點擊 **Domains** 標籤
3. 添加您的自定義域名
4. 按照提示設置 DNS 記錄

## 性能優化建議

### 圖片優化

```bash
# 使用 ImageMagick 壓縮圖片
convert input.jpg -quality 80 -resize 1920x1080 output.jpg

# 轉換為 WebP 格式
convert input.jpg -quality 80 output.webp
```

### CSS 和 JavaScript 壓縮

建議使用線上工具或構建工具：
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

### CDN 加速

推薦使用 CDN 服務：
- Cloudflare
- jsDelivr
- unpkg

## 監控和分析

### 添加 Google Analytics

在 `index.html` 的 `<head>` 部分添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 網站性能監控

推薦工具：
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 故障排除

### 常見問題

1. **CSS 或 JS 文件載入失敗**
   - 檢查文件路徑是否正確
   - 確認文件是否存在於正確位置

2. **Facebook 影片無法載入**
   - 確認 iframe 來源 URL 正確
   - 檢查 CSP 設置

3. **響應式佈局問題**
   - 檢查 CSS media queries
   - 測試不同設備和瀏覽器

### 聯絡支持

如遇到部署問題，請檢查：
- GitHub Actions 日誌
- Zeabur 部署日誌
- 瀏覽器開發者工具控制台

---

最後更新：2024年12月