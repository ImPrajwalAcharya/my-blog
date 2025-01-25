class Post {
    constructor(id, title, excerpt, image, date, author, minutes, views, contentFileNAme) {
        this.id = id;
        this.title = title;
        this.contentFileName = contentFileNAme;
        this.excerpt = excerpt;
        this.image = image;
        this.date = date;
        this.author = author;
        this.minutes = minutes;
        this.views = views;

    }
}


const posts = [
    new Post(
        1,
        "My First Blog Post",
        "This is a simple paragraph explaining the contents of the blog post.",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "2022-01-05",
        "John Doe",
        5,
        100,
        "1.md"
    ),
    new Post(
        2,
        "My Second Blog Post",
        "This is a simple paragraph explaining the contents of the blog post.",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "2022-01-01",
        "Jane Doe",
        7,
        200,
        "2.md"
    ),
    new Post(
        3,
        "My Third Blog Post",
        "This is a simple paragraph explaining the contents of the blog post.",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "2022-01-03",
        "John Doe",
        5,
        300,
        "3.md"
    ),
];
export default posts;