
import styles from './company.module.scss'

export function Company() {
    return <div className={styles.wrapper}>
        <h3 className={styles.title}>Company</h3>
        <div className={styles.item}>
            <p className={styles.sub_title} > &lt; Mission &gt;</p>
            <p>
                Let’s get it !! ～カマす!!～ <br />
                過去から現在、人々にとってはより快適な世界にアップデートされてきました。<br />
                ですが、熱量の不足やネガティブな情報・感情が多くなった時代だとも考えています。<br />
                この時代だからこそ、様々な課題を熱狂的なアプローチで解決できるよう<br />
                私たちは挑戦し続けたいと考えています。<br />
                <br />
                まずは自分達が自分自身でカマすことを連続的にやりきる。結果は必ずついてくる。<br />
                自分達の直感を磨き、わくわくを増やし、それを自分自身が信じること。<br />
                アノマリーとして果たすべき使命とともに、<br />
                スタッフ一人ひとりが「大切にすべき精神」を持ち、<br />
                より豊かな生活を体感できる世界を目指します。<br />
                <br />
                アノマリーだからこそできること、やるべきこと。<br />
                人生を歩む中で、ビジネス・社会に大きなインパクトを与えていく企業としてカマしていきます！<br />
            </p>
        </div>

        <div className={styles.item}>
            <p  className={styles.sub_title} > &lt; Vision &gt;</p>
            <p>
                『わくわくする世界を創り続ける!!』<br />
                2004年に創業したアノマリーは、ダンスで世界を変えることを決め、<br />
                私たちのすべてのつながり、道程、過程、結果はダンスから生まれました。<br />
                ダンスがすべてを創りました。<br />
                そしてこれからもアノマリーが存在する限りその企業観は変わりません。<br />
                <br />
                ダンスで世界を変えることをアノマリーとしての伝統・哲学として刻み、<br />
                他の領域の可能性を追求していきます。<br />
                ダンスの熱量をすべてに伝播させ、わくわくする世界を創り続けます。<br />
            </p>
        </div>

        <div className={styles.item}>
            <p  className={styles.sub_title}> &lt; Infomation &gt;</p>
            <table >
                <tbody>
                    <tr>
                        <td>
                            会社名
                        </td>
                        <td>
                            株式会社アノマリー / anomaly inc.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            設立
                        </td>
                        <td>
                            2004年6月3日
                        </td>
                    </tr>
                    <tr>
                        <td>
                            資本金
                        </td>
                        <td>
                            11,665,600円
                        </td>
                    </tr>
                    <tr>
                        <td>
                            代表者
                        </td>
                        <td>
                            神田 勘太郎
                        </td>
                    </tr>
                    <tr>
                        <td>
                            所在地
                        </td>
                        <td>
                            - ダンスコンテンツ及びストリートカルチャーコンテンツの作成 <br />
                            - 各種イベント、セールスピロモーションの企画・制作・及び運営<br />
                            - エンターテイメントコンテンツの企画・制作 <br />
                            - TV・WEBコマーシャルの映像の企画・制作 <br />
                            - ダンサー及びクリエイターのキャスティング <br />
                            - クリエイターマネジメント業務 <br />
                            - キャラクターの企画・開発及び著作権の管理 <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            所在地
                        </td>
                        <td>
                            〒151-0051 <br />
                            東京都渋谷区千駄ヶ谷1-13-3 <br />
                            カリスマヒルズレジデンス国立競技場前 <br />
                            <br />
                            Mail: <span className={styles.info}>info@anomaly.co.jp</span> <br/>
                            Tel: <span className={styles.info}>03-6804-6919</span> <br />
                            Fax: <span className={styles.info}>03-6804-6920</span> <br />
                            <br />
                            最寄駅<br />
                            千駄ヶ谷駅（JR中央・総武線 徒歩10分） <br />
                            国立競技場駅（都営大江戸線 徒歩10分） <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}