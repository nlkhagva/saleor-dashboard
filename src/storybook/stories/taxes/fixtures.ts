import { TaxTypeFragment } from "@saleor/fragments/types/TaxTypeFragment";

import { CountryList_shop_countries } from "../../../taxes/types/CountryList";
import { TaxRateType } from "../../../types/globalTypes";

type CountryList = CountryList_shop_countries[];

export const countries: CountryList = [
  {
    __typename: "CountryDisplay" as const,
    code: "AD",
    country: "Andora",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AE",
    country: "Zjednoczone Emiraty Arabskie",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AF",
    country: "Afganistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AG",
    country: "Antigua i Barbuda",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AI",
    country: "Anguilla",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AL",
    country: "Albania",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AM",
    country: "Armenia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AO",
    country: "Angola",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AQ",
    country: "Antarktyda",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AR",
    country: "Argentyna",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AS",
    country: "Samoa Amerykańskie",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AT",
    country: "Austria",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AU",
    country: "Australia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AW",
    country: "Aruba",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AX",
    country: "Wyspy Alandzkie",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "AZ",
    country: "Azerbejdżan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BA",
    country: "Bośnia i Hercegowina",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BB",
    country: "Barbados",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BD",
    country: "Bangladesz",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BE",
    country: "Belgia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "RESTAURANTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "WATER" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BF",
    country: "Burkina Faso",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BG",
    country: "Bułgaria",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BH",
    country: "Bahrajn",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BI",
    country: "Burundi",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BJ",
    country: "Benin",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BL",
    country: "Saint-Barthélemy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BM",
    country: "Bermudy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BN",
    country: "Brunei",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BO",
    country: "Boliwia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BQ",
    country: "Bonaire, Sint Eustatius i Saba",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BR",
    country: "Brazylia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BS",
    country: "Bahamy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BT",
    country: "Bhutan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BV",
    country: "Wyspa Bouveta",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BW",
    country: "Botswana",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BY",
    country: "Białoruś",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "BZ",
    country: "Belize",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CA",
    country: "Kanada",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CC",
    country: "Wyspy Kokosowe",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CD",
    country: "Kongo",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CF",
    country: "Republika Środkowoafrykańska",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CG",
    country: "Kongo",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CH",
    country: "Szwajcaria",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CI",
    country: "Wybrzeże Kości Słoniowej",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CK",
    country: "Wyspy Cooka",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CL",
    country: "Chile",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CM",
    country: "Kamerun",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CN",
    country: "Chiny",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CO",
    country: "Kolumbia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CR",
    country: "Kostaryka",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CU",
    country: "Kuba",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CV",
    country: "Republika Zielonego Przylądka",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CW",
    country: "Curaçao",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CX",
    country: "Wyspa Bożego Narodzenia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CY",
    country: "Cypr",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "RESTAURANTS" as TaxRateType
        }
      ],
      standardRate: 19
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "CZ",
    country: "Czechy",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "BABY_FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 15,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DE",
    country: "Niemcy",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        }
      ],
      standardRate: 19
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DJ",
    country: "Dżibuti",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DK",
    country: "Dania",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [],
      standardRate: 25
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DM",
    country: "Dominika",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DO",
    country: "Dominikana",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "DZ",
    country: "Algeria",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "EC",
    country: "Ekwador",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "EE",
    country: "Estonia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "EG",
    country: "Egipt",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "EH",
    country: "Sahara Zachodnia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ER",
    country: "Erytrea",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ES",
    country: "Hiszpania",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "NEWSPAPERS" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ET",
    country: "Etiopia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "EU",
    country: "Unia Europejska",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FI",
    country: "Finlandia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 14,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 14,
          rateType: "RESTAURANTS" as TaxRateType
        }
      ],
      standardRate: 24
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FJ",
    country: "Fidżi",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FK",
    country: "Falklandy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FM",
    country: "Mikronezja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FO",
    country: "Wyspy Owcze",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "FR",
    country: "Francja",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ACCOMMODATION" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "RESTAURANTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 2.1,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 2.1,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5.5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5.5,
          rateType: "E_BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5.5,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5.5,
          rateType: "MEDICAL" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GA",
    country: "Gabon",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GB",
    country: "Wielka Brytania",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "CHILDRENS_CLOTHING" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "PROPERTY_RENOVATIONS" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GD",
    country: "Grenada",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GE",
    country: "Gruzja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GF",
    country: "Gujana Francuska",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GG",
    country: "Guernsey",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GH",
    country: "Ghana",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GI",
    country: "Gibraltar",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GL",
    country: "Grenlandia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GM",
    country: "Gambia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GN",
    country: "Gwinea",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GP",
    country: "Gwadelupa",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GQ",
    country: "Gwinea Równikowa",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GR",
    country: "Grecja",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6.5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6.5,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6.5,
          rateType: "NEWSPAPERS" as TaxRateType
        }
      ],
      standardRate: 24
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GS",
    country: "Georgia Południowa i Sandwich Południowy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GT",
    country: "Gwatemala",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GU",
    country: "Guam",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GW",
    country: "Gwinea Bissau",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "GY",
    country: "Gujana",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HK",
    country: "Hongkong",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HM",
    country: "Wyspy Heard i McDonalda",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HN",
    country: "Honduras",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HR",
    country: "Chorwacja",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "NEWSPAPERS" as TaxRateType
        }
      ],
      standardRate: 25
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HT",
    country: "Haiti",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "HU",
    country: "Węgry",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 18,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 18,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 27
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ID",
    country: "Indonezja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IE",
    country: "Irlandia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "CHILDRENS_CLOTHING" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4.8,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "RESTAURANTS" as TaxRateType
        }
      ],
      standardRate: 23
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IL",
    country: "Izrael",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IM",
    country: "Wyspa Man",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IN",
    country: "Indie",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IO",
    country: "Brytyjskie Terytorium Oceanu Indyjskiego",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IQ",
    country: "Irak",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IR",
    country: "Iran",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IS",
    country: "Islandia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "IT",
    country: "Włochy",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "RESTAURANTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "E_BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 4,
          rateType: "MEDICAL" as TaxRateType
        }
      ],
      standardRate: 22
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "JE",
    country: "Jersey",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "JM",
    country: "Jamajka",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "JO",
    country: "Jordania",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "JP",
    country: "Japonia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KE",
    country: "Kenia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KG",
    country: "Kirgistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KH",
    country: "Kambodża",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KI",
    country: "Kiribati",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KM",
    country: "Komory",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KN",
    country: "Saint Kitts i Nevis",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KP",
    country: "Korea Północna",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KR",
    country: "Korea Południowa",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KW",
    country: "Kuwejt",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KY",
    country: "Kajmany",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "KZ",
    country: "Kazachstan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LA",
    country: "Laos",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LB",
    country: "Liban",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LC",
    country: "Saint Lucia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LI",
    country: "Liechtenstein",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LK",
    country: "Sri Lanka",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LR",
    country: "Liberia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LS",
    country: "Lesotho",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LT",
    country: "Litwa",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "BOOKS" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LU",
    country: "Luksemburg",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 14,
          rateType: "ADVERTISING" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 14,
          rateType: "DOMESTIC_FUEL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 14,
          rateType: "WINE" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "E_BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 3,
          rateType: "RESTAURANTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "BIKES" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "DOMESTIC_SERVICES" as TaxRateType
        }
      ],
      standardRate: 17
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LV",
    country: "Łotwa",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "LY",
    country: "Libia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MA",
    country: "Maroko",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MC",
    country: "Monako",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MD",
    country: "Mołdawia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ME",
    country: "Czarnogóra",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MF",
    country: "Saint-Martin",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MG",
    country: "Madagaskar",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MH",
    country: "Wyspy Marshalla",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MK",
    country: "Macedonia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ML",
    country: "Mali",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MM",
    country: "Mjanma",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MN",
    country: "Mongolia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MO",
    country: "Makau",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MP",
    country: "Mariany Północne",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MQ",
    country: "Martynika",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MR",
    country: "Mauretania",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MS",
    country: "Montserrat",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MT",
    country: "Malta",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 0,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "E_BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 7,
          rateType: "HOTELS" as TaxRateType
        }
      ],
      standardRate: 18
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MU",
    country: "Mauritius",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MV",
    country: "Malediwy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MW",
    country: "Malawi",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MX",
    country: "Meksyk",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MY",
    country: "Malezja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "MZ",
    country: "Mozambik",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NA",
    country: "Namibia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NC",
    country: "Nowa Kaledonia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NE",
    country: "Niger",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NF",
    country: "Norfolk",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NG",
    country: "Nigeria",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NI",
    country: "Nikaragua",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NL",
    country: "Holandia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ACCOMMODATION" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 21
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NO",
    country: "Norwegia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NP",
    country: "Nepal",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NR",
    country: "Nauru",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NU",
    country: "Niue",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "NZ",
    country: "Nowa Zelandia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "OM",
    country: "Oman",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PA",
    country: "Panama",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PE",
    country: "Peru",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PF",
    country: "Polinezja Francuska",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PG",
    country: "Papua-Nowa Gwinea",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PH",
    country: "Filipiny",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PK",
    country: "Pakistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PL",
    country: "Polska",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "PHARMACEUTICALS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 8,
          rateType: "RESTAURANTS" as TaxRateType
        }
      ],
      standardRate: 23
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PM",
    country: "Saint-Pierre i Miquelon",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PN",
    country: "Pitcairn",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PR",
    country: "Portoryko",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PS",
    country: "Palestyna",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PT",
    country: "Portugalia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 13,
          rateType: "AGRICULTURAL_SUPPLIES" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "PASSENGER_TRANSPORT" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 23
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PW",
    country: "Palau",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "PY",
    country: "Paragwaj",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "QA",
    country: "Katar",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "RE",
    country: "Reunion",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "RO",
    country: "Rumunia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 5,
          rateType: "SOCIAL_HOUSING" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 19
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "RS",
    country: "Serbia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "RU",
    country: "Rosja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "RW",
    country: "Rwanda",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SA",
    country: "Arabia Saudyjska",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SB",
    country: "Wyspy Salomona",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SC",
    country: "Seszele",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SD",
    country: "Sudan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SE",
    country: "Szwecja",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 12,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 6,
          rateType: "BOOKS" as TaxRateType
        }
      ],
      standardRate: 25
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SG",
    country: "Singapur",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SH",
    country: "Wyspa Świętej Heleny, Wyspa Wniebowstąpienia i Tristan da Cunha",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SI",
    country: "Słowenia",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "ADMISSION_TO_SPORTING_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "HOTELS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "NEWSPAPERS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 9.5,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 22
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SJ",
    country: "Svalbard i Jan Mayen",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SK",
    country: "Słowacja",
    vat: {
      __typename: "VAT" as const,
      reducedRates: [
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_CULTURAL_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "ADMISSION_TO_ENTERTAINMENT_EVENTS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "BOOKS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "FOODSTUFFS" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "MEDICAL" as TaxRateType
        },
        {
          __typename: "ReducedRate" as const,
          rate: 10,
          rateType: "PHARMACEUTICALS" as TaxRateType
        }
      ],
      standardRate: 20
    }
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SL",
    country: "Sierra Leone",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SM",
    country: "San Marino",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SN",
    country: "Senegal",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SO",
    country: "Somalia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SR",
    country: "Surinam",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SS",
    country: "Sudan Południowy",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ST",
    country: "Wyspy Świętego Tomasza i Książęca",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SV",
    country: "Salwador",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SX",
    country: "Sint Maarten",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SY",
    country: "Syria",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "SZ",
    country: "Suazi",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TC",
    country: "Turks i Caicos",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TD",
    country: "Czad",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TF",
    country: "Francuskie Terytoria Południowe i Antarktyczne",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TG",
    country: "Togo",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TH",
    country: "Tajlandia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TJ",
    country: "Tadżykistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TK",
    country: "Tokelau",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TL",
    country: "Timor Wschodni",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TM",
    country: "Turkmenistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TN",
    country: "Tunezja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TO",
    country: "Tonga",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TR",
    country: "Turcja",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TT",
    country: "Trynidad i Tobago",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TV",
    country: "Tuvalu",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TW",
    country: "Tajwan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "TZ",
    country: "Tanzania",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "UA",
    country: "Ukraina",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "UG",
    country: "Uganda",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "UM",
    country: "Dalekie Wyspy Mniejsze Stanów Zjednoczonych",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "US",
    country: "Stany Zjednoczone Ameryki",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "UY",
    country: "Urugwaj",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "UZ",
    country: "Uzbekistan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VA",
    country: "Watykan",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VC",
    country: "Saint Vincent i Grenadyny",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VE",
    country: "Wenezuela",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VG",
    country: "Brytyjskie Wyspy Dziewicze",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VI",
    country: "Wyspy Dziewicze Stanów Zjednoczonych",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VN",
    country: "Wietnam",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "VU",
    country: "Vanuatu",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "WF",
    country: "Wallis i Futuna",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "WS",
    country: "Samoa",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "YE",
    country: "Jemen",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "YT",
    country: "Majotta",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ZA",
    country: "Republika Południowej Afryki",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ZM",
    country: "Zambia",
    vat: null
  },
  {
    __typename: "CountryDisplay" as const,
    code: "ZW",
    country: "Zimbabwe",
    vat: null
  }
].filter(country => country.vat);

