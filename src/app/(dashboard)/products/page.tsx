"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product, Products } from "@/lib/interface/products";
import { customFetch } from "@/lib/utils";
import { assert } from "console";
import { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res: Promise<Products> = await customFetch("/products");

    const data = (await res).data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category_name}</TableCell>
            <TableCell className="text-right">{product.nutrition}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default ProductsPage;
