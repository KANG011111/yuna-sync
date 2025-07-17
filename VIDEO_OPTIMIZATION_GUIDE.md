# 影片優化指南 - 保持音樂品質

## 🎯 優化目標
- **目前大小**: 16MB
- **目標大小**: 8-10MB (減少 40-50%)
- **音樂品質**: 保持原始品質
- **影片品質**: 適度優化

## 🛠️ 推薦的免費線上工具

### 1. CloudConvert (推薦)
- **網址**: https://cloudconvert.com/mp4-converter
- **設定建議**:
  - **影片編碼**: H.264
  - **音頻編碼**: AAC, 192kbps (保持音樂品質)
  - **影片品質**: 85-90%
  - **解析度**: 維持原始比例

### 2. Online Video Compressor
- **網址**: https://www.onlinevideocompressor.com/
- **特點**: 自動優化，保持音質
- **操作**: 直接上傳，選擇「高品質」選項

### 3. FreeConvert
- **網址**: https://www.freeconvert.com/video-compressor
- **設定建議**:
  - **音頻**: 保持原始設定
  - **影片**: 適度壓縮

## 🎵 音樂品質保持設定

### 關鍵參數設置
```
音頻編碼: AAC
音頻比特率: 192kbps 或更高
音頻采樣率: 44.1kHz 或 48kHz
音頻通道: 立體聲 (2.0)
```

### 影片優化參數
```
影片編碼: H.264 (x264)
影片品質: 85-90%
幀率: 保持原始 (通常 24/30fps)
解析度: 保持原始比例
```

## 📋 操作步驟

### 步驟 1: 備份原始檔案
```bash
cp "video/Untitled ‑ Made with FlexClip (1).mp4" "video/original_backup.mp4"
```

### 步驟 2: 使用線上工具壓縮
1. 前往推薦的線上工具
2. 上傳您的影片
3. 選擇「自定義設定」
4. 設置音頻為 192kbps AAC
5. 設置影片品質為 85-90%
6. 開始壓縮

### 步驟 3: 替換檔案
1. 下載壓縮後的檔案
2. 重新命名為原始檔案名
3. 替換 video 資料夾中的檔案

## 🔧 本地工具方案 (如果要安裝)

### 安裝 ffmpeg (macOS)
```bash
# 使用 Homebrew 安裝
brew install ffmpeg

# 或使用 MacPorts
sudo port install ffmpeg
```

### 優化命令 (安裝 ffmpeg 後)
```bash
# 保持音樂品質的優化命令
ffmpeg -i "video/Untitled ‑ Made with FlexClip (1).mp4" \
  -c:v libx264 -crf 23 \
  -c:a aac -b:a 192k \
  -preset medium \
  -movflags +faststart \
  "video/optimized.mp4"
```

## 📊 預期結果

### 優化前
- 大小: 16MB
- 品質: 原始

### 優化後
- 大小: 8-10MB (減少 40-50%)
- 音樂品質: 保持 192kbps AAC
- 影片品質: 85-90% (肉眼難以察覺差異)
- 載入速度: 提升 40-50%

## ⚠️ 注意事項

1. **備份原始檔案** - 永遠保留原始版本
2. **測試播放** - 壓縮後測試音質和畫質
3. **多次嘗試** - 可能需要調整參數達到最佳效果
4. **網路環境** - 線上工具需要穩定網路

## 🎯 推薦工作流程

1. 使用 CloudConvert 進行初次壓縮
2. 測試壓縮效果和音質
3. 如不滿意，調整參數重新壓縮
4. 替換網站中的影片檔案
5. 測試網站播放效果

完成後，您的影片將在保持音樂品質的前提下，大幅減少檔案大小！