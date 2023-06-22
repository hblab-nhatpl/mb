import {useState } from 'react';

import styles from './header.module.scss';
import imgUrl from '../../assets/motionBankLogo.svg';
import { HeaderButton } from '../buttons/Button';

export function Header() {
    const [activeButton, setActiveButton] = useState<string>('');
    const onButtonClick = (title: string) => {
        setActiveButton(title)
    };

    const headerButtonContent = [
        {
            id: 1,
            title: 'About',
            navigateUrl: '/about'
        },
        {
            id: 2,
            title: 'Company',
            navigateUrl: '/company'
        },
        {
            id: 3,
            title: 'Contact',
            navigateUrl: '/contact'
        },
        {
            id: 4,
            title: 'EN/JP',
            navigateUrl: null
        }
    ];
    
    return <header className={styles.header}>
        <div className={styles.header_logo}>
            <img src={imgUrl} alt="Temporary logo" />
        </div>
        <div className={styles.header_button}>
            {
                headerButtonContent.map(content => <HeaderButton 
                    isActive  = { content.title === activeButton} 
                    onClick={onButtonClick} key={content.id} 
                    title={content.title} 
                    navigateUrl={content.navigateUrl} />)
            }
        </div>
    </header>
}