/* example of variants propertie : 
 variants: [
                {
                    color: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange', 'pink', 'brown', 'gray', 'silver', 'gold', 'beige', 'other'],
                    lens: ['50mm', '60mm', '70mm', '80mm', '90mm', '100mm', '110mm', '120mm', '130mm', '140mm', '150mm', '160mm', '170mm', '180mm', '190mm', '200mm', 'other'],
                    memory: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', 'other'],  
                },
                
            ]+*/
type Variant = {
    [key: string]: string[]
}
export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    discount?: number,
    otherImages?: string[],
    variants?: { [key:string]: string[] | undefined}
}