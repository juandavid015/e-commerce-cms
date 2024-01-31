// Categories
export async function getCategories(): Promise<Array<string>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`, { next: { revalidate: 120 } });

    if(!res.ok) {
        // console.log('s')
        throw new Error('Something went wrong');
    }
    let { data } = await res.json();


    // mapping data before returning =>
    data = data.map(({attributes}: {[key: string]: any}) =>  attributes.name)
    // console.log('categoriesss', data)
    return data
}

