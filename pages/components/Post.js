const Post = ({ title, content, image, timestamp }) => {
    return (
      <div className="post">
        <div className="post-info">
          <span>Anonymous</span>
          <span> ({timestamp})</span>
          <span> No. 123456</span>
        </div>
        <div className="post-content-wrapper">
          {image && (
            <img src={image} alt="Post related" className="post-image" />
          )}
          <div className="post-text">
            <h3 className="post-title">{title}</h3>
            <p className="post-content">{content}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Post;
  