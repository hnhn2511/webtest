
interface IParams {
    paramid: params

}


interface IDatacop {
    items: item[]
}

interface item {
    id:number,
    Title: string,
    image: string,
    imagesize: string,
    Dayupload: string,
    view: number,
    type:string,
    streamwish:string,
    maychukhac:string,
    torrent:string,
    imageinfo:string,
    subject:string,
    code : string,
    imageinfosize:string,
    stars:string,
    starsinfo:string
}

interface ContextProps {
    getinput: string,
    setInput: Dispatch<SetStateAction<string>>,
    data: any,
    error: any,
    isLoading: boolean,
    btn1: string,
    btn2: string,
    handleBtn1: () => void ,
    handleBtn2: () => void,
}

interface IGetdata{
    getdatas : item[]
}
