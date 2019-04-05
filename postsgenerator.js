const path = require('path');
const fs = require('fs');
const fm = require('front-matter');

const markdownDir = path.resolve(__dirname, 'posts');
const publicDir = path.resolve(__dirname, 'public');

let posts = getPosts();
savePostList(posts);
savePosts(posts);

/**
 * Gets an array of posts.
 * @returns { Array } posts
 */
function getPosts() {
    if (!fs.existsSync(markdownDir)) {
        throw new Error('markdown source directory does not exist.');
    }
    let posts = [];
    fs.readdirSync(markdownDir).forEach(fileName => {
        let filePath = path.resolve(markdownDir, fileName);
        let stats = fs.statSync(filePath);
        let data = fs.readFileSync(filePath, 'utf8');
        let content = fm(data);
        let body = content.body;
        let attributes = content.attributes;

        let post = {
            path: `/posts/${attributes.title.toLowerCase().replace(/\s+/g, '-').trim()}`,
            title: attributes.title,
            date: new Date(attributes.date) || stats.birthtime,
            modifiedDate: stats.mtime,
            tags: attributes.tags ? attributes.tags.split(/[,|;]\s*/) : [],
            category: attributes.category,
            intro: attributes.intro ? attributes.intro : '',
            body: body
        };
        posts.push(post);
    });
    // sort by creation date
    posts.sort((a, b) => {
        let timeA = (new Date(a.date)).getTime();
        let timeB = (new Date(b.date)).getTime();
        return timeB - timeA;
    });
    return posts;
}

/**
 * Saves the post list to `postList.json`.
 * @param { Array } posts
 */
function savePostList(posts) {
    let filePath = path.resolve(publicDir, 'postList.json');
    let list = posts.map(post => {
        let item = {};
        for (let key in post) {
            if (key !== 'body') {
                item[key] = post[key];
            }
        }
        return item;
    });
    let data = JSON.stringify(list);
    fs.writeFileSync(filePath, data, 'utf8');
}

/**
 * Saves each post to a JSON file.
 * @param { Array } posts
 */
function savePosts(posts) {
    let postsDir = path.resolve(publicDir, 'posts');
    if (fs.existsSync(postsDir)) {
        fs.readdirSync(postsDir).forEach(fileName => {
            fs.unlinkSync(path.resolve(postsDir, fileName));
        });
    } else {
        fs.mkdirSync(postsDir);
    }
    posts.forEach(post => {
        let fileName = `${post.title.toLowerCase().replace(/\s+/g, '-')}.json`;
        let filePath = path.resolve(postsDir, fileName);
        let data = JSON.stringify(post);
        fs.writeFileSync(filePath, data, 'utf8');
    });
}