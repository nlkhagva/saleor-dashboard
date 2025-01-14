import appsIcon from "@assets/images/menu-apps-icon.svg";
import catalogIcon from "@assets/images/menu-catalog-icon.svg";
import customerIcon from "@assets/images/menu-customers-icon.svg";
import homeIcon from "@assets/images/menu-home-icon.svg";
import ordersIcon from "@assets/images/menu-orders-icon.svg";
import packageIcon from "@assets/images/menu-package-icon.svg";
import translationIcon from "@assets/images/menu-translation-icon.svg";
import { gaduurListUrl } from "@saleor/gaduur/urls";
import { commonMessages, sectionNames } from "@saleor/intl";
import { packageListUrl } from "@saleor/package/urls";
import { IntlShape } from "react-intl";

import { appsListPath } from "../../apps/urls";
import { categoryListUrl } from "../../categories/urls";
import { collectionListUrl } from "../../collections/urls";
import { customerListUrl } from "../../customers/urls";
import { orderDraftListUrl, orderListUrl } from "../../orders/urls";
import { productAddFbLivePath, productListUrl } from "../../products/urls";
import { languageListUrl } from "../../translations/urls";
import { PermissionEnum } from "../../types/globalTypes";

// import discountsIcon from "@assets/images/menu-discounts-icon.svg";
// import { saleListUrl, voucherListUrl } from "../../discounts/urls";
export interface IMenuItem {
  ariaLabel: string;
  children?: IMenuItem[];
  icon?: any;
  label: string;
  permission?: PermissionEnum;
  testingContextId: string;
  url?: string;
}

function createMenuStructure(intl: IntlShape): IMenuItem[] {
  return [
    {
      ariaLabel: "home",
      icon: homeIcon,
      label: intl.formatMessage(sectionNames.home),
      testingContextId: "home",
      url: "/"
    },
    {
      ariaLabel: "orders",
      children: [
        {
          ariaLabel: "orders",
          label: intl.formatMessage(sectionNames.orders),
          permission: PermissionEnum.MANAGE_ORDERS,
          testingContextId: "orders",
          url: orderListUrl()
        },
        {
          ariaLabel: "order drafts",
          label: intl.formatMessage(commonMessages.drafts),
          permission: PermissionEnum.MANAGE_ORDERS,
          testingContextId: "order drafts",
          url: orderDraftListUrl()
        }
      ],
      icon: ordersIcon,
      label: intl.formatMessage(sectionNames.orders),
      permission: PermissionEnum.MANAGE_ORDERS,
      testingContextId: "orders"
    },
    {
      ariaLabel: "catalogue",
      children: [
        {
          ariaLabel: "products",
          label: intl.formatMessage(sectionNames.products),
          testingContextId: "products",
          url: productListUrl()
        },
        {
          ariaLabel: "categories",
          label: intl.formatMessage(sectionNames.categories),
          testingContextId: "categories",
          url: categoryListUrl()
        },
        {
          ariaLabel: "collections",
          label: intl.formatMessage(sectionNames.collections),
          testingContextId: "collections",
          url: collectionListUrl()
        },
        {
          ariaLabel: "products",
          label: "Facebook Live бараа үүсгэх",
          testingContextId: "productsfacebooklive",
          url: productAddFbLivePath
        }
      ],
      icon: catalogIcon,
      label: intl.formatMessage(commonMessages.catalog),
      permission: PermissionEnum.MANAGE_PRODUCTS,
      testingContextId: "catalogue"
    },
    {
      ariaLabel: "customers",
      icon: customerIcon,
      label: intl.formatMessage(sectionNames.customers),
      permission: PermissionEnum.MANAGE_USERS,
      testingContextId: "customers",
      url: customerListUrl()
    },

    {
      ariaLabel: "package",
      children: [
        {
          ariaLabel: "gaduur",
          label: intl.formatMessage(sectionNames.gaduur),
          testingContextId: "sales",
          url: gaduurListUrl()
        },
        {
          ariaLabel: "package",
          label: intl.formatMessage(sectionNames.package),
          testingContextId: "vouchers",
          url: packageListUrl()
        }
      ],
      icon: packageIcon,
      label: intl.formatMessage(sectionNames.package),
      permission: PermissionEnum.MANAGE_DISCOUNTS,
      testingContextId: "discounts"
    },
    // {
    //   ariaLabel: "discounts",
    //   children: [
    //     {
    //       ariaLabel: "sales",
    //       label: intl.formatMessage(sectionNames.sales),
    //       testingContextId: "sales",
    //       url: saleListUrl()
    //     },
    //     {
    //       ariaLabel: "vouchers",
    //       label: intl.formatMessage(sectionNames.vouchers),
    //       testingContextId: "vouchers",
    //       url: voucherListUrl()
    //     }
    //   ],
    //   icon: discountsIcon,
    //   label: intl.formatMessage(commonMessages.discounts),
    //   permission: PermissionEnum.MANAGE_DISCOUNTS,
    //   testingContextId: "discounts"
    // },
    {
      ariaLabel: "apps",
      icon: appsIcon,
      label: intl.formatMessage(sectionNames.apps),
      permission: PermissionEnum.MANAGE_APPS,
      testingContextId: "apps",
      url: appsListPath
    },
    {
      ariaLabel: "translations",
      icon: translationIcon,
      label: intl.formatMessage(sectionNames.translations),
      permission: PermissionEnum.MANAGE_TRANSLATIONS,
      testingContextId: "translations",
      url: languageListUrl
    }
  ];
}

export default createMenuStructure;
