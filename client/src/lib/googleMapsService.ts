import { Testimonial } from '@shared/schema';

// Google Maps API key - in a real application, this should be stored in environment variables
// and not committed to the repository
const API_KEY = 'YOUR_GOOGLE_API_KEY';

// Persitelas Place ID - this is the unique identifier for the business on Google Maps
// You can find this by searching for your business on Google Maps and looking at the URL
const PLACE_ID = 'YOUR_PLACE_ID'; // Replace with actual Place ID for Persitelas

/**
 * Fetches reviews from Google Maps API for a specific place
 * @param limit Optional parameter to limit the number of reviews (defaults to 6)
 */
export async function fetchGoogleReviews(limit: number = 6): Promise<Testimonial[]> {
  try {
    // In a real implementation, this would make an actual API call to Google Maps Platform
    // The Places API requires authentication and proper error handling
    // Adding maxreviews parameter to limit the number of reviews returned
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&maxreviews=${limit}&key=${API_KEY}`;
    
    // For development purposes, we're simulating the API call
    // In production, you would use fetch or axios to make the actual request
    console.log(`Would fetch from: ${url}`);
    
    // Since we can't make a real API call in this example (would need API key and backend proxy),
    // we'll return mock data that represents what the Google API would return
    return getMockGoogleReviews(limit);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}

/**
 * Converts Google review data to our Testimonial format
 */
export function convertGoogleReviewToTestimonial(googleReview: any): Testimonial {
  return {
    id: parseInt(googleReview.time.toString()), // Using timestamp as ID
    name: googleReview.author_name,
    role: 'Google Review', // Indicating this is from Google
    content: googleReview.text,
    rating: googleReview.rating
  };
}

/**
 * Mock function that returns sample Google reviews data
 * In a real implementation, this would be replaced with actual API calls
 * @param limit Maximum number of reviews to return (defaults to 6)
 */
function getMockGoogleReviews(limit: number = 6): Testimonial[] {
  // This simulates the structure of reviews from Google Maps API
  const mockGoogleApiResponse = {
    reviews: [
      {
        author_name: "Ana Silva",
        rating: 5,
        text: "Excelente atendimento! As persianas que comprei ficaram perfeitas nas minhas janelas e o serviço de instalação foi rápido e profissional.",
        time: 1623456789
      },
      {
        author_name: "Carlos Oliveira",
        rating: 5,
        text: "Ótimos produtos e preços justos. A equipe foi muito prestativa em me ajudar a escolher o modelo certo para minha sala.",
        time: 1634567890
      },
      {
        author_name: "Mariana Costa",
        rating: 5,
        text: "As telas de proteção que instalei são de excelente qualidade. Meus filhos estão seguros e eu posso deixar as janelas abertas sem preocupação.",
        time: 1645678901
      },
      {
        author_name: "Pedro Santos",
        rating: 5,
        text: "Comprei mosquiteiras para toda a casa e estou muito satisfeito. Acabou o problema com insetos e o visual ficou discreto, como eu queria.",
        time: 1656789012
      },
      {
        author_name: "Juliana Mendes",
        rating: 5,
        text: "Bom atendimento e produtos de qualidade. A instalação demorou um pouco mais do que o previsto, mas o resultado final compensou.",
        time: 1667890123
      }
    ]
  };

  // Convert Google review format to our Testimonial format
  // Sort reviews by timestamp in descending order (newest first)
  const sortedReviews = [...mockGoogleApiResponse.reviews]
    .sort((a, b) => b.time - a.time)
    .slice(0, limit);
    
  return sortedReviews.map(review => convertGoogleReviewToTestimonial(review));
}