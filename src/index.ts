import express, {Request, Response} from 'express'

const app = express();
const port = process.env.PORT || 3000;

const products = [{id:1,name:'tomato'},{id:2,name:'potato'}]

app.get('/', (req: Request, res: Response) =>{
    res.send('My little baby')
})
app.get('/products', (req: Request, res: Response) =>{
    res.send(products)
})



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})