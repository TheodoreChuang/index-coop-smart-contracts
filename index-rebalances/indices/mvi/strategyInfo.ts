import { BigNumber } from "@ethersproject/bignumber";
import { ZERO } from "../../../utils/constants";
import { ether } from "../../../utils/common/index";
import { ASSETS } from "../../assetInfo";
import { exchanges, StrategyInfo } from "../../types";

export const strategyInfo: StrategyInfo = {
  MANA: {
    address: ASSETS.MANA.address,
    input: ether(0.144177),
    maxTradeSize: ether(13290),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  ENJ: {
    address: ASSETS.ENJ.address,
    input: ether(0.15815),
    maxTradeSize: ether(10000),
    exchange: exchanges.UNISWAP_V3,
    exchangeData: "0x000bb8",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  WAXE: {
    address: ASSETS.WAXE.address,
    input: ether(0.078985),
    maxTradeSize: ether(155),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  AXS: {
    address: ASSETS.AXS.address,
    input: ether(0.0797),
    maxTradeSize: ether(1000),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  SAND: {
    address: ASSETS.SAND.address,
    input: ether(0.098034),
    maxTradeSize: ether(93530),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  RFOX: {
    address: ASSETS.RFOX.address,
    input: ether(0.064476),
    maxTradeSize: ether(35000),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  AUDIO: {
    address: ASSETS.AUDIO.address,
    input: ether(0.071207),
    maxTradeSize: ether(7650),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  DG: {
    address: ASSETS.DG.address,
    input: ether(0.04328),
    maxTradeSize: ether(85),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  NFTX: {
    address: ASSETS.NFTX.address,
    input: ether(0.0489),
    maxTradeSize: ether(200),
    exchange: exchanges.SUSHISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  WHALE: {
    address: ASSETS.WHALE.address,
    input: ether(0.046276),
    maxTradeSize: ether(810),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  MEME: {
    address: ASSETS.MEME.address,
    input: ether(0.027353),
    maxTradeSize: ether(6),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  TVK: {
    address: ASSETS.TVK.address,
    input: ether(0.036381),
    maxTradeSize: ether(16100),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  RARI: {
    address: ASSETS.RARI.address,
    input: ether(0.038484),
    maxTradeSize: ether(590),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  REVV: {
    address: ASSETS.REVV.address,
    input: ether(0.032551),
    maxTradeSize: ether(39000),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  MUSE: {
    address: ASSETS.MUSE.address,
    input: ether(0.023502),
    maxTradeSize: ether(400),
    exchange: exchanges.UNISWAP,
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
};