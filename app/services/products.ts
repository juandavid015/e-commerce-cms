import { API_URL, STRAPI_URL } from "../config";
import { Product } from "../types/types";

export type Filters = {
    [key: string]: string | string[] | undefined
}
export type Sort = {
    [key:string]: string | string[] | undefined
}
export type Pagination = {
    page: string
    pageSize: string
    pageCount?: string
    total?: string
}
interface GetRequestParams {
    filters?: Filters
    sort?: Sort
    pagination: Pagination
}
interface GetResults {
    data: Product[],
    pagination: Pagination
}

// Products
const mapData = (data: { [key: string]: any } | Array<{ [key: string]: any }>) => {
    const mapItem = (item: { [key: string]: any } ) => {
        const { attributes, id } = item;
        let { title, description, price, variants, discount, slug, otherImages, category } = attributes;
        const image = `${STRAPI_URL}${attributes?.image?.data?.attributes?.url}`;
        otherImages = otherImages?.data?.map(({attributes} : { [key: string]: any }) => {
            const image =  `${STRAPI_URL}${attributes?.url}`;
            return image
        })
        category = category?.data?.attributes?.name;
        return { id, title, description, price, variants, discount, slug, image, otherImages, category };
    };

    if (!Array.isArray(data)) {
        return mapItem(data);
    }

    return data.map(mapItem);
};
const parseSearchParams = (baseURL: string, options: GetRequestParams) => {

    options.pagination.pageSize = options.pagination?.pageSize ?? '2';
    options.pagination.page = options.pagination?.page ?? '1';

    let stringRequest = options.filters ? `${baseURL}` : `${baseURL}populate=*`;
    // if filters, add query params following strapi filters convention
    if (options.filters) {
        Object.entries(options.filters).forEach(([key, value], index) => {
            const property = key === 'discount' || key === 'title' ? '' : '[name]';
            const typeSearch = key === 'title' ? '$contains' : '$eq'
            stringRequest += stringRequest.includes('sort') ? '&' : ''
            stringRequest += `${index > 0 ? '&': ''}filters[${key}]${property}[${typeSearch}]=${value}` ;
        })

    }
    if(options.sort) {
        let newValue: 'asc' | 'desc';
        Object.entries(options.sort).forEach(([key, value], index) => {
          
            if(value === 'lower') newValue = 'asc';
            else if(value === 'higher') newValue = 'desc';
            stringRequest += stringRequest.includes('filters') ? '&' : ''
            stringRequest += `${index > 0 ? '&': ''}sort[${index}]=${key}:${newValue}` ;
        })
    }
    if (options.pagination) {
        Object.entries(options.pagination).forEach(([key, value], index) => {
            stringRequest += stringRequest.includes('filters') || stringRequest.includes('sort') ? '&' : ''
            stringRequest += `${index > 0 ? '&': ''}pagination[${key}]=${value}` ;
        })
    }
    stringRequest += '&populate=*' // add all properties and relations 
    
    return stringRequest;
}
export async function getProducts(options: GetRequestParams): Promise<GetResults>{
    // filters => { category: [ technology ], discount: [ 0.1 ] }
    // sort => { price: desc }
    // e.g URL request => {API_URL}/api/products?filters[category][name][$eq]=technology&sort[0]=price:desc
    // console.log('f', options)
    const baseURL = `${API_URL}/products?`
    const stringRequest = parseSearchParams(baseURL, options);
   
    const res = await fetch(`${stringRequest}`, { next: { revalidate: 120 } });
    if(!res.ok) {
        throw new Error('Could not complete the products request');
    }
    let { data, meta } = await res.json();

    // mapping data before returning =>
    data = mapData(data);
    // console.log('res', meta)
    return {
        data,
        pagination: meta.pagination
    }

}

export async function getProductById(id: string | number): Promise<Product>{
    const res = await fetch(`${API_URL}/products/${id}?populate=*`, { next: { revalidate: 120 } });

    if(!res.ok) {
        throw new Error('Could not complete the product request');
    }
    let { data } = await res.json();


    // mapping data before returning =>
    data = mapData(data);

    return data

}
