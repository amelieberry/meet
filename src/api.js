import { mockData } from "./mock-data";

export const getEvents = async () => {
    return mockData;
}

/**
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 */
export const extractLocations = (events) => {
    let extractLocations = events.map((event) => event.location);
    let locations = [...new Set(extractLocations)];
    return locations;
};