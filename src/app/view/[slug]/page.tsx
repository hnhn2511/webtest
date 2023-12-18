
import { Metadata, ResolvingMetadata } from 'next';
import View from '../../../../compunent/appView';

export function generateMetadata(
    { searchParams, params }: { searchParams: { spid: number | undefined }; params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    // read route params
    const slug = params.slug;
    const parts = slug.split('-p')[0]

    return Promise.resolve({
        title: parts,
    });
}

function Title({ searchParams, params }: { searchParams: { sbid: number | undefined }; params: { slug: string } }) {

    // Lấy id
    const slug = params.slug;
    const parts = slug.split('-p')[1]
    const parts2 = parts.split('.html')[0]

    // Lấy bảng
    const bangid= searchParams.sbid;

    let bang = '';

    if (bangid == 1) {
        bang = 'mangahome'
    }
    if(bangid == 2){
        bang = 'videohome'
    }
    
    return (
        <>

            <View itemsBang={bang} itemsId={parts2}/>

        </>

    )
}
export default Title;
