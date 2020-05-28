exports.handler = async(event,context)=>{
    console.log("An error occured!");
    console.log("A log message!");
    console.info("An informative message!");
    console.warn("A warining meesage!");

    const error = new Error('Error occured!');
    throw error;
}


