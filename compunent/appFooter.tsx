
import Link from 'next/link'
import facebook from '../styles/facebook.module.css';

function Footer() {

    return (
        <>
            {/* IV.Footer */}
            <footer style={{marginTop :'25px'}}>
              <div className={facebook.footer}>
                <div className={facebook.footerLine} >
                    <Link href={'#'} className={facebook.footerLinelink} >Top</Link>
                </div>
                <div className={facebook.footerText}>
                    <p className={facebook.footerTextp}>Copyright © 2023 Lib Coop</p>
                </div>
            </div>  
            </footer>
            
        </>
    )
}


export default Footer;