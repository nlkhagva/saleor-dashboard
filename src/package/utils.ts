import { PackageDetails_package } from "@saleor/package/types/PackageDetails";

export const getUshopStatus = status => {
  const MESSAGE = {
    ATMGL: "Монголд ирсэн",
    ATUK: "оффисд ирсэн",
    NEW: "шинэ",
    RECEIVED: "Хэрэглэгч авсан",
    SHIPPING: "Тээвэрт орсон"
  };
  if (!MESSAGE[status]) {
    return "FAIL";
  }

  return MESSAGE[status];
};

export const formatDate = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const createPackageInfoJson = (_package: PackageDetails_package) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return {
    functionID: "FN6_001",
    version: "1.0",
    screenID: "MN10008",
    progID: "MAINWEB",
    jsonString: {
      mData: {
        DataRow: {
          PK: -1,
          DevideNumber: 0,
          MailDate: formatDate(today.toDateString()),
          MailId: _package.name,
          PriceBurtgelinUne: "0",
          PriceIluuJingiin: "0",
          PriceNemeltUilchilgeeniUne: "0",
          PriceTax: "0",
          PriceTotalUne:
            _package.netOrGross === "NET"
              ? _package.netWeight * _package.perkgAmount
              : _package.grossWeight * _package.perkgAmount,
          PriceUndsenUne: "0",
          R_MGLRecieverZone: 3,
          Undur: _package.height,
          Urd: _package.length,
          Urgun: _package.width,
          Weight:
            _package.netOrGross === "NET"
              ? _package.netWeight
              : _package.grossWeight,
          fkDestinationBranch: 599,
          fkPostArea: 5,
          fkPostServiceType: 1,
          fkPostType: 2,
          isRecieverWillPay: false,
          isRedLevel: null,
          customer: {
            sender: addressJson(_package.senderAddress, _package.user.email, 1),
            reciever: addressJson(_package.shippingAddress, _package.user.email)
          }
        }
      }
    }
  };
};

export const createPackageLineInfoJson = (packageId, line) => {
  return {
    Version: "1.0",
    FunctionID: "FN6_013",
    ScreenID: "MN10008",
    ProgID: 1,
    JsonString: {
      mData: {
        DataRow: {
          PK: 0,
          fkCPCurrencyUnit: 321,
          SpecificName: line.name,
          Numbers: line.quantity,
          UnitPrice: line.unitPriceAmount,
          TotalPrice: line.quantity * line.unitPriceAmount,
          fkpMail: packageId
        }
      }
    }
  };
};

export const addressJson = (address, email, is_sender = 0) => {
  return {
    FirstName: address.firstName,
    LastName: address.companyName + " " + address.lastName,
    NationalRegisterNumber: address.streetAddress2,
    PhoneNumber: address.phone,
    fkCity: getUpostCityId(address.city),
    fkDistrict: getUpostDistrictId(address.countryArea),
    Email: email,
    Address: address.streetAddress1,
    ZipCode: address.postalCode,
    FullAddress: address.streetAddress1,
    isSender: is_sender
  };
};
// $city_array = array( //2 => "Монголоос бусад"
// 1 => 21, //улаанбаатар
// 3 => 10 // darhan-uul
// );
// $dd_array = array(
// // 123, // darhan
// // 283, // Багануур
// // 284, // Багахангай
// 3 => 285, // Баянгол
// 6 => 286, // Баянзүрх
// // 287, // Налайх
// 5 => 288, // Сонгинохайрхан
// 1 => 289, // Сүхбаатар
// 2 => 290, // Хан-Уул
// 4 => 291 // Чингэлтэй
// );

export const getUpostCityId = name => {
  const citiesOptions = [
    {
      key: "Улаанбаатар",
      value: 21
    },
    {
      key: "Дархан",
      value: 10
    }
  ];
  // String(option.key).trim().toLowerCase()
  const city = citiesOptions.find(
    option =>
      String(option.key)
        .trim()
        .toLowerCase() ===
      String(name)
        .trim()
        .toLowerCase()
  );

  return city ? city.value : 2;
};
export const getUpostDistrictId = name => {
  const districtsOptions = [
    {
      key: "Багануур",
      value: 283,
      city: "Улаанбаатар"
    },
    {
      key: "Багахангай",
      value: 284,
      city: "Улаанбаатар"
    },
    {
      key: "Баянгол",
      value: 285,
      city: "Улаанбаатар"
    },
    {
      key: "Баянзүрх",
      value: 286,
      city: "Улаанбаатар"
    },
    {
      key: "Налайх",
      value: 287,
      city: "Улаанбаатар"
    },
    {
      key: "Сонгинохайрхан",
      value: 288,
      city: "Улаанбаатар"
    },
    {
      key: "Сүхбаатар",
      value: 289,
      city: "Улаанбаатар"
    },
    {
      key: "Хан-Уул",
      value: 290,
      city: "Улаанбаатар"
    },
    {
      key: "Чингэлтэй",
      value: 291,
      city: "Улаанбаатар"
    },
    {
      key: "Дархан",
      value: 123,
      city: "Дархан"
    }
  ];
  // String(option.key).trim().toLowerCase()
  const district = districtsOptions.find(
    option =>
      String(option.key)
        .trim()
        .toLowerCase() ===
      String(name)
        .trim()
        .toLowerCase()
  );

  return district ? district.value : 2793;
};
