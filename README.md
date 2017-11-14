# What's this?
[はてなブックマーク - 日本史上で優れた思想家って誰？](http://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20171110182155)を思想家名別に集計するスクリプトです。

# Setup

データ取得

```
curl 'http://b.hatena.ne.jp/entry/json/https://anond.hatelabo.jp/20171110182155' > bookmarks.json
```

依存ライブラリインストール

```
npm i
```


# Run
上位10名を表示

```
node .
```

集計結果をMarkdownテーブル形式で出力

```
node markdown-table.js
```

# Other

辞書データを順位順でソート

```
node sort-dictionary.js
```

思想家名辞書は`dictionary.json`です。
