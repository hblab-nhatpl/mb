import { useNavigate } from "react-router-dom";
import styles from './button.module.scss'

interface IButton {
    title: string,
    navigateUrl: string,
}

export function HeaderButton(props: IButton) {
    const navigate = useNavigate();
    const { title, navigateUrl } = props
    const onClick = () => {
        navigate(navigateUrl);
    }
    return <button onClick={onClick} className={styles.header_button}>
        {title}
    </button>
}