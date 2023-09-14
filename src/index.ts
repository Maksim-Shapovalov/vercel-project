import express, {Request, Response} from 'express'

const app = express();
const port = process.env.PORT || 3000;

const products = [{id:1,name:'tomato'},{id:2,name:'potato'}]

app.get('/', (req: Request, res: Response) =>{
    res.send('Hello Samurai')
})
app.get('/products', (req: Request, res: Response) =>{
    for (let i = 0; i < products.length; i++){
        if (products){
            res.send(products[i])
        }else {
            res.send(404)
        }
    }
    res.send('Hello Samurai')
})



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})