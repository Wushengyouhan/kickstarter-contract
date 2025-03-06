import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x229e4ea6675e43E0eC684b31372511d724873a92'
);

export default instance;