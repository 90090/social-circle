import { useEffect, useState } from "react";
import { sanityClient } from '../lib/sanity';

export function useMyStory() {
  const [myStory, setMyStory] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "myStory"][0]`)
      .then((data) => setMyStory(data))
      .catch(console.error);
  }, []);

  return { myStory };
}
