import express, {Express} from 'express';
import compression from "compression"
import helmet from "helmet"

const app: Express = express();

// console.log(`whats compression ${compression}`)
app.use(compression)

export const server = app.listen(1111, () => {
    console.log(`[server]: Server is running at https://localhost:1111`);
})

