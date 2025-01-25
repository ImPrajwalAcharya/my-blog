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
export default Post