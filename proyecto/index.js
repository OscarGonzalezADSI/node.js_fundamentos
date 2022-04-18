const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.promise = global.promise;
mongoose.connect("mongodb://localhost:27017/facturas", {}).then(()=>{
    app.listen(3800, ()=>{
        console.log("servidor iniciado.");
    });
}).catch(err => {
    console.log(err.message);
});
