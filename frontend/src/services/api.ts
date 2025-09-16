import axios from 'axios';

export interface BusStopProperties {
  name: string;
  osm_id: string;
  highway?: string;
  [key: string]: any;
}

export interface BusStopFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  properties: BusStopProperties;
}

export interface BusStopsGeoJSON {
  type: 'FeatureCollection';
  features: BusStopFeature[];
}

class ApiService {
  private baseURL: string;

  constructor() {
    // Default to a placeholder - user will need to replace with their actual endpoint
    this.baseURL = 'https://your-api-endpoint.com';
  }

  // Set the API base URL
  setBaseURL(url: string) {
    this.baseURL = url;
  }

  // Fetch all bus stops
  async getBusStops(): Promise<BusStopsGeoJSON> {
    try {
      const response = await axios.get(`${this.baseURL}/api/bus-stops/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching bus stops:', error);
      // Return mock data for development
      return this.getMockBusStops();
    }
  }

  // Search bus stops by name
  async searchBusStops(query: string): Promise<BusStopsGeoJSON> {
    try {
      const response = await axios.get(`${this.baseURL}/api/bus-stops/`, {
        params: { search: query }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching bus stops:', error);
      // Filter mock data for development
      const mockData = this.getMockBusStops();
      const filtered = {
        ...mockData,
        features: mockData.features.filter(feature => 
          feature.properties.name.toLowerCase().includes(query.toLowerCase())
        )
      };
      return filtered;
    }
  }

  // Filter bus stops by highway
  async filterBusStops(highway?: string): Promise<BusStopsGeoJSON> {
    try {
      const params: any = {};
      if (highway) params.highway = highway;
      
      const response = await axios.get(`${this.baseURL}/api/bus-stops/`, {
        params
      });
      return response.data;
    } catch (error) {
      console.error('Error filtering bus stops:', error);
      return this.getMockBusStops();
    }
  }

  // Mock data for development/demo
  private getMockBusStops(): BusStopsGeoJSON {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [77.5946, 12.9716] // Bangalore coordinates
          },
          properties: {
            name: 'MG Road Bus Stop',
            osm_id: 'mock_001',
            highway: 'primary'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [77.6412, 12.9279]
          },
          properties: {
            name: 'Koramangala Bus Terminal',
            osm_id: 'mock_002',
            highway: 'secondary'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [77.5773, 12.9698]
          },
          properties: {
            name: 'Brigade Road Junction',
            osm_id: 'mock_003',
            highway: 'primary'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [77.6191, 12.9351]
          },
          properties: {
            name: 'Indiranagar Metro Station',
            osm_id: 'mock_004',
            highway: 'trunk'
          }
        }
      ]
    };
  }
}

export default new ApiService();