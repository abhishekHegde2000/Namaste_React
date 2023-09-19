import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData?.data?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from API:</h2>
      <pre>{JSON.stringify(data,null,5)}</pre>
    </div>
  );
}

export default DataFetcher;


//           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
