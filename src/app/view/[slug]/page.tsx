
import { Metadata, ResolvingMetadata } from 'next';
import View from '../../../../compunent/appView';

export function generateMetadata(
    { searchParams, params }: { searchParams: { spid: number | undefined }; params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    // read route params
    const slug = params.slug;
    const parts = slug.split('-p')[0]

    // Bước 1: Loại bỏ dấu gạch ngang và chuyển đổi chữ cái đầu mỗi từ thành in hoa
    let words: string[] = parts.split("-");
    let processedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    let word2 = decodeURIComponent(processedWords);

    // Giới hạn số từ trong chuỗi
    function limitWords(string: string, wordLimit: number) {
        let words = string.split(' ');
        let truncated = words.slice(0, wordLimit).join(' ');
        return truncated;
    }
    const wordlimit = limitWords(word2, 15)

    return Promise.resolve({
        title: `Xem ${word2} tại tanlang.click - Miễn Phí Anime Manga JAV Online`,
        description: `Trang Tổng Hợp Manga , Anime , Fc2 , Av , Subtitle Từ Khắp Mọi Nơi Trên Internet , ${wordlimit}`,
    });
}

function Title({ searchParams, params }: { searchParams: { sbid: number | undefined }; params: { slug: string } }) {

    // Lấy id
    const slug = params.slug;
    const parts = slug.split('-p')[1]
    const parts2 = parts.split('.html')[0]

    // Lấy bảng
    const bangid = searchParams.sbid;

    let bang = '';

    if (bangid == 1) {
        bang = 'mangahome'
    }
    if (bangid == 2) {
        bang = 'videohome'
    }

    return (
        <>

            <View itemsBang={bang} itemsId={parts2} />

        </>

    )
}
export default Title;
