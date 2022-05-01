export type station = {
  empty_slots: number;
  extra: { address: string; status: string; uid: number };
  free_bikes: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;
};
