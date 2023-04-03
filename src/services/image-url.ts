const getCroppedImageUrl = (url:string) => {
    const index = url.indexOf("/media",21) + "/media".length;
    //console.log(url)
    //console.log("index", index)
    return url.slice(0, index) + "/crop/600/400" + url.slice(index);
}

export default getCroppedImageUrl 