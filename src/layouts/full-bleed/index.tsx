
import { styles } from '../layouts.module.scss';

export default function FullBleedLayout ({children}) {
    return (
        <div className={ styles.master }>
            {children}
        </div>
    );
}