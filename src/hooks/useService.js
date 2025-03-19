import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "service"] | order(order asc) {
        _id,
        _createdAt,
        title,
        description,
        order
      }`)
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch services:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { services, loading, error };
}