/**
 * User Interface
 * Represents a user in the system
 */
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Novel Interface
 * Represents a novel/book in the system
 */
export interface Novel {
  id: string;
  title: string;
  description: string;
  author: User;
  cover?: string;
  genre: string[];
  status: 'ongoing' | 'completed' | 'hiatus';
  views: number;
  rating: number;
  chapterCount: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Chapter Interface
 * Represents a chapter of a novel
 */
export interface Chapter {
  id: string;
  novelId: string;
  title: string;
  content: string;
  chapterNumber: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Comment Interface
 * Represents a comment on a chapter or novel
 */
export interface Comment {
  id: string;
  userId: string;
  novelId?: string;
  chapterId?: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Rating Interface
 * Represents a user's rating for a novel
 */
export interface Rating {
  id: string;
  userId: string;
  novelId: string;
  score: number;
  review?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Favorite Interface
 * Represents a user's favorite novel
 */
export interface Favorite {
  id: string;
  userId: string;
  novelId: string;
  createdAt: Date;
}

/**
 * API Response Interface
 * Standard API response wrapper
 */
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode: number;
}

/**
 * Paginated Response Interface
 * Response wrapper for paginated data
 */
export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  statusCode: number;
}

/**
 * Search Filters Interface
 * Search and filter parameters for queries
 */
export interface SearchFilters {
  query?: string;
  genre?: string[];
  status?: 'ongoing' | 'completed' | 'hiatus';
  sortBy?: 'recent' | 'popular' | 'rating' | 'views';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
  minRating?: number;
  maxRating?: number;
}

/**
 * Theme Config Interface
 * Configuration for application theme
 */
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  fontSize?: 'small' | 'medium' | 'large';
  fontFamily?: string;
  borderRadius?: number;
  spacing?: number;
}