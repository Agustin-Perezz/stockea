export interface ReconstructCategoryParams {
  id: string;
  name: string;
  path: string;
  position: number;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

type CategoryConstructorParams = {
  id: string;
  name: string;
  path: string;
  position: number;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class Category {
  private constructor(private readonly _props: CategoryConstructorParams) {}

  static reconstruct(params: ReconstructCategoryParams): Category {
    return new Category(params);
  }

  get id() {
    return this._props.id;
  }
  get name() {
    return this._props.name;
  }
  get path() {
    return this._props.path;
  }
  get position() {
    return this._props.position;
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
      name: this._props.name,
      path: this._props.path,
      position: this._props.position,
      imageUrl: this._props.imageUrl,
      createdAt: this._props.createdAt.toISOString(),
      updatedAt: this._props.updatedAt.toISOString()
    };
  }
}

export type CategoryData = ReturnType<Category['toJSON']>;
