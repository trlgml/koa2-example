const fs = require('fs');
const path = require('path')

module.exports = {
  async uploadFile(ctx) {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(process.cwd(), 'public/upload/') + `/${file.name}`;
    // 创建可写流
    console.log(filePath);
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);

    return { success: '上传成功', path: '/upload' + `/${file.name}` }
  }

}