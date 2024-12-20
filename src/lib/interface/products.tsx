export interface Products {
  readonly data: Product[];
}

export interface Product {
  readonly id: number;
  readonly name: string;
  readonly category_name: string;
  readonly nutrition: string;
  readonly description: string;
  readonly product_img: string;
  readonly link_product: LinkProduct;
}

export enum LinkProduct {
  Empty = "",
  Xxxxxd = "xxxxxd",
}
