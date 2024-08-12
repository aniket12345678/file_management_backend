const uploadMedia = (req, res) => {
    try {
        console.log('this is uploadMedia function');
        console.log('req.body:- ', req.body);
    } catch (error) {
        console.log('error:- ', error);

    }
}

module.exports = { uploadMedia }