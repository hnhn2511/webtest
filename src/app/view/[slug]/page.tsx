
import { Metadata } from 'next';
import View from '../../../../compunent/appView';

export async function generateMetadata(
    { searchParams, params }: { searchParams: { sbid: number | undefined }; params: { slug: string } }
): Promise<Metadata> {

    // Lấy id
    const slug = params.slug;
    const parts = slug.split('-p')[1]
    const parts2 = parts.split('.html')[0]

    // fetch data
    const product = await fetch(`${process.env.NEXT_PUBLIC_DATABASE}/videohome/id${parts2}.json`).then((res) => res.json())

    // Giới hạn số từ trong chuỗi
    function limitWords(string: string, wordLimit: number) {
        let words = string.split(' ');
        let truncated = words.slice(0, wordLimit).join(' ');
        return truncated;
    }
    const wordlimit = limitWords(product.name, 15)

    return Promise.resolve({
        title: `Xem ${product.name} tại tanlang.click - Miễn Phí Anime Manga JAV Online`,
        description: `Trang Tổng Hợp Manga , Anime , Fc2 , Av , Subtitle Từ Khắp Mọi Nơi Trên Internet , ${wordlimit}`,
    });
}

function Title({ searchParams, params }: { searchParams: { sbid: number | undefined }; params: { slug: string } }) {

    // Lấy id
    const slug = params.slug;
    const parts = slug.split('-p')[1];
    const parts2 = parts.split('.html')[0];

    return (
        <>

            <View itemsId={parts2} />

        </>

    )
}
export default Title;
