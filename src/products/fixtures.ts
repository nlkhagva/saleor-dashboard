import {
  AttributeInputTypeEnum,
  WeightUnitsEnum
} from "@saleor/types/globalTypes";

import { ProductDetails_product } from "./types/ProductDetails";
import { ProductList_products_edges_node } from "./types/ProductList";
import { ProductVariant } from "@saleor/fragments/types/ProductVariant";
import { ProductVariantCreateData_product } from "./types/ProductVariantCreateData";
import { content } from "../storybook/stories/components/RichTextEditor";
import { warehouseList } from "@saleor/warehouses/fixtures";

export const product: (
  placeholderImage: string
) => ProductDetails_product &
  ProductVariantCreateData_product = placeholderImage => ({
  __typename: "Product" as const,
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as const,
        id: "pta18161",
        inputType: AttributeInputTypeEnum.DROPDOWN,
        name: "Borders",
        slug: "Borders",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals"
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav47282",
          name: "portals",
          slug: "portals"
        }
      ]
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as const,
        id: "pta22785",
        inputType: AttributeInputTypeEnum.MULTISELECT,
        name: "Legacy",
        slug: "Legacy",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment"
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account"
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden"
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav14907",
          name: "Auto Loan Account",
          slug: "Auto-Loan-Account"
        }
      ]
    }
  ],
  availableForPurchase: null,
  basePrice: {
    __typename: "Money" as const,
    amount: 339.39,
    currency: "NZD",
    localized: "339.39 NZD"
  },
  category: {
    __typename: "Category",
    id: "Q2F0ZWdvcnk6MQ==",
    name: "Apparel",
    parent: null
  },
  ushop: {
    __typename: "Ushop",
    id: "Q2F0ZWdvcnk6MQ==",
    name: "Apparel",
    parent: null
  },
  chargeTaxes: true,
  collections: [
    {
      __typename: "Collection",
      id: "Q29sbGVjdGlvbjoy",
      name: "Winter sale"
    }
  ],
  defaultVariant: { __typename: "ProductVariant", id: "pv75934" },
  descriptionJson: JSON.stringify(content),
  id: "p10171",
  images: [
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOjE=",
      sortOrder: 0,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOaE=",
      sortOrder: 2,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UPJvZHVjdEltYWdlOjV=",
      sortOrder: 1,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYHdlOjX=",
      sortOrder: 3,
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdIlnYWdlOjX=",
      sortOrder: 4,
      url: placeholderImage
    }
  ],
  isAvailable: false,
  isAvailableForPurchase: false,
  isFeatured: false,
  isPublished: true,
  margin: { __typename: "Margin", start: 2, stop: 7 },
  metadata: [
    {
      __typename: "MetadataItem",
      key: "integration.id",
      value: "100023123"
    }
  ],
  name: "Ergonomic Plastic Bacon",
  pricing: {
    __typename: "ProductPricingInfo",
    priceRangeUndiscounted: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 12.3,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 10,
          currency: "USD"
        }
      },
      stop: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 24.6,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 20,
          currency: "USD"
        }
      }
    }
  },
  privateMetadata: [],
  productType: {
    __typename: "ProductType",
    hasVariants: true,
    id: "pt76406",
    name: "Versatile",
    taxType: {
      __typename: "TaxType",
      description: "standard",
      taxCode: "standard"
    },
    variantAttributes: [
      {
        __typename: "Attribute",
        id: "pta18161",
        name: "Color",
        slug: "color",
        sortOrder: 0,
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptvav47282",
            name: "Black",
            slug: "black",
            sortOrder: 0
          },
          {
            __typename: "AttributeValue",
            id: "ptvav17253",
            name: "White",
            slug: "white",
            sortOrder: 1
          }
        ]
      }
    ]
  },
  publicationDate: "2018-08-25T18:45:54.125Z",
  purchaseCost: {
    __typename: "MoneyRange",
    start: {
      __typename: "Money",
      amount: 339.39,
      currency: "NZD",
      localized: "339.39 NZD"
    },
    stop: {
      __typename: "Money",
      amount: 678.78,
      currency: "NZD",
      localized: "678.78 NZD"
    }
  },
  seoDescription: "Seo description",
  seoTitle: "Seo title",
  sku: "59661-34207",
  slug: "Borders",
  taxType: {
    __typename: "TaxType",
    description: "standard",
    taxCode: "standard"
  },
  thumbnail: { __typename: "Image" as const, url: placeholderImage },
  url: "/example-url",
  usale: 0,
  variants: [
    {
      __typename: "ProductVariant",
      id: "pv75934",
      images: [
        {
          __typename: "ProductImage",
          id: "pi92837",
          url: placeholderImage
        },
        {
          __typename: "ProductImage",
          id: "pi92838",
          url: placeholderImage
        }
      ],
      margin: 2,
      name: "Cordoba Oro",
      price: {
        __typename: "Money",
        amount: 678.78,
        currency: "USD"
      },
      sku: "87192-94370",
      stocks: [
        {
          __typename: "Stock",
          id: "1",
          quantity: 1,
          quantityAllocated: 0,
          warehouse: warehouseList[0]
        },
        {
          __typename: "Stock",
          id: "2",
          quantity: 4,
          quantityAllocated: 2,
          warehouse: warehouseList[1]
        }
      ],
      trackInventory: true,
      weight: {
        __typename: "Weight",
        unit: WeightUnitsEnum.KG,
        value: 3
      }
    },
    {
      __typename: "ProductVariant",
      id: "pv68615",
      images: [
        {
          __typename: "ProductImage",
          id: "pi81234",
          url: placeholderImage
        },
        {
          __typename: "ProductImage",
          id: "pi1236912",
          url: placeholderImage
        }
      ],
      margin: 7,
      name: "silver",
      price: null,
      sku: "69055-15190",
      stocks: [
        {
          __typename: "Stock",
          id: "1",
          quantity: 13,
          quantityAllocated: 2,
          warehouse: warehouseList[0]
        }
      ],
      trackInventory: false,
      weight: {
        __typename: "Weight",
        unit: WeightUnitsEnum.KG,
        value: 4
      }
    }
  ],
  visibleInListings: true,
  wasPrice: 0,
  weight: {
    __typename: "Weight",
    unit: WeightUnitsEnum.KG,
    value: 5
  }
});
export const products = (
  placeholderImage: string
): ProductList_products_edges_node[] => [
  {
    __typename: "Product",
    attributes: [],
    id: "UHJvZHVjdDo2MQ==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Nebula Night Sky Paint",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [],
    id: "UHJvZHVjdDo2NA==",
    isAvailable: true,
    isPublished: false,
    metadata: [],
    name: "Light Speed Yellow Paint",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [],
    id: "UHJvZHVjdDo2NQ==",
    isAvailable: true,
    isPublished: false,
    metadata: [],
    name: "Hyperspace Turquoise Paint",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6Nw==",
      name: "Paint"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6MQ==",
            name: "Pineapple"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3NQ==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Pineapple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6Mg==",
            name: "Coconut"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3Ng==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Coconut Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6Mw==",
            name: "Apple"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3Mg==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Apple Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NDk=",
            name: "Orange"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3MQ==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Orange Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTA=",
            name: "Banana"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3NA==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Banana Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTE=",
            name: "Bean"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3OQ==",
    isAvailable: true,
    isPublished: false,
    metadata: [],
    name: "Bean Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTI=",
            name: "Carrot"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3Mw==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Carrot Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjE2"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NTM=",
            name: "Sprouty"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo3OA==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Green Juice",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6OQ==",
      name: "Juice"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo4OQ==",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Code Division T-shirt",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMDc=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Polo Shirt",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMDg=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMDk=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Polo Shirt",
    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMTA=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Polo Shirt",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMTU=",
    isAvailable: true,
    isPublished: false,
    metadata: [],
    name: "Black Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMTY=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Blue Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjI1"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6ODI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDoxMTc=",
    isAvailable: true,
    isPublished: true,
    metadata: [],
    name: "Mustard Hoodie",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTQ=",
      name: "Top (clothing)"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  },
  {
    __typename: "Product",
    attributes: [
      {
        __typename: "SelectedAttribute",
        attribute: {
          __typename: "Attribute",
          id: "QXR0cmlidXRlOjIz"
        },
        values: [
          {
            __typename: "AttributeValue",
            id: "QXR0cmlidXRlVmFsdWU6NzI=",
            name: "Cotton"
          }
        ]
      }
    ],
    id: "UHJvZHVjdDo4NQ==",
    isAvailable: true,
    isPublished: false,
    metadata: [],
    name: "Colored Parrot Cushion",

    pricing: {
      __typename: "ProductPricingInfo",
      priceRangeUndiscounted: {
        __typename: "TaxedMoneyRange",
        start: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 3,
            currency: "USD"
          }
        },
        stop: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            amount: 8,
            currency: "USD"
          }
        }
      }
    },
    productType: {
      __typename: "ProductType",
      hasVariants: true,
      id: "UHJvZHVjdFR5cGU6MTI=",
      name: "Cushion"
    },
    thumbnail: {
      __typename: "Image",
      url: placeholderImage
    }
  }
];

