import { useState, useEffect } from "react";
import { sanityClient } from '../lib/sanity';

export function useReviewsData() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `*[_type == "review"] | order(date desc) {
          text,
          name,
          date,
          stars
        }`;
        const data = await sanityClient.fetch(query);
        setReviews(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
}
