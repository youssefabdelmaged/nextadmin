import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = RegExp(q, "i");
  const itemperpage = 2;

  try {
    connectToDB();
    const count = await User.find({userName: { $regex: regex } }).count()

    const users = await  User.find({ userName: { $regex: regex } })
      .limit(itemperpage)
      .skip(itemperpage * (page - 1));
    return {count,users};
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch users");
  }
};


export const fetchUser = async (id) => {
  

  try {
    connectToDB();

    const users = await  User.findById(id)
      
    return users
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch user");
  }
};


export const fetchProduct = async (q, page) => {
  const regex = RegExp(q, "i");
  const itemperpage = 2;

  try {
    connectToDB();
    const count = await Product.find({title: { $regex: regex } }).count()

    const products = await  Product.find({ title: { $regex: regex } })
      .limit(itemperpage)
      .skip(itemperpage * (page - 1));
    return {count,products};
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch products");
  }
};

export const fetchsingleProduct = async (id) => {
  

  try {
    connectToDB();

    const product = await  Product.findById(id)
      
    return product
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch product");
  }
};
