import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';

export function useWhatWeDo() {
  const [statement, setStatement] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatement = async () => {
      try {
        const data = await sanityClient.fetch(`
          *[_type == "whatWeDo"][0]{
            statement
          }
        `);
        setStatement(data?.statement || '');
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch What We Do statement:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchStatement();
  }, []);

  return { statement, loading, error };
}
