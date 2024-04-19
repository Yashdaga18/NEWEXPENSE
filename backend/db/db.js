const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://yashdagasit22:zqwEugdo0EirzJnP@cluster0.twosv3b.mongodb.net/?retryWrites=true&w=majority')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB