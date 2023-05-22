import { v4 as uuidv4 } from 'uuid';

const mockPopularDish = [
    {
        productName: "Pizza Hải Sản Pesto Xanh",
        productPrice: 169000,
        productImage: "./images/mock-images/popular-pizza-1.jpg",
        productDescription: "Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh",
        id: uuidv4()
    },
    {
        productName: "Pizza Hải Sản Cao Cấp",
        productPrice: 149000,
        productImage: "./images/mock-images/popular-pizza-2.jpg",
        productDescription: "Tôm, cua, mực và nghêu với sốt Marinara",
        id: uuidv4()
    },
    {
        productName: "Pizza Thịt Xông Khói",
        productPrice: 139000,
        productImage: "./images/mock-images/popular-pizza-3.jpg",
        productDescription: "Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua",
        id: uuidv4()
    },
    {
        productName: "Pizza 5 Loại Thịt Đặc Biệt",
        productPrice: 139000,
        productImage: "./images/mock-images/popular-pizza-4.jpg",
        productDescription: "Xúc xích lợn và bò đặc trưng của Ý, giăm bông, thịt xông khói",
        id: uuidv4()
    }
]

export default mockPopularDish