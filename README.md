# Linktree Generator

一個簡單的個人頁面生成器，類似 Linktree 的概念。
你可以編輯基本資料、加入連結與社群平台，並匯出成 HTML，純前端、不需伺服器！

[立即體驗！](https://s414june.github.io/linktree-generator/)

## 功能特色

- ✅ 即時預覽個人頁面樣式
- ✅ 支援標題、簡介、自訂連結清單
- ✅ 支援常見社群平台 icon（GitHub、Facebook、Linkedin...）
- ✅ 自訂頭像與 favicon
- ✅ 匯出 HTML 可單機使用
- ✅ 無需登入、完全前端處理

## 技術

- Vue 3
- Tailwind CSS
- Font Awesome / Lucide Icons
- FileReader API / Blob / DataURL

## 快速製作Linktree網站 - 推薦方法

### 🚀 快速部署到 Netlify - 拖曳檔案上傳（超簡單）

如果你想將匯出的 `index.html` 頁面上傳到網路上，Netlify 是最簡單、免費、快速的方式之一。

1. 打開 [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. 把你匯出的 `index.html` 拖曳上去
3. 等幾秒，Netlify 就會自動產生一個網址，例如：
   https://your-custom-name.netlify.app
4. 點選 `Site settings` 可以修改網址名稱（需登入 Netlify 帳號）

> ✅ 完成！這樣你就擁有一個可以分享給朋友的個人頁面 🎉

### ✨ 快速部署到 Github Pages（免寫程式）

1. 開啟 [GitHub](https://github.com)，登入或註冊你的帳號
2. 點右上角「➕」 > 選「New repository」
3. 建立一個新repository，名稱任意，例如：`my-linktree`
4. 建立後，點選「Add file」→「Upload files」
5. 把你匯出的 `index.html` 上傳上去
6. 上傳完成後，點右上角「⚙️ Settings」→ 左側選單「Pages」
7. 在「Build and deployment」部分選：
   - **Source**：`Deploy from a branch`
   - **Branch**：選 `main`，資料夾選 `root`
8. 儲存後，你的網頁會在幾分鐘內部署完成，網址會長這樣：
   https://你的帳號.github.io/你的倉庫名稱/

### 為什麼推薦 Netlify / GitHub Pages？

| 優點                   | 說明                                            |
| ---------------------- | ----------------------------------------------- |
| 免費                   | 不限流量、不需信用卡                            |
| 自動生成網址           | 可直接分享使用                                  |
| 支援更新               | 隨時可以重新上傳新版 `index.html`並自動更新網站 |
| 版本控管(GitHub Pages) | 會留下版本歷史紀錄供追溯                        |
| 不會程式也能操作       | 介面簡單清楚                                    |

## 如何使用專案

```bash
# 安裝相依
pnpm install

# 開發環境啟動
pnpm run dev

# 編譯產出至 docs/
pnpm run build
```

## 開源授權

- MIT 授權，自由使用

## 作者的話

我是Froggy Wu，正職前端工程師，副業開腦洞🧠

喜歡的話，幫我的專案點個星星鼓勵吧⭐
