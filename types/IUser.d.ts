
interface IParams {
    paramid: params

}

// Props /manga
interface IDatacopManga {
    itemsManga: itemManga[]
}

interface itemManga {
    id: number,
    name: string,
    image: string,
    Dayupload: string,
    view: number,
    thongtin: string,
    code: string,
    sotap: string,
    Pagefull: {
        [episodeName: string]: Episode | string; // Danh sách các tập hoặc trạng thái rỗng (nếu chưa có trang)
    }
}

interface IDatacopMangachapter {
    itemsName: string;
    itemsPagefull: {
        [episodeName: string]: Page; // Danh sách các tập hoặc trạng thái rỗng (nếu chưa có trang)
    }
    itemsEp: number
}

interface Episode {
    [episodeName: string]: Page, // Danh sách các trang trong một tập
}

interface Page {
    [pageNumber: string]: string, // Link của từng trang
}


// Props /video
interface IDatacop {
    items: item[]
}

interface item {
    id: number,
    Title: string,
    image: string,
    imagesize: string,
    Dayupload: string,
    view: number,
    type: string,
    streamwish: string,
    maychukhac: string,
    torrent: string,
    imageinfo: string,
    subject: string,
    code: string,
    imageinfosize: string,
    stars: string,
    starsinfo: string
}


// Context
interface ContextProps {
    getinput: string,
    setInput: Dispatch<SetStateAction<string>>,
    getdataVideo: DataFromAPI | null,
    getdataManga: DataFromAPImanga | null
}
// getdataVideo
interface DataFromAPI {
    [key: string]: {
        Title: string,
        image: string,
        imagesize: string,
        Dayupload: string,
        view: number,
        type: string,
        streamwish: string,
        maychukhac: string,
        torrent: string,
        imageinfo: string,
        subject: string,
        code: string,
        imageinfosize: string,
        stars: string,
        starsinfo: string
    };
}
// getdataManga
interface DataFromAPImanga {
    [key: string]: {
        name: string,
        image: string,
        Dayupload: string,
        view: number,
        thongtin: string,
        Pagefull: object,
        code: string,
        sotap: string
    };
}

interface IGetdata {
    getdatas: item[]
}
