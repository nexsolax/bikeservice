
// Material Dashboard 2 React components
import { useState } from "react";
import { useEffect } from "react";
import Api from "api/api";
import _ from "lodash";
import EventFeature from "hooks";





export default function CategoryTable(){
  /**
  =========================================================
  * Define Variable and State
  =========================================================
  */
  const { doLoading, doError } = EventFeature() 
  const [categories, setCategories] = useState([]);
  /**
  =========================================================
  * API CALL for INIT SERVICE:
  =========================================================
  */
  useEffect(() => {
    let isCall = true;
    ( async () => {
      try {
        doLoading(true)
        const [
          name       
        ] = await Promise.all([
            Api.getAllCategories()            
          ]);
          if(isCall) {
            if (
              _.isArray(name)           
            ) {
              doLoading(false)
              setCategories(name)
              
            } else {
              doLoading(false)
              doError({error:true,message:'Wrong Type Of Data'})
              
            }
          }
        
      } catch (err) {
        doError({ ...err, error: true })
        doLoading(false)
      }
    })()

    /**
     * This API call above is a ASYNCHRONOUS FUNCTION
     * If all the tasks have not been completed yet
     * It would cause memory leak
     * We need to have a clean up function
     * We don't have function to stop calling API, so we set the SERVICE STATE again for easy purpose
     */
    return () => isCall = false
    //https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    columns: [
      {
        Header: "Name category",
        accessor: "name",
        align: "left",
      },
      
    ],
    rows: 
      categories || []
    
  };
}
