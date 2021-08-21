export default interface ICountry {
  id: number;
  name: string;
  isComing: boolean;
  thumbnailUrl: string;
  supportedBanks?: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
}
