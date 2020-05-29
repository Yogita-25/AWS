const fs = require('fs');
const os = require('os');
const uuidv4 = require('uuidv4');
const { promisify } = require('util');
const AWS = require('aws-sdk');
const sharp = require('sharp');

AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();     //all these modules are already part of AWS Lambda nodeJs environment hence no need to package them in deployment

exports.handler = async (event) => {
    let filesProcessed = event.Records.map(async (record) => {
        let bucket = record.s3.bucket.name;
        let fileName = record.s3.object.key;

        //get file from s3
        var params = {
            Bucket: bucket,
            Key: fileName
        }

        const inputData = await s3.getObject(params).promise();

       //resize the file
       const buffer = await sharp(inputData.body).resize({ width: 250, height: 250 });

    });

    await Promise.all(filesProcessed);
    console.log("done");
    return "done";
}