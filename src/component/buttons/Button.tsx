import { useNavigate } from "react-router-dom";
import styles from './button.module.scss'

interface IHeaderButton {
    isActive: boolean,
    title: string,
    navigateUrl: string | null,
    onClick: (title: string) => void
}

export function HeaderButton(props: IHeaderButton) {
    const navigate = useNavigate();
    const { isActive, title, navigateUrl, onClick: handleClick } = props;
    const onClick = () => {
        handleClick(title);
        if(navigateUrl){
            navigate(navigateUrl);
        }
    }
    return <button onClick={onClick} className={`${styles.header_button} ${isActive ? styles.active : null}`}>
        {title}
    </button>
}