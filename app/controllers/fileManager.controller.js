const { FileManagerModel } = require("../models/index.model");
const path = require('path');

const uploadMedia = async (req, res) => {
    try {
        const store = JSON.parse(req.body.user_data);
        if (store.media_type === 'file') {
            for (let i = 0; i < req.files.length; i++) {
                await FileManagerModel.create({
                    parent_id: store.parent_id,
                    media_type: store.media_type,
                    media_name: req.files[i].filename,
                });
            }
        } else {
            await FileManagerModel.create({
                parent_id: store.parent_id,
                media_type: store.media_type,
                media_name: store.folder,
            });
        }
        return res.status(200).send({
            message: 'Data added successfully',
            code: 200
        })
    } catch (error) {
        console.log('uploadMedia --> error:- ', error);
        return res.status(500).send({
            message: 'uploadMedia --> error',
            code: 500
        })
    }
}

const findAllMedia = async (req, res) => {
    try {
        const store = req.body;
        const output = await FileManagerModel.find(store);
        return res.status(200).send({
            message: 'Data added successfully',
            data: output,
            code: 200
        })
    } catch (error) {
        console.log('findAllMedia --> error:- ', error);
        return res.status(500).send({
            message: 'findAllMedia --> error',
            code: 500
        })
    }
}

const fetchImage = async (req, res) => {
    try {
        const store = req.params;
        const output = await FileManagerModel.findOne({
            _id: store.id
        });
        return res.sendFile(path.join(__dirname, '..', 'uploads', output.media_name));
    } catch (error) {
        console.log('fetchImage --> error:- ', error);
        return res.status(500).send({
            message: 'fetchImage --> error',
            code: 500
        })
    }
}

module.exports = { uploadMedia, findAllMedia, fetchImage }