export const variant = (placeholderImage: string): ProductVariant => ({
  __typename: "ProductVariant",
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as const,
        id: "pta18161",
        name: "Borders",
        slug: "Borders",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals"
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav47282",
          name: "portals",
          slug: "portals"
        }
      ]
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute" as const,
        id: "pta22785",
        name: "Legacy",
        slug: "Legacy",
        valueRequired: true,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment"
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account"
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden"
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override"
          }
        ]
      },
      values: [
        {
          __typename: "AttributeValue",
          id: "ptav14907",
          name: "Auto Loan Account",
          slug: "Auto-Loan-Account"
        }
      ]
    }
  ],
  costPrice: {
    __typename: "Money",
    amount: 12,
    currency: "USD"
  },
  id: "var1",
  images: [
    {
      __typename: "ProductImage",
      id: "img1",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img2",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img7",
      url: placeholderImage
    },
    {
      __typename: "ProductImage",
      id: "img8",
      url: placeholderImage
    }
  ],
  metadata: [
    {
      __typename: "MetadataItem",
      key: "integration.id",
      value: "100023123"
    }
  ],
  name: "Extended Hard",
  price: {
    __typename: "Money",
    amount: 100,
    currency: "USD"
  },
  privateMetadata: [],
  product: {
    __typename: "Product" as const,
    id: "prod1",
    images: [
      {
        __typename: "ProductImage",
        alt: "Front",
        id: "img1",
        sortOrder: 1,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Back",
        id: "img2",
        sortOrder: 4,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Right side",
        id: "img3",
        sortOrder: 2,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Left side",
        id: "img4",
        sortOrder: 3,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Paper",
        id: "img5",
        sortOrder: 0,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Hard cover",
        id: "img6",
        sortOrder: 1,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Extended version",
        id: "img7",
        sortOrder: 0,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Cut version",
        id: "img8",
        sortOrder: 2,
        url: placeholderImage
      },
      {
        __typename: "ProductImage",
        alt: "Soft cover",
        id: "img9",
        sortOrder: 2,
        url: placeholderImage
      }
    ],
    name: "Our Awesome Book",
    thumbnail: { __typename: "Image" as const, url: placeholderImage },
    variants: [
      {
        __typename: "ProductVariant",
        id: "var1",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Hard",
        sku: "13-1337"
      },
      {
        __typename: "ProductVariant",
        id: "var2",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Soft",
        sku: "13-1338"
      },
      {
        __typename: "ProductVariant",
        id: "var3",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Hard",
        sku: "13-1339"
      },
      {
        __typename: "ProductVariant",
        id: "var4",
        images: [
          {
            __typename: "ProductImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Soft",
        sku: "13-1340"
      }
    ]
  },
  sku: "1230959124123",
  stocks: [
    {
      __typename: "Stock",
      id: "1",
      quantity: 1,
      quantityAllocated: 1,
      warehouse: {
        __typename: "Warehouse",
        id: "123",
        name: "Warehouse 1"
      }
    },
    {
      __typename: "Stock",
      id: "2",
      quantity: 4,
      quantityAllocated: 2,
      warehouse: {
        __typename: "Warehouse",
        id: "1234",
        name: "Warehouse 2"
      }
    }
  ],
  trackInventory: true,
  weight: {
    __typename: "Weight",
    unit: WeightUnitsEnum.KG,
    value: 6
  }
});
export const variantImages = (placeholderImage: string) =>
  variant(placeholderImage).images;
export const variantProductImages = (placeholderImage: string) =>
  variant(placeholderImage).product.images;
export const variantSiblings = (placeholderImage: string) =>
  variant(placeholderImage).product.variants;
