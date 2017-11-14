const handlebars = require('handlebars');
const source = require('./bookmarks')
const dictionary = require('./dictionary')
const bookmarksWithComment = require('./lib/bookmarks-with-comment')
const createMapBaseOnDictionary = require('./lib/create-map-base-on-dictionary')

// コメントの無いブックマークを削る
const bookmarks = bookmarksWithComment(source)
const summary = createMapBaseOnDictionary(bookmarks, dictionary)

// 集めた思想家を配列にする
const philosophers = []
for ([name, comments] of summary.entries()) {
  philosophers.push([name, comments, comments.join('<br>')])
}
// コメント数でソート
philosophers.sort((a, b) => {
  if (b[1].length - a[1].length !== 0) {
    return b[1].length - a[1].length
  }

  if (a[0] > b[0]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  } else {
    return 0;
  }
})

// コメント数のみ
const formatter = handlebars.compile(`
|名前 | 票数 |
|:-----------|------------:|
{{#each this}}
| {{[0]}}       |{{[1].length}}        |
{{/each}}
  `)
console.log(formatter(philosophers))

// コメント一覧
const formatter2 = handlebars.compile(`
|思想家 | コメント |
|:-----------|:------------|
{{#each this}}
| {{[0]}}       |<ul>{{#each [1]}}<li>{{this}}</li>{{/each}}</ul>        |
{{/each}}
  `)
console.log(formatter2(philosophers))
