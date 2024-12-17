const fs = require('fs');

const readableStream = fs.createReadStream('somethingtoRead.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (e) {
        console.error(e);
    }
})


readableStream.on('end', () => {
    console.log('done');
})