
interface IParams {
    paramid: params

}

// Context
interface ContextProps {
    getinput: string,
    setInput: Dispatch<SetStateAction<string>>,
    getdataVideohome:  DataFromAPIvideohome | null,
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

// Props Home
interface IHome{
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

