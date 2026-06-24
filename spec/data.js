/* ============================================================================
   Battery specification data
   ----------------------------------------------------------------------------
   Only the VARIABLE parts of each spec sheet live here. All shared prose
   (safety, protection functions, events/states, etc.) lives once in the
   template (spec.html). To add a new battery, add a new entry to MODELS.
   ============================================================================ */

const MODELS = {

  mega: {
    name: "Mega",
    config: "13s8p_2170",
    series: 13,
    parallel: 8,
    cellFormat: "21700",
    version: "v1.3",
    author: "Alexandre Vallette",
    date: "16/03/2026",
    image: "images/mega/mega_purple.png",

    // One-line key specs shown in the features section
    keyFeatures: {
      nominalVoltage: "48 V",
      typicalCapacity: "40 Ah (@0.3C)",
      dischargeCurrent: "20 A continuous, 30 A during 1 minute",
    },

    changes: [
      ["v1",   "First version",                                   "16/03/2026"],
      ["v1.1", "Adjusted rated capacity",                         "17/04/2026"],
      ["v1.2", "Adjusted pinout drawings",                        "21/04/2026"],
      ["v1.3", "Updated discharge rating to match the label",     "14/05/2026"],
    ],

    mechanical: [
      ["Dimensions",            "375 × 98 × 200 mm"],
      ["Color",                 "Body is aluminum color, plastic part can be any color"],
      ["Weight",                "10.6 kg"],
      ["Material of casing",    "ADC12 Aluminum and ABS plastic"],
      ["Material of cell holder","ABS-V0 plastic"],
      ["Ingress Protection",    "IP67"],
      ["Fireproof grade",       "V0"],
      ["LED display indicator", "Four LEDs — no button"],
      ["Key lock mechanism",    "Placed on the slider"],
    ],

    electrical: [
      ["Cell manufacturer",                       "LG"],
      ["Cell model",                              "INR21700M50LT"],
      ["Cells in series",                         "13"],
      ["Cells in parallel",                       "8"],
      ["Maximal battery capacity (0.3C)",         "40 Ah"],
      ["Rated battery capacity (0.3C)",           "38.4 Ah"],
      ["Nominal voltage",                         "48 V"],
      ["Maximum output voltage",                  "54.6 V"],
      ["Minimum output voltage",                  "37 V"],
      ["Typical battery IR (1 kHz)",              "30 mOhms"],
      ["Standard charging current / time",        "4 A / 12h — 10 A / 4.5h — 20 A / 2.5h"],
      ["Maximum continuous charge current",       "12 A (0 ~ 10 °C) — 20 A (10 ~ 45 °C)"],
      ["Discharge cut-off voltage",               "36 V"],
      ["End of charging current",                 "400 mA"],
      ["Continuous discharge current",            "25 A (-10 ~ 55 °C)"],
      ["Maximum peak discharge current (1 min)",  "30 A (-10 ~ 55 °C)"],
      ["Communication protocol",                  "CAN, UART, Wifi, Bluetooth Low Energy"],
      ["Common / Split port",                     "COMMON"],
      ["Pre-discharge feature",                   "YES"],
      ["Pre-discharge current",                   "1 A"],
      ["Pre-charge current",                      "NO"],
      ["Power consumption in ON mode",            "24 mA at 54.6 V"],
      ["Power consumption in OFF mode",           "Standard (wake on button / charger): 160 µA at 54.6 V — Always-ON, delivering current: 160 µA at 54.6 V — Wake-on-CAN: 1.64 mA at 54.6 V"],
      ["Discharge operating T°",                  "-20 °C to +55 °C"],
      ["Charge operating T°",                     "0 °C to +45 °C"],
      ["Storage T°",                              "1 month: -20 °C to +60 °C — 3 months: -20 °C to +45 °C — 1 year: -20 °C to +20 °C"],
      ["Maximum delay between 2 charges",         "3 months respecting temperature conditions above. Check that at least 1 LED is green (SOC 0-24%)"],
    ],

    algorithms: [
      ["SOC",            "YES, based on OCV and coulomb counting"],
      ["SOH",            "YES, EFC (Equivalent Full Cycle) counting"],
      ["SOP",            "NO"],
      ["Cycle counting", "YES"],
      ["DOD control",    "NO"],
    ],

    // Connector wiring — discharge is shared, charge differs by model

    dischargeConnector: {
      summary: "The discharge connector has 10 pins with redundancy:",
      pins: {
        1: "P-", 
        2: "CANL", 
        3: "CANH", 
        4: "VEHICLE DETECT", 
        5: "P+",
        6: "P-", 
        7: "CANL", 
        8: "CANH", 
        9: "CHARGER DETECT", 
        10: "P+"},
    },
    chargeConnector: {
      summary: "There is no charger connector, the charge is made through the discharge pins.",
    },

    drawings: [
      { src: "images/mega/drawings/drawing_1.png", caption: "Side view" },
      { src: "images/mega/drawings/drawing_2.png", caption: "Back view", size: "third" },
    ],
  },

  cargo: {
    name: "Cargo",
    config: "13s4p_2170",
    series: 13,
    parallel: 4,
    cellFormat: "21700",
    version: "v1.3",
    author: "Alexandre Vallette",
    date: "26/01/2026",
    image: "images/cargo/cargo_purple.png",

    keyFeatures: {
      nominalVoltage: "46.7 V",
      typicalCapacity: "23.2 Ah (@0.3C), minimal 22.3 Ah (@0.3C)",
      dischargeCurrent: "25 A continuous, 30 A during 1 minute",
    },

    changes: [
      ["v1",   "First version",     "10/02/2025"],
      ["v1.1", "—",                 "02/04/2026"],
      ["v1.2", "Corrected capacity","09/04/2026"],
      ["v1.3", "Correct weight",    "21/05/2026"],
    ],

    mechanical: [
      ["Dimensions",            "332 × 95.8 × 140 mm"],
      ["Color",                 "Body is aluminum color, plastic part can be any color"],
      ["Weight",                "6 kg"],
      ["Material of casing",    "ADC12 Aluminum and ABS-V0 plastic"],
      ["Material of cell holder","ABS-V0 plastic"],
      ["Ingress Protection",    "IP67"],
      ["Fireproof grade",       "V0"],
      ["LED display indicator", "Four LEDs — no button"],
      ["Key lock mechanism",    "Placed on the slider"],
    ],

    electrical: [
      ["Cell manufacturer",                       "LG"],
      ["Cell model",                              "INR21700M58T"],
      ["Cells in series",                         "13"],
      ["Cells in parallel",                       "4"],
      ["Minimal battery capacity (0.3C)",         "22.3 Ah"],
      ["Nominal voltage",                         "46.7 V"],
      ["Maximum output voltage",                  "54.6 V"],
      ["Minimum output voltage",                  "36 V"],
      ["Typical battery IR (1 kHz)",              "60 mOhms"],
      ["Standard charging current / time",        "4 A / 6h — 10 A / 2.5h"],
      ["Maximum continuous charge current",       "4 A (0 ~ 10 °C) — 10 A (10 ~ 45 °C)"],
      ["Discharge cut-off voltage",               "36 V"],
      ["End of charging current",                 "400 mA"],
      ["Continuous discharge current",            "10 A"],
      ["Maximum peak discharge current (1 min)",  "25 A"],
      ["Communication protocol",                  "CAN, UART, Wifi, Bluetooth Low Energy"],
      ["Common / Split port",                     "COMMON"],
      ["Pre-discharge feature",                   "YES"],
      ["Pre-discharge current",                   "1 A"],
      ["Pre-charge current",                      "NO"],
      ["Power consumption in ON mode",            "24 mA at 54.6 V"],
      ["Power consumption in OFF mode",           "Standard (wake on button / charger): 160 µA at 54.6 V — Always-ON, delivering current: 160 µA at 54.6 V — Wake-on-CAN: 1.64 mA at 54.6 V"],
      ["Discharge operating T°",                  "-10 °C to +55 °C (under 10 °C, the discharge current should not exceed 6 A)"],
      ["Charge operating T°",                     "0 °C to +45 °C"],
      ["Storage T°",                              "1 month: -20 °C to +60 °C — 3 months: -20 °C to +45 °C — 1 year: -20 °C to +20 °C"],
      ["Maximum delay between 2 charges",         "3 months respecting temperature conditions above. Check that at least 1 LED is green (SOC 0-24%)"],
    ],

    algorithms: [
      ["SOC",            "YES, based on OCV and coulomb counting"],
      ["SOH",            "YES, EFC (Equivalent Full Cycle) counting"],
      ["SOP",            "YES, temperature based"],
      ["Cycle counting", "YES"],
      ["DOD control",    "NO"],
    ],

    dischargeConnector: {
      summary: "The discharge connector has 5 pins:",
      pins: {
        1: "P-", 
        2: "CANL", 
        3: "CANH", 
        4: "VEHICLE DETECT", 
        5: "P+"},
    },
    chargeConnector: {
      summary: "The charge connector has 3 pins:",
      pins: ["P-", "CHARGER DETECT", "P+"],
    },

    drawings: [
      { src: "images/cargo/drawings/drawing_1.png", caption: "Left view" },
      { src: "images/cargo/drawings/drawing_2.png", caption: "Insertion angle" },
      { src: "images/cargo/drawings/drawing_3.png", caption: "Top view" },
      { src: "images/cargo/drawings/drawing_4.png", caption: "Front and back view" },
      { src: "images/cargo/drawings/drawing_5.png", caption: "Bottom view" },
    ],
  },

  classic: {
    name: "Classic",
    config: "10s3p_2170",
    series: 10,
    parallel: 3,
    cellFormat: "21700",
    version: "v1.1",
    author: "Alexandre Vallette",
    date: "27/10/2025",
    image: "images/infinite/infinite_purple.png",

    keyFeatures: {
      nominalVoltage: "36 V",
      typicalCapacity: "15 Ah (@0.2C)",
      dischargeCurrent: "20 A continuous, 30 A during 1 minute",
    },

    changes: [
      ["v1",   "First version",                                                                    "10/02/2025"],
      ["v1.1", "Updated weight, modified cell parameter table and modified the safety instructions","18/11/2025"],
    ],

    mechanical: [
      ["Dimensions",            "332 × 95.8 × 90 mm"],
      ["Color",                 "Body is aluminum color, plastic part can be any color"],
      ["Weight",                "3.7 kg"],
      ["Material of casing",    "ADC12 Aluminum and ABS-V0 plastic"],
      ["Material of cell holder","ABS-V0 plastic"],
      ["Ingress Protection",    "IP67"],
      ["Fireproof grade",       "V0"],
      ["LED display indicator", "Four LEDs — no button"],
      ["Key lock mechanism",    "Placed on the slider"],
    ],

    electrical: [
      ["Cell manufacturer",                       "LG"],
      ["Cell model",                              "INR21700M50LT"],
      ["Cells in series",                         "10"],
      ["Cells in parallel",                       "3"],
      ["Typical battery capacity (0.2C)",         "15 000 mAh"],
      ["Nominal voltage",                         "36 V"],
      ["Maximum output voltage",                  "42 V"],
      ["Minimum output voltage",                  "29 V"],
      ["Typical battery IR (1 kHz)",              "100 mOhms"],
      ["Standard charging current / time",        "2 A / 380 min — 4 A / 200 min"],
      ["Maximum continuous charge current",       "10 A"],
      ["Discharge cut-off voltage",               "28 V"],
      ["End of charging current",                 "400 mA"],
      ["Continuous discharge current",            "20 A"],
      ["Maximum peak discharge current (1 min)",  "30 A"],
      ["Communication protocol",                  "CAN, UART, Wifi, Bluetooth Low Energy"],
      ["Common / Split port",                     "COMMON"],
      ["Pre-discharge feature",                   "YES"],
      ["Pre-discharge current",                   "1 A"],
      ["Pre-charge current",                      "NO"],
      ["Power consumption in ON mode",            "24 mA at 42 V"],
      ["Power consumption in OFF mode",           "Standard (wake on button / charger): 160 µA at 42 V — Always-ON, delivering current: 160 µA at 42 V — Wake-on-CAN: 1.64 mA at 42 V"],
      ["Discharge operating T°",                  "-20 °C to +55 °C (under 10 °C, the discharge current should not exceed 6 A)"],
      ["Charge operating T°",                     "0 °C to +45 °C"],
      ["Storage T°",                              "1 month: -20 °C to +60 °C — 3 months: -20 °C to +45 °C — 1 year: -20 °C to +20 °C"],
      ["Maximum delay between 2 charges",         "3 months respecting temperature conditions above. Check that at least 1 LED is green (SOC 0-24%)"],
    ],

    algorithms: [
      ["SOC",            "YES, based on OCV and coulomb counting"],
      ["SOH",            "YES, EFC (Equivalent Full Cycle) counting"],
      ["SOP",            "YES, temperature based"],
      ["Cycle counting", "YES"],
      ["DOD control",    "NO"],
    ],

    dischargeConnector: {
      summary: "The discharge connector has 5 pins:",
      pins: {
        1: "P-", 
        2: "CANL", 
        3: "CANH", 
        4: "VEHICLE DETECT", 
        5: "P+"},
    },
    chargeConnector: {
      summary: "The charge connector has 3 pins:",
      pins: ["P-", "CHARGER DETECT", "P+"],
    },

    drawings: [
      { src: "images/classic/drawings/drawing_1.png", caption: "Left view" },
      { src: "images/classic/drawings/drawing_2.png", caption: "Insertion angle" },
      { src: "images/classic/drawings/drawing_3.png", caption: "Top view" },
      { srcs: ["images/classic/drawings/drawing_4.png", "images/classic/drawings/drawing_5.png"], caption: "Front and back view" },
      { src: "images/classic/drawings/drawing_6.png", caption: "Bottom view" },
    ],
  },

};

// Display order for the model selector — matches the product line table
const MODEL_ORDER = ["classic", "cargo", "mega"];

// Shared certifications block (same structure for all models)
const CERTIFICATIONS = ["UN38.3", "EN50604", "ISO13849"];

// Shared illustrations common to every model
const SHARED = {
  pinout: "images/infinite/infinite_pinout.png",
};
