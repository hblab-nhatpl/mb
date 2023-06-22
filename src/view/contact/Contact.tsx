
import styles from './contact.module.scss';

export function Contact() {
    return <div  className={styles.wrapper}> 
        <h3 className={styles.title}>Contact</h3>
        <p className={styles.intro}>
            Thank you for your interest in us. If you have inquiries to our services, fill out the form below. <br />
            ＊is a required field.
        </p>
        <div className={styles.form_wrapper}>
            <form className={styles.form}>
                <div className={styles.form_item}>
                    <label htmlFor="name">Name*</label>
                    <div>
                    <input type="text" name="name" id="" />
                    </div>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="email">E-mail address*</label>
                    <div className={styles.email_inputs}>
                    <input type="text" name="email" id="" />
                    <input type="text" name="email" id="" />
                    </div>
                </div>

                <div className={styles.form_item}>
                    <label htmlFor="country">Country or Region</label>
                    <div>
                    <input type="text" name="country" id="" />
                    </div>
                </div>

                <div className={styles.form_item}>
                    <label htmlFor="service">Service*</label>
                    <div>
                    <input type="text" name="service" id="" />
                    </div>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="request" >How can we help <br /> you?*</label>
                    <div>
                    <textarea name="request" id="" rows={10}></textarea>
                    </div>
                </div>
            </form>
        </div>
        <p className={styles.footer}>
        We (ANOMALY) only use your personal information you provide for the sole purpose of responding your <br/>
        inquiries regarding our services. For more information, please confirm the Privacy Policy on our website.
        </p>
    </div>
}