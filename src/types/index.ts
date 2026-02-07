export interface Apartment {
  id: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  price_per_night: number;
  amenities: string[];
  images: string[];
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  check_in: string;
  check_out: string;
  guests: number;
  message?: string;
  apartment_id?: string;
  status?: string;
  created_at?: string;
}
