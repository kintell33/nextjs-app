import type { NextPage } from "next";
import InfoCentered from "../components/InfoCentered";
import Layout from "../components/Layout";
import Text from "../components/Text";
import Title from "../components/Title";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import translations from "../i18n/translations";

const Home: NextPage = () => {
  const { locale } = useRouter();
  const { index }: any = translations[locale || ""];

  return (
    <div className="container">
      <Layout>
        <div className={styles.container}>
          <InfoCentered>
            <Title>{index.title}</Title>
            <Text>{index.message}</Text>
          </InfoCentered>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
