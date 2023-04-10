import noImage from '../assets/no-image-placeholder.webp'
const getCroppedImageUrl = (url:string) => {
    if(!url) return noImage;
    const index = url.indexOf("/media",21) + "/media".length;
    //console.log(url)
    //console.log("index", index)
    return url.slice(0, index) + "/crop/600/400" + url.slice(index);
}

export default getCroppedImageUrl 