
interface IParams {
    paramid: params

}

// Context
interface ContextProps {
    getinput: string,
    setInput: Dispatch<SetStateAction<string>>,
    getdataVideohome:  DataFromAPIvideohome | null,
    getdataMangahome:  DataFromAPImangahome | null
}

// getdataVideohome
interface DataFromAPIvideohome {
    [key: string]: {
        name: string,
        Dayupload: string,
        download: string,
        type: string,
        watch: string,
        sub: string,
        thongtin :string,
        thum:string[],
        bang:number
    };
}

// getdataMangahome
interface DataFromAPImangahome {
    [key: string]: {
        name: string,
        Dayupload: string,
        download: string,
        type: string,
        watch: string,
        sub: string,
        thongtin:string,
        thum:string[],
        bang:number
    };
}

// Props Home
interface IHome{
    itemsManga :itemMangahome[];
    itemsVideo: itemVideohome[]
}

// Props View
interface IView{
    itemsBang :string,
    itemsId: string
}

interface itemVideohome {
    id: number,
    name: string,
    Dayupload: string,
    type: string,
    download: string,
    watch: string,
    sub: string,
    thongtin:string,
    thum:string[],
    bang:number
}

interface itemMangahome {
    id: number,
    name: string,
    Dayupload: string,
    type: string,
    download: string,
    watch: string,
    sub: string,
    thongtin:string,
    thum:string[],
    bang:number
}

