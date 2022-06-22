import { client } from './client';

export async function getCrystals() {
  const response = await client.from('crystals').select('*');
  return response.body;
}
export async function getDragons() {
  const response = await client.from('dragons').select('*');
  return response.body;
}
export async function getKids() {
  const response = await client.from('kids').select('*');
  return response.body;
}
export async function getBooks() {
  const response = await client.from('books').select('*');
  return response.body;
}