/* eslint-disable sort-keys */
export const taxTypes: TaxTypeFragment[] = [
  {
    description: "accommodation",
    taxCode: "accommodation",
    __typename: "TaxType"
  },
  {
    description: "admission to cultural events",
    taxCode: "admission to cultural events",
    __typename: "TaxType"
  },
  {
    description: "admission to entertainment events",
    taxCode: "admission to entertainment events",
    __typename: "TaxType"
  },
  {
    description: "admission to sporting events",
    taxCode: "admission to sporting events",
    __typename: "TaxType"
  },
  { description: "advertising", taxCode: "advertising", __typename: "TaxType" },
  {
    description: "agricultural supplies",
    taxCode: "agricultural supplies",
    __typename: "TaxType"
  },
  {
    description: "baby foodstuffs",
    taxCode: "baby foodstuffs",
    __typename: "TaxType"
  },
  { description: "bikes", taxCode: "bikes", __typename: "TaxType" },
  { description: "books", taxCode: "books", __typename: "TaxType" },
  {
    description: "childrens clothing",
    taxCode: "childrens clothing",
    __typename: "TaxType"
  },
  {
    description: "domestic fuel",
    taxCode: "domestic fuel",
    __typename: "TaxType"
  },
  {
    description: "domestic services",
    taxCode: "domestic services",
    __typename: "TaxType"
  },
  { description: "e-books", taxCode: "e-books", __typename: "TaxType" },
  { description: "foodstuffs", taxCode: "foodstuffs", __typename: "TaxType" },
  { description: "hotels", taxCode: "hotels", __typename: "TaxType" },
  { description: "medical", taxCode: "medical", __typename: "TaxType" },
  { description: "newspapers", taxCode: "newspapers", __typename: "TaxType" },
  {
    description: "passenger transport",
    taxCode: "passenger transport",
    __typename: "TaxType"
  },
  {
    description: "pharmaceuticals",
    taxCode: "pharmaceuticals",
    __typename: "TaxType"
  },
  {
    description: "property renovations",
    taxCode: "property renovations",
    __typename: "TaxType"
  },
  { description: "restaurants", taxCode: "restaurants", __typename: "TaxType" },
  {
    description: "social housing",
    taxCode: "social housing",
    __typename: "TaxType"
  },
  { description: "standard", taxCode: "standard", __typename: "TaxType" },
  { description: "water", taxCode: "water", __typename: "TaxType" },
  { description: "wine", taxCode: "wine", __typename: "TaxType" }
];
