const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/t_education',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfuly');
    } catch (error) {
        console.log('Connect fail');
        
    }
}
module.exports = { connect };
