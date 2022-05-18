
import { Router, Request, Response } from "express";
import IProduct from "../interfaces/Product";
import Product from '../models/Product';

const router = Router();
type Products = Array<IProduct>;

router.get('/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const productsByCategory: Products = await Product.find({ category });

        if (productsByCategory.length) {
            return res.json(productsByCategory);
        }

        return res.status(404).send(`Not found products by the category ${category}`);
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const foundProduct: IProduct | null = await Product.findOne({ _id: id });
        if (foundProduct) {
            return res.json(foundProduct);
        }
        return res.status(404).send('Not found product');
    } catch (err) {
        res.status(500).send({ message: "Something went wrong" });
    }
});


router.post('/addProduct', async (req: Request, res: Response) => {
    try {
        const {
            name,
            company,
            price,
            description,
            discountPrice,
            extraData,
            collection,
            category,
            imageUrl,
        } = req.body;

        await Product.create(name, company, price, description, discountPrice, extraData, collection, category, imageUrl);
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, message: "Something went wrong" });
    }
});

router.put('/update', async (req: Request, res: Response) => {
    const {
        name,
        company,
        price,
        description,
        discountPrice,
        extraData,
        collection,
        category,
        imageUrl,
        id
    } = req.body;
    try {
        await Product.findOneAndUpdate({ _id: id }, {
            $set: {
                name,
                company,
                price,
                description,
                discountPrice,
                extraData,
                collection,
                category,
                imageUrl,
            }
        })
        res.status(200).json({ success: true })
    } catch (error) {
        res.send(500).json({ success: false, message: error })
    }
})



export default router;