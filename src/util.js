import axios from 'axios'

export const convertPrice = async (originalCurrency, newCurrency, amount) => {
  if (originalCurrency === newCurrency)
    return amount
  // fetch from api
  const API_key = 'b47581b00aab4f45e5fd';
  const { data } = await axios.get(`https://free.currconv.com/api/v7/convert?q=${originalCurrency}_${newCurrency}&compact=ultra&apiKey=${API_key}`)

  // extract the conversion rate multipler
  const conversionMultiplier = Object.values(data)[0]
  //
  return amount * conversionMultiplier
}
