const NewBlog = ({ handleBlog, title, author, url, setAuthor, setTitle, setUrl }) => {
  return (
    <>
      <form onSubmit={handleBlog}>
        <h1>Add Blog</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            name="title"
            id="title"
            onChange={({ target }) => setTitle(target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            name="author"
            id="author"
            onChange={({ target }) => setAuthor(target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="url">Url</label>
          <input
            type="text"
            value={url}
            name="url"
            id="url"
            onChange={({ target }) => setUrl(target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default NewBlog;
