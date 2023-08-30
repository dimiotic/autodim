export interface ICar {
  id: number;
  model: string;
  year: number;
  body: string;
  carNew: 'new' | 'old';
  mileage?: number;
  brand: string;
  color: string;
  type: string;
  fuel_type: 'gas' | 'bensine' | 'electro' | 'diesel';
  transmission: 'manual' | 'automatic';
  gears: 'forward' | 'backward' | 'full';
  price: number;
  seats: number;
  images: string[];
  videoId?: string;
  destinations: string[];
}
