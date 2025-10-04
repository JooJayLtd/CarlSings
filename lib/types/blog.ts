export interface BlogEntry {
  id: string;
  slug: string;
  title: string;
  category: string;
  content: string;
  anxietyLevel: 1 | 2 | 3 | 4 | 5;
  lessonsLearned: string[];
  tags: string[];
  createdAt: Date;
  updatedAt?: Date;
}
