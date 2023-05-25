import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </section>
        <section>
          <div>
            <input type="text" placeholder="Shorten a link here..." />
            <button>Shorten It!</button>
          </div>
        </section>
        <section>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <section>
          <div>
            Brand Recognition Boost your brand recognition with each click.
            Generic links don’t mean a thing. Branded links help instil
            confidence in your content.
          </div>
          <div>
            Detailed Records Gain insights into who is clicking your links.
            Knowing when and where people engage with your content helps inform
            better decisions.
          </div>
          <div>
            Fully Customizable Improve brand awareness and content
            discoverability through customizable links, supercharging audience
            engagement.
          </div>
        </section>
        <div>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </main>
      <footer>
        <div></div>
        <div></div>
        <div></div>
        Features Link Shortening Branded Links Analytics Resources Blog
        Developers Support Company About Our Team Careers Contact
      </footer>
    </>
  );
}
