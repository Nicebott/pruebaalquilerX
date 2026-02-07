/*
  # Las Terrenas Apartment Rental Schema

  1. New Tables
    - `apartments`
      - `id` (uuid, primary key)
      - `title` (text) - Apartment name/title
      - `description` (text) - Detailed description
      - `bedrooms` (int) - Number of bedrooms
      - `bathrooms` (int) - Number of bathrooms
      - `max_guests` (int) - Maximum guests
      - `price_per_night` (numeric) - Price per night in USD
      - `amenities` (text[]) - Array of amenities
      - `images` (text[]) - Array of image URLs
      - `available` (boolean) - Availability status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text) - Guest name
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `check_in` (date) - Check-in date
      - `check_out` (date) - Check-out date
      - `guests` (int) - Number of guests
      - `message` (text) - Additional message
      - `apartment_id` (uuid) - Reference to apartment
      - `status` (text) - Status of inquiry (pending, confirmed, cancelled)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public read access for apartments
    - Public insert access for inquiries
*/

CREATE TABLE IF NOT EXISTS apartments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  bedrooms int NOT NULL DEFAULT 1,
  bathrooms int NOT NULL DEFAULT 1,
  max_guests int NOT NULL DEFAULT 2,
  price_per_night numeric NOT NULL,
  amenities text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests int NOT NULL DEFAULT 1,
  message text DEFAULT '',
  apartment_id uuid REFERENCES apartments(id),
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available apartments"
  ON apartments
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  WITH CHECK (true);
