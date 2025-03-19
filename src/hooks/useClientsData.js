import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';

export function useClientsData() {
  const [logos, setLogos] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch logos
        const logosData = await sanityClient.fetch(`
          *[_type == "clientLogo"] | order(order asc) {
            _id,
            name,
            "logoUrl": logo.asset->url,
            height
          }
        `);
        
        // Fetch metrics
        const metricsData = await sanityClient.fetch(`
          *[_type == "clientMetric"] | order(order asc) {
            _id,
            label,
            value
          }
        `);
        
        console.log('Fetched logos:', logosData);
        console.log('Fetched metrics:', metricsData);
        
        setLogos(logosData);
        setMetrics(metricsData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch clients data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { logos, metrics, loading, error };
}