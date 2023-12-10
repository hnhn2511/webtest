
import Containermanga from '../../../compunent/appContainermanga';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Manga',
    description: 'Trang Manga của Lib Coop ',
  }

function Manga() {


    return (
        <Containermanga></Containermanga>
    )
}
export default Manga;
