# mf-auto-submit

MF の更新ボタンを一括で押す Bookmarklet です

MF が jQuery を利用していることを前提としています

## 使い方

### 0. Bookmarklet を設定

リンクをブラウザのブックマークのところにドラッグ・アンド・ドロップ

### 1. [ここ](https://moneyforward.com/accounts) にアクセス

あらかじめアカウントと口座情報を登録する必要があります

### 2. Bookmarklet を実行

先程ブックマークしたものをクリックする

## Dev

```
uglifyjs main.js --mangle --output main.min.js
uglifyjs timer.js --mangle --output timer.min.js
```

or

```
./minify.sh
```
