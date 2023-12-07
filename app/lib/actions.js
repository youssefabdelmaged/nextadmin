"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";

export const addUser = async (formData) => {
  const { userName, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedpassword,
      phone,
      isAdmin,
      isActive,
      address,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("faild to create user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, userName, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      userName,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("faild to create user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const DeleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("faild to Delete User");
  }

  revalidatePath("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,

      price,
      stock,
      color,
      size,
      desc,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("faild to create product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const DeleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("faild to Delete product");
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      price,
      stock,
      color,
      size,
      desc,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("faild to create prduct");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (prev,formData) => {

  const { userName, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { userName, password });
    
  } catch (error) {
    return "wrong credentials"
  }
};
