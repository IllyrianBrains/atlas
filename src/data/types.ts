export type PublicationStatus = 'draft' | 'published';

export interface AtlasBaseDestination {
  slug: string;
  title: string;
  flag: string;
  status: PublicationStatus;
}
