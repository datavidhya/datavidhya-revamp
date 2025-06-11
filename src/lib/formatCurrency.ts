export const FormatCurrency = (originalPrice: number)=>{
   return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD"
   }).format(originalPrice)
}