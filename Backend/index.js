import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import productRoutes from "./routes/product.route.js" 
import categoryRoutes from "./routes/category.route.js"
import orderRoutes from "./routes/order.route.js"
import paymentRoutes from "./routes/payment.route.js"
import couponRoutes from "./routes/coupon.route.js"



dotenv.config({});

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));


//API's
app.use("/api/v1/user",userRoute);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/coupons', couponRoutes);



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
