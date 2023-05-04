const Post = ({ title, content, image, video, timestamp, buttons }) => {
    // const formattedContent = { __html: content.replace(/\n/g, '<br />') };

    const buyToken = () => {
        window.open(
          "https://app.uniswap.org/#/swap?outputCurrency=0xb1a9b52407d1f373a625bc5aa4fe618a886681e5&chain=mainnet",
          "_blank"
        );
      };
      
    return (
      <div className="post">
        <div className="post-info">
          <span>Anonymous</span>
          <span> ({timestamp})</span>
          <span> No. 123456</span>
        </div>
        <div className="post-content-wrapper">
            {video ? (
            <video src={video} alt="Post related" className="post-video" controls />
            ) : (
            image && <img src={image} alt="Post related" className="post-image" />
            )}
          <div className="post-text">
            <h3 className="post-title">{title}</h3>
              {Array.isArray(content) ? (
                <ul className="post-content-list">
                    {content.map((item, index) => (
                    <li key={index} className="post-content-item">
                        {item}
                    </li>
                    ))}
                </ul>
                ) : (
                <p className="post-content">{content}</p>
                )}
            {buttons && (
          <div className="post-buttons">
            {/* {buttons.map((button, index) => ( */}
              <button key={buttons[0]} className="post-button" onClick={() => {
                window.open(
                    "https://app.uniswap.org/#/swap?outputCurrency=0x39dFD50C197f9288D21A308758DBd080d2Ae8128&chain=mainnet",
                    "_blank"
                  );
              }}>
                {buttons[0].text}
              </button>
              <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x39dFD50C197f9288D21A308758DBd080d2Ae8128"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button variant="outlined" color="primary">
              {buttons[1].text}
              </button>
            </a>
            {/* ))} */}
          </div>
        )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Post;
  