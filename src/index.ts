
import app from './app';



function main(){
    app.listen(6505,()=>{
        console.log("Server activo");
    });
}
main();