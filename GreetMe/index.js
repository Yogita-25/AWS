exports.handler = async (event, context) => {
    const data = event.data;
    let newImage = await resizeImage();
    return newImage;
}

const resizeImage = (data) => new Promise((resolve, reject) => {
    if (error) {
        reject(error);
    } else {
        resolve(result);
    }
});