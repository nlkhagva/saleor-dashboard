/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum AccountErrorCode {
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  JWT_DECODE_ERROR = "JWT_DECODE_ERROR",
  JWT_INVALID_CSRF_TOKEN = "JWT_INVALID_CSRF_TOKEN",
  JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
  JWT_MISSING_TOKEN = "JWT_MISSING_TOKEN",
  JWT_SIGNATURE_EXPIRED = "JWT_SIGNATURE_EXPIRED",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_SERVICE_ACCOUNT = "OUT_OF_SCOPE_SERVICE_ACCOUNT",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum AddressTypeEnum {
  BILLING = "BILLING",
  SHIPPING = "SHIPPING",
}

/**
 * An enumeration.
 */
export enum AppErrorCode {
  FORBIDDEN = "FORBIDDEN",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_MANIFEST_FORMAT = "INVALID_MANIFEST_FORMAT",
  INVALID_PERMISSION = "INVALID_PERMISSION",
  INVALID_STATUS = "INVALID_STATUS",
  INVALID_URL_FORMAT = "INVALID_URL_FORMAT",
  MANIFEST_URL_CANT_CONNECT = "MANIFEST_URL_CANT_CONNECT",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_APP = "OUT_OF_SCOPE_APP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum AppSortField {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum AppTypeEnum {
  LOCAL = "LOCAL",
  THIRDPARTY = "THIRDPARTY",
}

/**
 * An enumeration.
 */
export enum AttributeInputTypeEnum {
  DROPDOWN = "DROPDOWN",
  MULTISELECT = "MULTISELECT",
}

export enum AttributeSortField {
  AVAILABLE_IN_GRID = "AVAILABLE_IN_GRID",
  FILTERABLE_IN_DASHBOARD = "FILTERABLE_IN_DASHBOARD",
  FILTERABLE_IN_STOREFRONT = "FILTERABLE_IN_STOREFRONT",
  IS_VARIANT_ONLY = "IS_VARIANT_ONLY",
  NAME = "NAME",
  SLUG = "SLUG",
  STOREFRONT_SEARCH_POSITION = "STOREFRONT_SEARCH_POSITION",
  VALUE_REQUIRED = "VALUE_REQUIRED",
  VISIBLE_IN_STOREFRONT = "VISIBLE_IN_STOREFRONT",
}

export enum AttributeTypeEnum {
  PRODUCT = "PRODUCT",
  VARIANT = "VARIANT",
}

export enum AttributeValueType {
  COLOR = "COLOR",
  GRADIENT = "GRADIENT",
  STRING = "STRING",
  URL = "URL",
}

/**
 * An enumeration.
 */
export enum AuthorizationKeyType {
  FACEBOOK = "FACEBOOK",
  GOOGLE_OAUTH2 = "GOOGLE_OAUTH2",
}

export enum CategorySortField {
  NAME = "NAME",
  PRODUCT_COUNT = "PRODUCT_COUNT",
  SUBCATEGORY_COUNT = "SUBCATEGORY_COUNT",
}

export enum CollectionPublished {
  HIDDEN = "HIDDEN",
  PUBLISHED = "PUBLISHED",
}

export enum CollectionSortField {
  AVAILABILITY = "AVAILABILITY",
  NAME = "NAME",
  PRODUCT_COUNT = "PRODUCT_COUNT",
}

/**
 * An enumeration.
 */
export enum ConfigurationTypeFieldEnum {
  BOOLEAN = "BOOLEAN",
  PASSWORD = "PASSWORD",
  SECRET = "SECRET",
  STRING = "STRING",
}

/**
 * An enumeration.
 */
export enum CountryCode {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AX = "AX",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BQ = "BQ",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BV = "BV",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  EU = "EU",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GF = "GF",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GP = "GP",
  GQ = "GQ",
  GR = "GR",
  GS = "GS",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HM = "HM",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MQ = "MQ",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NF = "NF",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PS = "PS",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  SS = "SS",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TF = "TF",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  UM = "UM",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
}

/**
 * An enumeration.
 */
export enum DiscountErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum DiscountStatusEnum {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  SCHEDULED = "SCHEDULED",
}

export enum DiscountValueTypeEnum {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

/**
 * An enumeration.
 */
export enum ExportErrorCode {
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

export enum ExportScope {
  ALL = "ALL",
  FILTER = "FILTER",
  IDS = "IDS",
}

/**
 * An enumeration.
 */
export enum FileTypesEnum {
  CSV = "CSV",
  XLSX = "XLSX",
}

/**
 * An enumeration.
 */
export enum FulfillmentLineUstatus {
  ATUK = "ATUK",
  CANCELED = "CANCELED",
  DELAYED = "DELAYED",
  DRAFT = "DRAFT",
  INMONGOLIA = "INMONGOLIA",
  NEW = "NEW",
  RECEIVED = "RECEIVED",
  SHIPPING = "SHIPPING",
}

/**
 * An enumeration.
 */
export enum FulfillmentStatus {
  CANCELED = "CANCELED",
  FULFILLED = "FULFILLED",
}

/**
 * An enumeration.
 */
export enum FulfillmentUstatus {
  ATUK = "ATUK",
  CANCELED = "CANCELED",
  DELAYED = "DELAYED",
  DRAFT = "DRAFT",
  INMONGOLIA = "INMONGOLIA",
  NEW = "NEW",
  RECEIVED = "RECEIVED",
  SHIPPING = "SHIPPING",
}

/**
 * An enumeration.
 */
export enum GaduurPackageUstatus {
  ATUK = "ATUK",
  CANCELED = "CANCELED",
  DELAYED = "DELAYED",
  DRAFT = "DRAFT",
  INMONGOLIA = "INMONGOLIA",
  NEW = "NEW",
  RECEIVED = "RECEIVED",
  SHIPPING = "SHIPPING",
}

export enum GaduurSortField {
  NAME = "NAME",
  PUBLICATION_DATE = "PUBLICATION_DATE",
  SHIPPING_TYPE = "SHIPPING_TYPE",
  VISIBILITY = "VISIBILITY",
}

/**
 * An enumeration.
 */
export enum InvoiceErrorCode {
  EMAIL_NOT_SET = "EMAIL_NOT_SET",
  INVALID_STATUS = "INVALID_STATUS",
  NOT_FOUND = "NOT_FOUND",
  NOT_READY = "NOT_READY",
  NUMBER_NOT_SET = "NUMBER_NOT_SET",
  REQUIRED = "REQUIRED",
  URL_NOT_SET = "URL_NOT_SET",
}

/**
 * An enumeration.
 */
export enum JobStatusEnum {
  DELETED = "DELETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

/**
 * An enumeration.
 */
export enum LanguageCodeEnum {
  AR = "AR",
  AZ = "AZ",
  BG = "BG",
  BN = "BN",
  CA = "CA",
  CS = "CS",
  DA = "DA",
  DE = "DE",
  EL = "EL",
  EN = "EN",
  ES = "ES",
  ES_CO = "ES_CO",
  ET = "ET",
  FA = "FA",
  FI = "FI",
  FR = "FR",
  HI = "HI",
  HU = "HU",
  HY = "HY",
  ID = "ID",
  IS = "IS",
  IT = "IT",
  JA = "JA",
  KM = "KM",
  KO = "KO",
  LT = "LT",
  MN = "MN",
  MY = "MY",
  NB = "NB",
  NL = "NL",
  PL = "PL",
  PT = "PT",
  PT_BR = "PT_BR",
  RO = "RO",
  RU = "RU",
  SK = "SK",
  SL = "SL",
  SQ = "SQ",
  SR = "SR",
  SV = "SV",
  SW = "SW",
  TA = "TA",
  TH = "TH",
  TR = "TR",
  UK = "UK",
  VI = "VI",
  ZH_HANS = "ZH_HANS",
  ZH_HANT = "ZH_HANT",
}

/**
 * An enumeration.
 */
export enum MenuErrorCode {
  CANNOT_ASSIGN_NODE = "CANNOT_ASSIGN_NODE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_MENU_ITEM = "INVALID_MENU_ITEM",
  NOT_FOUND = "NOT_FOUND",
  NO_MENU_ITEM_PROVIDED = "NO_MENU_ITEM_PROVIDED",
  REQUIRED = "REQUIRED",
  TOO_MANY_MENU_ITEMS = "TOO_MANY_MENU_ITEMS",
  UNIQUE = "UNIQUE",
}

export enum MenuSortField {
  ITEMS_COUNT = "ITEMS_COUNT",
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum MetadataErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
}

export enum OrderAction {
  CAPTURE = "CAPTURE",
  MARK_AS_PAID = "MARK_AS_PAID",
  REFUND = "REFUND",
  VOID = "VOID",
}

export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * An enumeration.
 */
export enum OrderErrorCode {
  BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
  CANNOT_CANCEL_FULFILLMENT = "CANNOT_CANCEL_FULFILLMENT",
  CANNOT_CANCEL_ORDER = "CANNOT_CANCEL_ORDER",
  CANNOT_DELETE = "CANNOT_DELETE",
  CANNOT_REFUND = "CANNOT_REFUND",
  CAPTURE_INACTIVE_PAYMENT = "CAPTURE_INACTIVE_PAYMENT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  FULFILL_ORDER_LINE = "FULFILL_ORDER_LINE",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
  INVALID = "INVALID",
  NOT_EDITABLE = "NOT_EDITABLE",
  NOT_FOUND = "NOT_FOUND",
  ORDER_NO_SHIPPING_ADDRESS = "ORDER_NO_SHIPPING_ADDRESS",
  PAYMENT_ERROR = "PAYMENT_ERROR",
  PAYMENT_MISSING = "PAYMENT_MISSING",
  PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
  PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
  REQUIRED = "REQUIRED",
  SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
  SHIPPING_METHOD_REQUIRED = "SHIPPING_METHOD_REQUIRED",
  TAX_ERROR = "TAX_ERROR",
  UNIQUE = "UNIQUE",
  VOID_INACTIVE_PAYMENT = "VOID_INACTIVE_PAYMENT",
  ZERO_QUANTITY = "ZERO_QUANTITY",
}

/**
 * An enumeration.
 */
export enum OrderEventsEmailsEnum {
  DIGITAL_LINKS = "DIGITAL_LINKS",
  FULFILLMENT_CONFIRMATION = "FULFILLMENT_CONFIRMATION",
  ORDER_CANCEL = "ORDER_CANCEL",
  ORDER_CONFIRMATION = "ORDER_CONFIRMATION",
  ORDER_REFUND = "ORDER_REFUND",
  PAYMENT_CONFIRMATION = "PAYMENT_CONFIRMATION",
  SHIPPING_CONFIRMATION = "SHIPPING_CONFIRMATION",
  TRACKING_UPDATED = "TRACKING_UPDATED",
}

/**
 * An enumeration.
 */
export enum OrderEventsEnum {
  CANCELED = "CANCELED",
  DRAFT_ADDED_PRODUCTS = "DRAFT_ADDED_PRODUCTS",
  DRAFT_CREATED = "DRAFT_CREATED",
  DRAFT_REMOVED_PRODUCTS = "DRAFT_REMOVED_PRODUCTS",
  EMAIL_SENT = "EMAIL_SENT",
  EXTERNAL_SERVICE_NOTIFICATION = "EXTERNAL_SERVICE_NOTIFICATION",
  FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
  FULFILLMENT_FULFILLED_ITEMS = "FULFILLMENT_FULFILLED_ITEMS",
  FULFILLMENT_RESTOCKED_ITEMS = "FULFILLMENT_RESTOCKED_ITEMS",
  INVOICE_GENERATED = "INVOICE_GENERATED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_SENT = "INVOICE_SENT",
  INVOICE_UPDATED = "INVOICE_UPDATED",
  NOTE_ADDED = "NOTE_ADDED",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_MARKED_AS_PAID = "ORDER_MARKED_AS_PAID",
  OTHER = "OTHER",
  OVERSOLD_ITEMS = "OVERSOLD_ITEMS",
  PAYMENT_AUTHORIZED = "PAYMENT_AUTHORIZED",
  PAYMENT_CAPTURED = "PAYMENT_CAPTURED",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  PAYMENT_REFUNDED = "PAYMENT_REFUNDED",
  PAYMENT_VOIDED = "PAYMENT_VOIDED",
  PLACED = "PLACED",
  PLACED_FROM_DRAFT = "PLACED_FROM_DRAFT",
  TRACKING_UPDATED = "TRACKING_UPDATED",
  UPDATED_ADDRESS = "UPDATED_ADDRESS",
}

export enum OrderSortField {
  CREATION_DATE = "CREATION_DATE",
  CUSTOMER = "CUSTOMER",
  FULFILLMENT_STATUS = "FULFILLMENT_STATUS",
  NUMBER = "NUMBER",
  PAYMENT = "PAYMENT",
  TOTAL = "TOTAL",
}

/**
 * An enumeration.
 */
export enum OrderStatus {
  CANCELED = "CANCELED",
  DRAFT = "DRAFT",
  FULFILLED = "FULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  UNFULFILLED = "UNFULFILLED",
}

export enum OrderStatusFilter {
  CANCELED = "CANCELED",
  FULFILLED = "FULFILLED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  READY_TO_CAPTURE = "READY_TO_CAPTURE",
  READY_TO_FULFILL = "READY_TO_FULFILL",
  UNFULFILLED = "UNFULFILLED",
}

/**
 * An enumeration.
 */
export enum PackageNetOrGross {
  GROSS = "GROSS",
  NET = "NET",
}

export enum PackageSortField {
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum PageErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PageSortField {
  CREATION_DATE = "CREATION_DATE",
  PUBLICATION_DATE = "PUBLICATION_DATE",
  SLUG = "SLUG",
  TITLE = "TITLE",
  VISIBILITY = "VISIBILITY",
}

/**
 * An enumeration.
 */
export enum PaymentChargeStatusEnum {
  CANCELLED = "CANCELLED",
  FULLY_CHARGED = "FULLY_CHARGED",
  FULLY_REFUNDED = "FULLY_REFUNDED",
  NOT_CHARGED = "NOT_CHARGED",
  PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
  PENDING = "PENDING",
  REFUSED = "REFUSED",
}

/**
 * An enumeration.
 */
export enum PermissionEnum {
  MANAGE_APPS = "MANAGE_APPS",
  MANAGE_CHECKOUTS = "MANAGE_CHECKOUTS",
  MANAGE_DISCOUNTS = "MANAGE_DISCOUNTS",
  MANAGE_GIFT_CARD = "MANAGE_GIFT_CARD",
  MANAGE_MENUS = "MANAGE_MENUS",
  MANAGE_ORDERS = "MANAGE_ORDERS",
  MANAGE_PAGES = "MANAGE_PAGES",
  MANAGE_PLUGINS = "MANAGE_PLUGINS",
  MANAGE_PRODUCTS = "MANAGE_PRODUCTS",
  MANAGE_SERVICE_ACCOUNTS = "MANAGE_SERVICE_ACCOUNTS",
  MANAGE_SETTINGS = "MANAGE_SETTINGS",
  MANAGE_SHIPPING = "MANAGE_SHIPPING",
  MANAGE_STAFF = "MANAGE_STAFF",
  MANAGE_TRANSLATIONS = "MANAGE_TRANSLATIONS",
  MANAGE_USERS = "MANAGE_USERS",
}

/**
 * An enumeration.
 */
export enum PermissionGroupErrorCode {
  ASSIGN_NON_STAFF_MEMBER = "ASSIGN_NON_STAFF_MEMBER",
  CANNOT_REMOVE_FROM_LAST_GROUP = "CANNOT_REMOVE_FROM_LAST_GROUP",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PermissionGroupSortField {
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum PluginErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  PLUGIN_MISCONFIGURED = "PLUGIN_MISCONFIGURED",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum PluginSortField {
  IS_ACTIVE = "IS_ACTIVE",
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum ProductErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
  ATTRIBUTE_CANNOT_BE_ASSIGNED = "ATTRIBUTE_CANNOT_BE_ASSIGNED",
  ATTRIBUTE_VARIANTS_DISABLED = "ATTRIBUTE_VARIANTS_DISABLED",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  NOT_PRODUCTS_IMAGE = "NOT_PRODUCTS_IMAGE",
  NOT_PRODUCTS_VARIANT = "NOT_PRODUCTS_VARIANT",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
  VARIANT_NO_DIGITAL_CONTENT = "VARIANT_NO_DIGITAL_CONTENT",
}

export enum ProductFieldEnum {
  AVAILABLE_FOR_PURCHASE = "AVAILABLE_FOR_PURCHASE",
  CATEGORY = "CATEGORY",
  CHARGE_TAXES = "CHARGE_TAXES",
  COLLECTIONS = "COLLECTIONS",
  COST_PRICE = "COST_PRICE",
  DESCRIPTION = "DESCRIPTION",
  NAME = "NAME",
  PRODUCT_IMAGES = "PRODUCT_IMAGES",
  PRODUCT_TYPE = "PRODUCT_TYPE",
  PRODUCT_WEIGHT = "PRODUCT_WEIGHT",
  SEARCHABLE = "SEARCHABLE",
  VARIANT_IMAGES = "VARIANT_IMAGES",
  VARIANT_PRICE = "VARIANT_PRICE",
  VARIANT_SKU = "VARIANT_SKU",
  VARIANT_WEIGHT = "VARIANT_WEIGHT",
  VISIBLE = "VISIBLE",
}

export enum ProductOrderField {
  DATE = "DATE",
  MINIMAL_PRICE = "MINIMAL_PRICE",
  NAME = "NAME",
  PRICE = "PRICE",
  PUBLISHED = "PUBLISHED",
  TYPE = "TYPE",
}

export enum ProductTypeConfigurable {
  CONFIGURABLE = "CONFIGURABLE",
  SIMPLE = "SIMPLE",
}

export enum ProductTypeEnum {
  DIGITAL = "DIGITAL",
  SHIPPABLE = "SHIPPABLE",
}

export enum ProductTypeSortField {
  DIGITAL = "DIGITAL",
  NAME = "NAME",
  SHIPPING_REQUIRED = "SHIPPING_REQUIRED",
}

export enum SaleSortField {
  END_DATE = "END_DATE",
  NAME = "NAME",
  START_DATE = "START_DATE",
  TYPE = "TYPE",
  VALUE = "VALUE",
}

/**
 * An enumeration.
 */
export enum SaleType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
}

/**
 * An enumeration.
 */
export enum ShippingErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  MAX_LESS_THAN_MIN = "MAX_LESS_THAN_MIN",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum ShippingMethodTypeEnum {
  PRICE = "PRICE",
  WEIGHT = "WEIGHT",
}

/**
 * An enumeration.
 */
export enum ShopErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CANNOT_FETCH_TAX_RATES = "CANNOT_FETCH_TAX_RATES",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum StaffMemberStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}

export enum StockAvailability {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

/**
 * An enumeration.
 */
export enum StockErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum TaxRateType {
  ACCOMMODATION = "ACCOMMODATION",
  ADMISSION_TO_CULTURAL_EVENTS = "ADMISSION_TO_CULTURAL_EVENTS",
  ADMISSION_TO_ENTERTAINMENT_EVENTS = "ADMISSION_TO_ENTERTAINMENT_EVENTS",
  ADMISSION_TO_SPORTING_EVENTS = "ADMISSION_TO_SPORTING_EVENTS",
  ADVERTISING = "ADVERTISING",
  AGRICULTURAL_SUPPLIES = "AGRICULTURAL_SUPPLIES",
  BABY_FOODSTUFFS = "BABY_FOODSTUFFS",
  BIKES = "BIKES",
  BOOKS = "BOOKS",
  CHILDRENS_CLOTHING = "CHILDRENS_CLOTHING",
  DOMESTIC_FUEL = "DOMESTIC_FUEL",
  DOMESTIC_SERVICES = "DOMESTIC_SERVICES",
  E_BOOKS = "E_BOOKS",
  FOODSTUFFS = "FOODSTUFFS",
  HOTELS = "HOTELS",
  MEDICAL = "MEDICAL",
  NEWSPAPERS = "NEWSPAPERS",
  PASSENGER_TRANSPORT = "PASSENGER_TRANSPORT",
  PHARMACEUTICALS = "PHARMACEUTICALS",
  PROPERTY_RENOVATIONS = "PROPERTY_RENOVATIONS",
  RESTAURANTS = "RESTAURANTS",
  SOCIAL_HOUSING = "SOCIAL_HOUSING",
  STANDARD = "STANDARD",
  WATER = "WATER",
  WINE = "WINE",
}

export enum UserSortField {
  EMAIL = "EMAIL",
  FIRST_NAME = "FIRST_NAME",
  LAST_NAME = "LAST_NAME",
  ORDER_COUNT = "ORDER_COUNT",
}

export enum UshopSortField {
  NAME = "NAME",
  PUBLICATION_DATE = "PUBLICATION_DATE",
  URL = "URL",
  VISIBILITY = "VISIBILITY",
}

export enum VoucherDiscountType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
  SHIPPING = "SHIPPING",
}

export enum VoucherSortField {
  CODE = "CODE",
  END_DATE = "END_DATE",
  MINIMUM_SPENT_AMOUNT = "MINIMUM_SPENT_AMOUNT",
  START_DATE = "START_DATE",
  TYPE = "TYPE",
  USAGE_LIMIT = "USAGE_LIMIT",
  VALUE = "VALUE",
}

export enum VoucherTypeEnum {
  ENTIRE_ORDER = "ENTIRE_ORDER",
  SHIPPING = "SHIPPING",
  SPECIFIC_PRODUCT = "SPECIFIC_PRODUCT",
}

/**
 * An enumeration.
 */
export enum WarehouseErrorCode {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum WarehouseSortField {
  NAME = "NAME",
}

/**
 * An enumeration.
 */
export enum WebhookErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum WebhookEventTypeEnum {
  ANY_EVENTS = "ANY_EVENTS",
  CHECKOUT_CREATED = "CHECKOUT_CREATED",
  CHECKOUT_QUANTITY_CHANGED = "CHECKOUT_QUANTITY_CHANGED",
  CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
  CUSTOMER_CREATED = "CUSTOMER_CREATED",
  FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
  INVOICE_DELETED = "INVOICE_DELETED",
  INVOICE_REQUESTED = "INVOICE_REQUESTED",
  INVOICE_SENT = "INVOICE_SENT",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  ORDER_CREATED = "ORDER_CREATED",
  ORDER_FULFILLED = "ORDER_FULFILLED",
  ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
  ORDER_UPDATED = "ORDER_UPDATED",
  PRODUCT_CREATED = "PRODUCT_CREATED",
  PRODUCT_UPDATED = "PRODUCT_UPDATED",
}

export enum WebhookSortField {
  APP = "APP",
  NAME = "NAME",
  SERVICE_ACCOUNT = "SERVICE_ACCOUNT",
  TARGET_URL = "TARGET_URL",
}

/**
 * An enumeration.
 */
export enum WeightUnitsEnum {
  G = "G",
  KG = "KG",
  LB = "LB",
  OZ = "OZ",
}

export interface AddressInput {
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  streetAddress1?: string | null;
  streetAddress2?: string | null;
  city?: string | null;
  cityArea?: string | null;
  postalCode?: string | null;
  country?: CountryCode | null;
  countryArea?: string | null;
  phone?: string | null;
}

export interface AppFilterInput {
  search?: string | null;
  isActive?: boolean | null;
  type?: AppTypeEnum | null;
}

export interface AppInput {
  name?: string | null;
  isActive?: boolean | null;
  permissions?: (PermissionEnum | null)[] | null;
}

export interface AppInstallInput {
  appName?: string | null;
  manifestUrl?: string | null;
  activateAfterInstallation?: boolean | null;
  permissions?: (PermissionEnum | null)[] | null;
}

export interface AppSortingInput {
  direction: OrderDirection;
  field: AppSortField;
}

export interface AppTokenInput {
  name?: string | null;
  app: string;
}

export interface AttributeAssignInput {
  id: string;
  type: AttributeTypeEnum;
}

export interface AttributeCreateInput {
  inputType?: AttributeInputTypeEnum | null;
  name: string;
  slug?: string | null;
  values?: (AttributeValueCreateInput | null)[] | null;
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  storefrontSearchPosition?: number | null;
  availableInGrid?: boolean | null;
}

export interface AttributeFilterInput {
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  availableInGrid?: boolean | null;
  search?: string | null;
  ids?: (string | null)[] | null;
  inCollection?: string | null;
  inCategory?: string | null;
}

export interface AttributeInput {
  slug: string;
  value?: string | null;
  values?: (string | null)[] | null;
}

export interface AttributeSortingInput {
  direction: OrderDirection;
  field: AttributeSortField;
}

export interface AttributeUpdateInput {
  name?: string | null;
  slug?: string | null;
  removeValues?: (string | null)[] | null;
  addValues?: (AttributeValueCreateInput | null)[] | null;
  valueRequired?: boolean | null;
  isVariantOnly?: boolean | null;
  visibleInStorefront?: boolean | null;
  filterableInStorefront?: boolean | null;
  filterableInDashboard?: boolean | null;
  storefrontSearchPosition?: number | null;
  availableInGrid?: boolean | null;
}

export interface AttributeValueCreateInput {
  name: string;
}

export interface AttributeValueInput {
  id?: string | null;
  values: (string | null)[];
}

export interface AuthorizationKeyInput {
  key: string;
  password: string;
}

export interface CatalogueInput {
  products?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  collections?: (string | null)[] | null;
}

export interface CategoryFilterInput {
  search?: string | null;
  ids?: (string | null)[] | null;
}

export interface CategoryInput {
  description?: string | null;
  descriptionJson?: any | null;
  name?: string | null;
  slug?: string | null;
  seo?: SeoInput | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
}

export interface CategorySortingInput {
  direction: OrderDirection;
  field: CategorySortField;
}

export interface CollectionCreateInput {
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
  descriptionJson?: any | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
  seo?: SeoInput | null;
  publicationDate?: any | null;
  products?: (string | null)[] | null;
}

export interface CollectionFilterInput {
  published?: CollectionPublished | null;
  search?: string | null;
  ids?: (string | null)[] | null;
}

export interface CollectionInput {
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  description?: string | null;
  descriptionJson?: any | null;
  backgroundImage?: any | null;
  backgroundImageAlt?: string | null;
  seo?: SeoInput | null;
  publicationDate?: any | null;
}

export interface CollectionSortingInput {
  direction: OrderDirection;
  field: CollectionSortField;
}

export interface ConfigurationItemInput {
  name: string;
  value?: string | null;
}

export interface CrawlerInput {
  url?: string | null;
  completed?: boolean | null;
  productCount?: number | null;
  jsonData?: any | null;
  productSelection?: string | null;
  listSelection?: string | null;
}

export interface CrawlerLineInput {
  crawler?: string | null;
  product?: string | null;
  url?: string | null;
  uproductSelection?: string | null;
  uoptions?: any | null;
  price?: any | null;
  wasPrice?: any | null;
  syncAt?: any | null;
}

export interface CustomerFilterInput {
  dateJoined?: DateRangeInput | null;
  moneySpent?: PriceRangeInput | null;
  numberOfOrders?: IntRangeInput | null;
  placedOrders?: DateRangeInput | null;
  search?: string | null;
}

export interface CustomerInput {
  defaultBillingAddress?: AddressInput | null;
  defaultShippingAddress?: AddressInput | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
}

export interface DateRangeInput {
  gte?: any | null;
  lte?: any | null;
}

export interface DateTimeRangeInput {
  gte?: any | null;
  lte?: any | null;
}

export interface DraftOrderInput {
  billingAddress?: AddressInput | null;
  user?: string | null;
  userEmail?: string | null;
  discount?: any | null;
  shippingAddress?: AddressInput | null;
  shippingMethod?: string | null;
  voucher?: string | null;
  customerNote?: string | null;
}

export interface ExportInfoInput {
  attributes?: string[] | null;
  warehouses?: string[] | null;
  fields?: ProductFieldEnum[] | null;
}

export interface ExportProductsInput {
  scope: ExportScope;
  filter?: ProductFilterInput | null;
  ids?: string[] | null;
  exportInfo?: ExportInfoInput | null;
  fileType: FileTypesEnum;
}

export interface FulfillmentCancelInput {
  warehouseId: string;
}

export interface FulfillmentUpdateTrackingInput {
  trackingNumber?: string | null;
  notifyCustomer?: boolean | null;
}

export interface GaduurFilterInput {
  ustatus?: string | null;
  search?: string | null;
}

export interface GaduurInput {
  name?: string | null;
  shippingType?: string | null;
  isPublished?: boolean | null;
  publicationDate?: string | null;
  ustatus?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  receivedDate?: string | null;
  trackingNumber?: string | null;
}

export interface GaduurSortingInput {
  direction: OrderDirection;
  field: GaduurSortField;
}

export interface IntRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface MenuCreateInput {
  name: string;
  items?: (MenuItemInput | null)[] | null;
}

export interface MenuItemCreateInput {
  name: string;
  url?: string | null;
  category?: string | null;
  collection?: string | null;
  page?: string | null;
  menu: string;
  parent?: string | null;
}

export interface MenuItemInput {
  name?: string | null;
  url?: string | null;
  category?: string | null;
  collection?: string | null;
  page?: string | null;
}

export interface MenuItemMoveInput {
  itemId: string;
  parentId?: string | null;
  sortOrder?: number | null;
}

export interface MenuSortingInput {
  direction: OrderDirection;
  field: MenuSortField;
}

export interface MetadataInput {
  key: string;
  value: string;
}

export interface NameTranslationInput {
  name?: string | null;
}

export interface OrderAddNoteInput {
  message: string;
}

export interface OrderDraftFilterInput {
  customer?: string | null;
  created?: DateRangeInput | null;
  search?: string | null;
}

export interface OrderFilterInput {
  paymentStatus?: (PaymentChargeStatusEnum | null)[] | null;
  status?: (OrderStatusFilter | null)[] | null;
  customer?: string | null;
  created?: DateRangeInput | null;
  search?: string | null;
}

export interface OrderFulfillInput {
  lines: OrderFulfillLineInput[];
  notifyCustomer?: boolean | null;
  trackingNumber?: string | null;
  ukDate?: any | null;
}

export interface OrderFulfillLineInput {
  orderLineId?: string | null;
  stocks: OrderFulfillStockInput[];
}

export interface OrderFulfillStockInput {
  quantity: number;
  warehouse: string;
}

export interface OrderLineCreateInput {
  quantity: number;
  variantId: string;
}

export interface OrderLineInput {
  quantity: number;
}

export interface OrderSortingInput {
  direction: OrderDirection;
  field: OrderSortField;
}

export interface OrderUpdateInput {
  billingAddress?: AddressInput | null;
  userEmail?: string | null;
  shippingAddress?: AddressInput | null;
}

export interface OrderUpdateShippingInput {
  shippingMethod?: string | null;
}

export interface PackageFilterInput {
  search?: string | null;
}

export interface PackageInput {
  name?: string | null;
  upostPK?: string | null;
  lines?: (PackageLineInput | null)[] | null;
  shippingAddressId?: string | null;
  senderAddressId?: string | null;
  width?: any | null;
  height?: any | null;
  length?: any | null;
  netWeight?: any | null;
  grossWeight?: any | null;
  perkgAmount?: any | null;
  netOrGross?: string | null;
  gaduur?: string | null;
}

export interface PackageLineInput {
  name?: string | null;
  quantity: number;
  unitPriceAmount: any;
  fulfillmentlineId?: string | null;
}

export interface PackageSortingInput {
  direction: OrderDirection;
  field: PackageSortField;
}

export interface PageFilterInput {
  search?: string | null;
}

export interface PageInput {
  slug?: string | null;
  title?: string | null;
  content?: string | null;
  contentJson?: any | null;
  isPublished?: boolean | null;
  publicationDate?: string | null;
  seo?: SeoInput | null;
}

export interface PageSortingInput {
  direction: OrderDirection;
  field: PageSortField;
}

export interface PageTranslationInput {
  seoTitle?: string | null;
  seoDescription?: string | null;
  title?: string | null;
  content?: string | null;
  contentJson?: any | null;
}

export interface PermissionGroupCreateInput {
  addPermissions?: PermissionEnum[] | null;
  addUsers?: string[] | null;
  name: string;
}

export interface PermissionGroupFilterInput {
  search?: string | null;
}

export interface PermissionGroupSortingInput {
  direction: OrderDirection;
  field: PermissionGroupSortField;
}

export interface PermissionGroupUpdateInput {
  addPermissions?: PermissionEnum[] | null;
  addUsers?: string[] | null;
  name?: string | null;
  removePermissions?: PermissionEnum[] | null;
  removeUsers?: string[] | null;
}

export interface PluginFilterInput {
  active?: boolean | null;
  search?: string | null;
}

export interface PluginSortingInput {
  direction: OrderDirection;
  field: PluginSortField;
}

export interface PluginUpdateInput {
  active?: boolean | null;
  configuration?: (ConfigurationItemInput | null)[] | null;
}

export interface PriceRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface ProductCreateInput {
  attributes?: (AttributeValueInput | null)[] | null;
  publicationDate?: any | null;
  category?: string | null;
  chargeTaxes?: boolean | null;
  collections?: (string | null)[] | null;
  description?: string | null;
  descriptionJson?: any | null;
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  taxCode?: string | null;
  seo?: SeoInput | null;
  weight?: any | null;
  sku?: string | null;
  trackInventory?: boolean | null;
  wasPrice?: any | null;
  usale?: any | null;
  basePrice?: any | null;
  ushop?: string | null;
  visibleInListings?: boolean | null;
  productType: string;
  stocks?: StockInput[] | null;
}

export interface ProductFilterInput {
  isPublished?: boolean | null;
  collections?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  hasCategory?: boolean | null;
  attributes?: (AttributeInput | null)[] | null;
  stockAvailability?: StockAvailability | null;
  productType?: string | null;
  stocks?: ProductStockFilterInput | null;
  search?: string | null;
  price?: PriceRangeInput | null;
  minimalPrice?: PriceRangeInput | null;
  productTypes?: (string | null)[] | null;
}

export interface ProductInput {
  attributes?: (AttributeValueInput | null)[] | null;
  publicationDate?: any | null;
  category?: string | null;
  chargeTaxes?: boolean | null;
  collections?: (string | null)[] | null;
  description?: string | null;
  descriptionJson?: any | null;
  isPublished?: boolean | null;
  name?: string | null;
  slug?: string | null;
  taxCode?: string | null;
  seo?: SeoInput | null;
  weight?: any | null;
  sku?: string | null;
  trackInventory?: boolean | null;
  wasPrice?: any | null;
  usale?: any | null;
  basePrice?: any | null;
  ushop?: string | null;
  visibleInListings?: boolean | null;
}

export interface ProductOrder {
  direction: OrderDirection;
  attributeId?: string | null;
  field?: ProductOrderField | null;
}

export interface ProductStockFilterInput {
  warehouseIds?: string[] | null;
  quantity?: IntRangeInput | null;
}

export interface ProductTypeFilterInput {
  search?: string | null;
  configurable?: ProductTypeConfigurable | null;
  productType?: ProductTypeEnum | null;
  ids?: (string | null)[] | null;
}

export interface ProductTypeInput {
  name?: string | null;
  slug?: string | null;
  hasVariants?: boolean | null;
  productAttributes?: (string | null)[] | null;
  variantAttributes?: (string | null)[] | null;
  isShippingRequired?: boolean | null;
  isDigital?: boolean | null;
  weight?: any | null;
  taxCode?: string | null;
}

export interface ProductTypeSortingInput {
  direction: OrderDirection;
  field: ProductTypeSortField;
}

export interface ProductVariantBulkCreateInput {
  attributes: (AttributeValueInput | null)[];
  costPrice?: any | null;
  price?: any | null;
  sku: string;
  trackInventory?: boolean | null;
  weight?: any | null;
  stocks?: StockInput[] | null;
}

export interface ProductVariantCreateInput {
  attributes: (AttributeValueInput | null)[];
  costPrice?: any | null;
  price?: any | null;
  sku?: string | null;
  trackInventory?: boolean | null;
  weight?: any | null;
  product: string;
  stocks?: StockInput[] | null;
}

export interface ProductVariantInput {
  attributes?: (AttributeValueInput | null)[] | null;
  costPrice?: any | null;
  price?: any | null;
  sku?: string | null;
  trackInventory?: boolean | null;
  weight?: any | null;
}

export interface ReorderInput {
  id: string;
  sortOrder?: number | null;
}

export interface SaleFilterInput {
  status?: (DiscountStatusEnum | null)[] | null;
  saleType?: DiscountValueTypeEnum | null;
  started?: DateTimeRangeInput | null;
  search?: string | null;
}

export interface SaleInput {
  name?: string | null;
  type?: DiscountValueTypeEnum | null;
  value?: any | null;
  products?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  collections?: (string | null)[] | null;
  startDate?: any | null;
  endDate?: any | null;
}

export interface SaleSortingInput {
  direction: OrderDirection;
  field: SaleSortField;
}

export interface SeoInput {
  title?: string | null;
  description?: string | null;
}

export interface ShippingPriceInput {
  name?: string | null;
  price?: any | null;
  minimumOrderPrice?: any | null;
  maximumOrderPrice?: any | null;
  minimumOrderWeight?: any | null;
  maximumOrderWeight?: any | null;
  type?: ShippingMethodTypeEnum | null;
  shippingZone?: string | null;
}

export interface ShippingZoneCreateInput {
  name?: string | null;
  countries?: (string | null)[] | null;
  default?: boolean | null;
  addWarehouses?: (string | null)[] | null;
}

export interface ShippingZoneUpdateInput {
  name?: string | null;
  countries?: (string | null)[] | null;
  default?: boolean | null;
  addWarehouses?: (string | null)[] | null;
  removeWarehouses?: (string | null)[] | null;
}

export interface ShopSettingsInput {
  headerText?: string | null;
  description?: string | null;
  includeTaxesInPrices?: boolean | null;
  displayGrossPrices?: boolean | null;
  chargeTaxesOnShipping?: boolean | null;
  trackInventoryByDefault?: boolean | null;
  defaultWeightUnit?: WeightUnitsEnum | null;
  automaticFulfillmentDigitalProducts?: boolean | null;
  defaultDigitalMaxDownloads?: number | null;
  defaultDigitalUrlValidDays?: number | null;
  defaultMailSenderName?: string | null;
  defaultMailSenderAddress?: string | null;
  customerSetPasswordUrl?: string | null;
}

export interface SiteDomainInput {
  domain?: string | null;
  name?: string | null;
}

export interface StaffCreateInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  addGroups?: string[] | null;
  redirectUrl?: string | null;
}

export interface StaffUpdateInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  addGroups?: string[] | null;
  removeGroups?: string[] | null;
}

export interface StaffUserInput {
  status?: StaffMemberStatus | null;
  search?: string | null;
}

export interface StockInput {
  warehouse: string;
  quantity?: number | null;
}

export interface TranslationInput {
  seoTitle?: string | null;
  seoDescription?: string | null;
  name?: string | null;
  description?: string | null;
  descriptionJson?: any | null;
}

export interface UserCreateInput {
  defaultBillingAddress?: AddressInput | null;
  defaultShippingAddress?: AddressInput | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  isActive?: boolean | null;
  note?: string | null;
  redirectUrl?: string | null;
}

export interface UserSortingInput {
  direction: OrderDirection;
  field: UserSortField;
}

export interface UshopFilterInput {
  search?: string | null;
}

export interface UshopInput {
  name?: string | null;
  url?: string | null;
  description?: string | null;
  descriptionJson?: any | null;
  isPublished?: boolean | null;
  publicationDate?: string | null;
  seo?: SeoInput | null;
  logoImage?: any | null;
  logoImageAlt?: string | null;
  rank?: number | null;
  ratingMain?: number | null;
  ratingUkShipping?: number | null;
  ratingProductQuality?: number | null;
  ratingProductPrice?: number | null;
  ratingShuurhai?: number | null;
  ratingProductRank?: number | null;
  listSelection?: string | null;
  productSelection?: string | null;
}

export interface UshopSortingInput {
  direction: OrderDirection;
  field: UshopSortField;
}

export interface VoucherFilterInput {
  status?: (DiscountStatusEnum | null)[] | null;
  timesUsed?: IntRangeInput | null;
  discountType?: (VoucherDiscountType | null)[] | null;
  started?: DateTimeRangeInput | null;
  search?: string | null;
}

export interface VoucherInput {
  type?: VoucherTypeEnum | null;
  name?: string | null;
  code?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  discountValueType?: DiscountValueTypeEnum | null;
  discountValue?: any | null;
  products?: (string | null)[] | null;
  collections?: (string | null)[] | null;
  categories?: (string | null)[] | null;
  minAmountSpent?: any | null;
  minCheckoutItemsQuantity?: number | null;
  countries?: (string | null)[] | null;
  applyOncePerOrder?: boolean | null;
  applyOncePerCustomer?: boolean | null;
  usageLimit?: number | null;
}

export interface VoucherSortingInput {
  direction: OrderDirection;
  field: VoucherSortField;
}

export interface WarehouseAddressInput {
  streetAddress1: string;
  streetAddress2?: string | null;
  city: string;
  cityArea?: string | null;
  postalCode?: string | null;
  country: CountryCode;
  countryArea?: string | null;
  phone?: string | null;
}

export interface WarehouseCreateInput {
  slug?: string | null;
  companyName?: string | null;
  email?: string | null;
  name: string;
  address: WarehouseAddressInput;
  shippingZones?: (string | null)[] | null;
}

export interface WarehouseFilterInput {
  search?: string | null;
  ids?: (string | null)[] | null;
}

export interface WarehouseSortingInput {
  direction: OrderDirection;
  field: WarehouseSortField;
}

export interface WarehouseUpdateInput {
  slug?: string | null;
  companyName?: string | null;
  email?: string | null;
  name?: string | null;
  address?: WarehouseAddressInput | null;
}

export interface WebhookCreateInput {
  name?: string | null;
  targetUrl?: string | null;
  events?: (WebhookEventTypeEnum | null)[] | null;
  serviceAccount?: string | null;
  app?: string | null;
  isActive?: boolean | null;
  secretKey?: string | null;
}

export interface WebhookFilterInput {
  search?: string | null;
  isActive?: boolean | null;
}

export interface WebhookSortingInput {
  direction: OrderDirection;
  field: WebhookSortField;
}

export interface WebhookUpdateInput {
  name?: string | null;
  targetUrl?: string | null;
  events?: (WebhookEventTypeEnum | null)[] | null;
  serviceAccount?: string | null;
  app?: string | null;
  isActive?: boolean | null;
  secretKey?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
