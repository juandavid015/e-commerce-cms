import { useParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryString (searchParams: URLSearchParams) {
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value?: string) => {
   
          const params = new URLSearchParams(searchParams.toString())
          params.set('page', '1'); // resetting to page 1 for each new query/filter/param
          if(!value) params.delete(name);
          else params.set(name, value);
          
          return params.toString()
        },
        [searchParams]
      )

    return createQueryString;
}