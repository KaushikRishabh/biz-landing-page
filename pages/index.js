import Head from 'next/head';
import Post from './components/Post';

export default function Home() {
  return (
    <div>
      <Head>
        <title>/biz/ - Biz Coin Will Flip Bits-coin</title>
        <meta name="description" content="Anon&apos;s /biz/coin - the ultimate crypto kek for financial frens & market memers alike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="container">
          <h1>/biz/</h1>
          <nav>
            {/* <a href="#">Biz</a>
            <a href="#">Tech</a>
            <a href="#">Random</a> */}
          </nav>
        </div>
      </header>

              <main>
          <div className="container">
            <Post
              title="$biz Contract Address:"
              content="0x39dFD50C197f9288D21A308758DBd080d2Ae8128"
              image="https://via.placeholder.com/300"
              timestamp="05/04/2023"
            />
            <Post
              title="Post Title 2"
              content="Anon&apos;s /biz/coin - the ultimate crypto kek for financial frens & market memers alike!"
              timestamp="05/04/2023"
            />
            <Post
              title="Post Title 3"
              content="Sed et urna semper, blandit turpis a, convallis mauris."
              image="https://via.placeholder.com/300"
              timestamp="05/04/2023"
            />
            <Post
              title="Post Title 4"
              content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              timestamp="05/04/2023"
            />
          </div>
        </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 4chan Clone</p>
        </div>
      </footer>
    </div>
  );
}
