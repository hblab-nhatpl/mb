import { Typography } from "antd";
import styles from "./about.module.scss";

const { Title, Paragraph } = Typography;

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title level={2}>About</Title>
        <Paragraph className={styles.description}>
          <p>
            eMo(eMote/eMotion)によって、デジタル領域(ゲーム/metaverse)でのコミュニケーション活性化に寄与したい。
          </p>
          <p>
            eMo(eMote/eMotion)がより活発に利用される為にも、クリエイター達による発信を活性化させていきたい。
          </p>
        </Paragraph>

        <Paragraph className={styles.description}>
          <p>
            MOTIONBANKはeMo(eMote/eMotion)のデータを自在に扱うことができ、流通し、表現者達がより大きな権利と自由を手にする未来を指向します。
          </p>
        </Paragraph>

        <Paragraph className={styles.description}>
          <p>
            その為の第一歩として、ユーザーが自在にダンスのeMoteデータを組み合せ、自分なりのコレオグラフィーを作り上げることが出来るサービスをリリースします。
          </p>
        </Paragraph>

        <Paragraph className={styles.description}>
          <p>以降順次、MOTIONBANKは機能拡充を続けます。</p>
        </Paragraph>

        <Paragraph className={styles.description}>
          <p>
            <b>eMo(eMote/eMotion)</b>
            の供給(流通)促進。ゲーム/metaverse開発者とユーザーがeMo(eMote/eMotion)を利用(購入)可能なプラットフォームの提供。
          </p>
        </Paragraph>

        <Paragraph className={styles.description}>
          <p>
            <b>eMo(eMote/eMotion)</b>の登録(制作)促進。
            クリエイターがeMo(eMote/eMotion)を登録でき、利益を享受することが出来る仕組み作り。
          </p>
        </Paragraph>
      </div>
    </div>
  );
}
