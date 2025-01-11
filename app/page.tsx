import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "./_components/NewsList";
import ButtonLInk from "./_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/28",
      createdAt: "2024/12/28",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/12/11",
      createdAt: "2024/12/09",
    },
    {
      id: "3",
      title: "テストの記事っす",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/1/30",
      createdAt: "2023/11/12",
    },
  ],
};

function MyComponent() {
  //scriptの定数や式などを書くことができる
  const sliceData = data.contents.slice(0, 2);
  const name = "ビジネス";
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>お布施の力で{name}を席巻する</h1>
          <p className={styles.description}>
            私たちは「日本」という地政学を汚染している、新興宗教財団です。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLInk href="/news">もっと見る</ButtonLInk>
        </div>
      </section>
    </>
  );
}

export default MyComponent;
