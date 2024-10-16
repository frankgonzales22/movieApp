// paymentLogos.ts
import seven_eleven from '../../../assets/paymentLogos/7-11-Logo.png';
import bdo from '../../../assets/paymentLogos/BDO-Logo.png';
import creditcard from '../../../assets/paymentLogos/creditcard.png';
import bpi from '../../../assets/paymentLogos/BPI-Logo.png';
import brankas from '../../../assets/paymentLogos/Brankas-Logo.png';
import da5 from '../../../assets/paymentLogos/DA5-Logo.png';
import dragonpay from '../../../assets/paymentLogos/Dragonpay-Logo.png';
import gcash from '../../../assets/paymentLogos/GCash-Logo.png';
import grabpay from '../../../assets/paymentLogos/GrabPay-Logo.png';
import pnb from '../../../assets/paymentLogos/PNB-Logo.png';
import robinsonsBank from '../../../assets/paymentLogos/Rbank-Logo.png';
import unionbank from '../../../assets/paymentLogos/Unionbank-Logo.png'
import ucpb from '../../../assets/paymentLogos/UCPB-Logo.png'

// Export all images as an object
export const paymentLogos = {
    '711_ph': seven_eleven,
    'bdo_ph': bdo,
    'bdo_cc_ph': creditcard,
    'bpi_online': bpi,
    'br_bdo_ph': brankas,
    'da5_ph': da5,
    'dp_ph': dragonpay,
    'gc': gcash,
    'grabpay_ph': grabpay,
    'pnb_ph': pnb,
    'rbank_ph': robinsonsBank,
    'ubp_ph': unionbank,
    'ubp_online': unionbank,
    'ucpb_ph': ucpb,
};

// Define the valid pchannel values based on the keys of paymentLogos
export type PaymentChannel = keyof typeof paymentLogos;

export const paymentMethods: { pchannel: PaymentChannel, pmethod: string, payment_action: string, description: string }[] = [
    { pchannel: "711_ph", pmethod: "nonbank_otc", payment_action: "url_link", description: "7/11" },
    { pchannel: "bdo_cc_ph", pmethod: "creditcard", payment_action: "url_link", description: "Creditcard" },
    { pchannel: "bdo_ph", pmethod: "bank_otc", payment_action: "url_link", description: "BDO" },
    { pchannel: "bpi_online", pmethod: "onlinebanktransfer", payment_action: "url_link", description: "BPI" },
    { pchannel: "br_bdo_ph", pmethod: "onlinebanktransfer", payment_action: "url_link", description: "Brankas" },
    { pchannel: "da5_ph", pmethod: "nonbank_otc", payment_action: "url_link", description: "Direct Agent 5" },
    { pchannel: "dp_ph", pmethod: "nonbank_otc", payment_action: "url_link", description: "Dragon Pay" },
    { pchannel: "gc", pmethod: "wallet", payment_action: "url_link", description: "GCash" },
    { pchannel: "grabpay_ph", pmethod: "wallet", payment_action: "url_link", description: "GrabPay" },
    { pchannel: "pnb_ph", pmethod: "bank_otc", payment_action: "url_link", description: "PNB" },
    { pchannel: "rbank_ph", pmethod: "bank_otc", payment_action: "url_link", description: "Robinson's Bank" },
    { pchannel: "ubp_online", pmethod: "onlinebanktransfer", payment_action: "url_link", description: "Unionbank Online" },
    { pchannel: "ubp_ph", pmethod: "bank_otc", payment_action: "url_link", description: "Unionbank" },
    { pchannel: "ucpb_ph", pmethod: "bank_otc", payment_action: "url_link", description: "UCPB" }
];