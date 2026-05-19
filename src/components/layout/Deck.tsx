'use client';

// import { useFetch } from '@/hooks/useFetch';
import { SeriesDataElement } from '@/types/Data';
import { Series } from '@/components/layout/Series';
import { Button } from '@/components/interface/Button';
import { useEffect, useState } from 'react';
import { Packet } from '@/types/Packet';

export default function Deck() {
  // The component fetches its own data internally
  // const { data, isLoading, error } = useFetch<SeriesDataElement[]>('/api/c/0');
  
  // The component runs it's own fetch hook
  const [items, setItems] = useState<SeriesDataElement[]>([]);
  // This is used to rerender components as needed
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {

    const fetchNextPage = async () => {
      setIsLoading(true);
      try {
        // Dynamically inject the current page into your API URL
        const response = await fetch(`/api/c/${page}`);
        
        if (!response.ok) throw new Error('Fetch failed');
        
        // Cast response as SeriesDataElement, see /api/c/[page]/route.ts for details
        const responseData: Packet<SeriesDataElement> = await response.json();
        const newItems: SeriesDataElement[] = responseData.data;

        // Append the new items to the ongoing list       
        //setItems((prevItems) => [...prevItems, ...newItems]);
        setItems((prevItems) => {
          // 1. Map the incoming items by their series_id for quick lookups
          const newItemsMap = new Map(newItems.map(item => [item.series_id, item]));

          // 2. Update nested arrays for parent items that already exist in the state
          const updatedItems = prevItems.map((currentItem) => {
            const matchingNewItem = newItemsMap.get(currentItem.series_id);

            if (matchingNewItem?.cards) {
              return {
                ...currentItem,
                cards: [
                  ...(currentItem.cards || []),
                  ...matchingNewItem.cards,
                ],
              };
            }

            return currentItem;
          });

          // 3. Extract completely new series that do not exist in the state yet
          const prevSeriesIds = new Set(prevItems.map((item) => item.series_id));
          const trulyNewItems = newItems.filter((item) => !prevSeriesIds.has(item.series_id));

          console.log(updatedItems);
          console.log(trulyNewItems);

          // 4. Combine the updated existing series with the brand-new series
          return [...updatedItems, ...trulyNewItems];
        });

         // No more data left to fetch?
        if (newItems.length === 0 || responseData.info.noMorePages) {
          setHasMore(false);
          return;
        }
        
      } catch (err) {
        console.error('Error fetching page:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNextPage();

  }, [page]); // Triggers every time 'page' changes

  return (
    <div>
      <ul>
        {items && items.map((series) => {
          const idKey = "s-"+series.series_id;
          return (
            <Series 
              key={idKey} 
              id={idKey}
              seriesId={idKey}
              name={series.series_name}
              desc={series.series_desc}
              cards={series.cards}
            >
            </Series>
          )
        })}
      </ul>
      {hasMore && (
        <Button 
          id={"more-button"}
          onClick={() => setPage((prevPage) => prevPage + 1)} 
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  );
}