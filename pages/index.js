import Head from 'next/head';
import Post from './components/Post';

export default function Home() {

  const copyEmail = () => {
    navigator.clipboard.writeText("example@example.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div>
      <Head>
        <title>/biz/ - Biz Coin Will Flip Bits-coin</title>
        <meta name="description" content="Anon&apos;s /biz/coin - the ultimate crypto kek for financial frens & market memers alike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="container">
          <h1>/biz/ - biz coin will flip bits-coin</h1>
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
              image="/vitabo.jpg"
              // video="/mp41.mp4"
              timestamp="05/04/2023"
              buttons={[
                { text: 'Buy Now', onClick: () => console.log('Buy Now clicked') },
                { text: 'View Chart', onClick: () => console.log('View Chart clicked') },
              ]}
            />
            <Post
              title="Who is biz For?"
              content="Anon&apos;s /biz/coin - the ultimate crypto kek for financial frens & market memers alike!"
              timestamp="05/04/2023"
            />
            <Post
              title="Tokenomics:"
              content={[
                "Total Supply: 420,420,420,420 $biz",
                "89% of the supply was sent to the Uniswap liquidity pool and then Locked",
                "11% supply is reserved for future CEX listings and giveaways so $bizcan grow and more bizards can join",
                "'Tis time for the biz to rise!",
              ]}
              image="/img1.jpg"
              timestamp="05/04/2023"
            />
            <Post
              title="Roadmap:"
              content={[
                "Phase 1: Launch and Build Community of 1000 $biz holders ",
                "Phase 2: Small CEX listings, and $biz in the nooz",
                "Biz Labs incorporation and Tier 1 CEX listings",
                "No irl generational wealth meetups?",
              ]}
              image="/logo.png"
              timestamp="05/04/2023"
            />
             <Post
              title="Contact us (Email below)"
              content="व्यवसायिक पूछताछ कृपया वरिष्ठ अधिकारी और सीईओ के मेल पते पर अग्रेषित करें:"
              image="/jeet2.jpg"
              timestamp="05/04/2023"
            />
          </div>
        </main>

      <footer>
        <div className="footer">
        <p>
        © biz coin - 2023 |{" "}
        <span className="footer-email" onClick={copyEmail}>
        bizcoin69@proton.me
        </span>
      </p>
        </div>
      </footer>
    </div>
  );
}
