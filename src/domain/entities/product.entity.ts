export interface ReconstructProductParams {
  id: string;
  supplierId: string;
  categoryId: string;
  name: string;
  pricePerUnit: number;
  originalPrice: number | null;
  packSize: number;
  isBestSeller: boolean;
  deliveryLabel: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

type ProductConstructorParams = {
  id: string;
  supplierId: string;
  categoryId: string;
  name: string;
  pricePerUnit: number;
  originalPrice: number | null;
  packSize: number;
  isBestSeller: boolean;
  deliveryLabel: string | null;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class Product {
  private constructor(private readonly _props: ProductConstructorParams) {}

  static reconstruct(params: ReconstructProductParams): Product {
    return new Product(params);
  }

  get id() {
    return this._props.id;
  }
  get supplierId() {
    return this._props.supplierId;
  }
  get categoryId() {
    return this._props.categoryId;
  }
  get name() {
    return this._props.name;
  }
  get pricePerUnit() {
    return this._props.pricePerUnit;
  }
  get originalPrice() {
    return this._props.originalPrice;
  }
  get packSize() {
    return this._props.packSize;
  }
  get isBestSeller() {
    return this._props.isBestSeller;
  }
  get deliveryLabel() {
    return this._props.deliveryLabel;
  }
  get imageUrl() {
    return this._props.imageUrl;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get updatedAt() {
    return this._props.updatedAt;
  }

  toJSON() {
    return {
      id: this._props.id,
      supplierId: this._props.supplierId,
      categoryId: this._props.categoryId,
      name: this._props.name,
      pricePerUnit: this._props.pricePerUnit,
      originalPrice: this._props.originalPrice,
      packSize: this._props.packSize,
      isBestSeller: this._props.isBestSeller,
      deliveryLabel: this._props.deliveryLabel,
      imageUrl: this._props.imageUrl,
      createdAt: this._props.createdAt.toISOString(),
      updatedAt: this._props.updatedAt.toISOString()
    };
  }
}

export type ProductData = ReturnType<Product['toJSON']>;
