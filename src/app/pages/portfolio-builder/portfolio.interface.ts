export interface PortfolioInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  completed?: number;
  open?: number;
  suggested?: number;
  objectivesInProject?: number;
  projectValue?: number;
  collaborationValue?: number;
  collaborators?: number;
  quality?: number;
  proof?: number;
} 