import styles from "./page.module.css";
import Image from "next/image";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

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
      publishedAt: "2024/11/30",
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
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <ul>
          {sliceData.map((article) => (
            <li key={article.id} className={styles.list}>
              <div className={styles.link}>
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
                <dl className={styles.content}>
                  <dt className={styles.newsItemTitle}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <span className={styles.tag}>{article.category.name}</span>
                    <span className={styles.date}>
                      <Image
                        src="/clock.svg"
                        alt=""
                        width={16}
                        height={16}
                        priority
                      />
                      {article.publishedAt}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MyComponent;
