export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5';
  };
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url?: string | null;
          name: string;
          path: unknown;
          position?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string | null;
          name?: string;
          path?: unknown;
          position?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      consumers: {
        Row: {
          address: string;
          created_at: string;
          id: string;
          phone: string;
          shop_name: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          address: string;
          created_at?: string;
          id?: string;
          phone: string;
          shop_name: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          address?: string;
          created_at?: string;
          id?: string;
          phone?: string;
          shop_name?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'consumers_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      order_items: {
        Row: {
          fulfilled_qty: number;
          id: string;
          order_id: string;
          price_per_unit: number;
          product_id: string;
          requested_qty: number;
        };
        Insert: {
          fulfilled_qty?: number;
          id?: string;
          order_id: string;
          price_per_unit: number;
          product_id: string;
          requested_qty: number;
        };
        Update: {
          fulfilled_qty?: number;
          id?: string;
          order_id?: string;
          price_per_unit?: number;
          product_id?: string;
          requested_qty?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'order_items_order_id_fkey';
            columns: ['order_id'];
            isOneToOne: false;
            referencedRelation: 'orders';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'order_items_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          }
        ];
      };
      orders: {
        Row: {
          consumer_id: string;
          created_at: string;
          delivery_label: string | null;
          id: string;
          status: Database['public']['Enums']['order_status'];
          updated_at: string;
        };
        Insert: {
          consumer_id: string;
          created_at?: string;
          delivery_label?: string | null;
          id?: string;
          status?: Database['public']['Enums']['order_status'];
          updated_at?: string;
        };
        Update: {
          consumer_id?: string;
          created_at?: string;
          delivery_label?: string | null;
          id?: string;
          status?: Database['public']['Enums']['order_status'];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'orders_consumer_id_fkey';
            columns: ['consumer_id'];
            isOneToOne: false;
            referencedRelation: 'consumers';
            referencedColumns: ['id'];
          }
        ];
      };
      products: {
        Row: {
          category_id: string;
          created_at: string;
          delivery_label: string | null;
          id: string;
          image_url: string | null;
          is_best_seller: boolean;
          name: string;
          original_price: number | null;
          pack_size: number;
          price_per_unit: number;
          supplier_id: string;
          updated_at: string;
        };
        Insert: {
          category_id: string;
          created_at?: string;
          delivery_label?: string | null;
          id?: string;
          image_url?: string | null;
          is_best_seller?: boolean;
          name: string;
          original_price?: number | null;
          pack_size: number;
          price_per_unit: number;
          supplier_id: string;
          updated_at?: string;
        };
        Update: {
          category_id?: string;
          created_at?: string;
          delivery_label?: string | null;
          id?: string;
          image_url?: string | null;
          is_best_seller?: boolean;
          name?: string;
          original_price?: number | null;
          pack_size?: number;
          price_per_unit?: number;
          supplier_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'products_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'products_supplier_id_fkey';
            columns: ['supplier_id'];
            isOneToOne: false;
            referencedRelation: 'suppliers';
            referencedColumns: ['id'];
          }
        ];
      };
      suppliers: {
        Row: {
          address: string;
          business_name: string;
          created_at: string;
          id: string;
          phone: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          address: string;
          business_name: string;
          created_at?: string;
          id?: string;
          phone: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          address?: string;
          business_name?: string;
          created_at?: string;
          id?: string;
          phone?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'suppliers_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          created_at: string;
          email: string;
          full_name: string;
          id: string;
          role: Database['public']['Enums']['user_role'];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          full_name: string;
          id?: string;
          role: Database['public']['Enums']['user_role'];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          full_name?: string;
          id?: string;
          role?: Database['public']['Enums']['user_role'];
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_ancestor_categories: {
        Args: { node_path: unknown };
        Returns: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        }[];
        SetofOptions: {
          from: '*';
          to: 'categories';
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      get_child_categories: {
        Args: { parent_path: unknown };
        Returns: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        }[];
        SetofOptions: {
          from: '*';
          to: 'categories';
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      get_descendant_categories: {
        Args: { parent_path: unknown };
        Returns: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        }[];
        SetofOptions: {
          from: '*';
          to: 'categories';
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      get_leaf_categories: {
        Args: never;
        Returns: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        }[];
        SetofOptions: {
          from: '*';
          to: 'categories';
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      get_products_by_root_category: {
        Args: { p_limit?: number; p_offset?: number; p_root_path: string };
        Returns: {
          category_id: string;
          created_at: string;
          delivery_label: string;
          id: string;
          image_url: string;
          is_best_seller: boolean;
          name: string;
          original_price: number;
          pack_size: number;
          price_per_unit: number;
          supplier_id: string;
          total_count: number;
          updated_at: string;
        }[];
      };
      get_root_categories: {
        Args: never;
        Returns: {
          created_at: string;
          id: string;
          image_url: string | null;
          name: string;
          path: unknown;
          position: number;
          updated_at: string;
        }[];
        SetofOptions: {
          from: '*';
          to: 'categories';
          isOneToOne: false;
          isSetofReturn: true;
        };
      };
      get_supplier_id_for_user: {
        Args: { user_uuid: string };
        Returns: string;
      };
    };
    Enums: {
      order_status: 'pending' | 'preparing' | 'shipped' | 'delivered';
      user_role: 'supplier' | 'consumer';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  'public'
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      order_status: ['pending', 'preparing', 'shipped', 'delivered'],
      user_role: ['supplier', 'consumer']
    }
  }
} as const;
