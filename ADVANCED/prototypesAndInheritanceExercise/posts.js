function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() { return `Post: ${this.title}\nContent: ${this.content}` }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        get comments() { return this._comments; }

        addComment(value) {
            this._comments.push(value);
        }

        toString() {
            let outputArr = [];
            outputArr.push(super.toString(), `Rating: ${this.likes - this.dislikes}`);

            if (this._comments.length == 0) return outputArr.join('\n');

            outputArr.push('Comments:')
            this._comments.forEach(comment => outputArr.push(` * ${comment}`));
            return outputArr.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`
        };
    }

    return { Post, SocialMediaPost, BlogPost }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());