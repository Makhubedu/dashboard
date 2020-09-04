import React from 'react';

import styles from './App.module.css'

import LeftComponet from './components/LeftComonent/LeftComponent';
import RightComponet from './components/RightComponent/RightComponent';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.container__leftComponent}>
                <LeftComponet />
            </div>

            <div className={styles.container__rightComponent}>
                <RightComponet name={''} />

            </div>    
        </div>
    )
}

export default App;
