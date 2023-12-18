
import Link from 'next/link'
import facebook from '../styles/facebook.module.css';

function Footer() {

    return (
        <>
            {/* IV.Footer */}
            <footer style={{ marginTop: '25px' }}>
                <div className={facebook.footer}>
                    <div className={facebook.footerLine} >
                        <Link href={'#'} className={facebook.footerLinelink} >Top</Link>
                    </div>

                    <div className={facebook.footerText}>
                        <p className={facebook.footerTextp}>Trang tổng hợp từ các nguồn khác nhau trên Internet,
                            copyright © 2023 <a href='https://forms.gle/p73q2u2gzKQjmae16' style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>Tân Lang</a></p>
                    </div>
                </div>
            </footer>

        </>
    )
}


export default Footer;