const mongoose = require('mongoose');

require("dotenv").config({ path: ".env" })

mongoose.set("strictQuery", false);
mongoose.connect( process.env.MONGODB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
(err, _)=>{
    if(err){
        console.log('Error de conexión')
    }else{
        console.log('Conexión correcta');
    }
}

)