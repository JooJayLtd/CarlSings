import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/entries');

export interface FrontMatter {
  title: string;
  category: string;
  anxietyLevel: 1 | 2 | 3 | 4 | 5;
  date: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
  carlLog?: string;
  basilLog?: string;
  lucyLog?: string;
}

export interface MdxEntry {
  frontMatter: FrontMatter;
  content: string;
  slug: string;
}

/**
 * Get all MDX files from the content/entries directory
 */
export function getAllMdxFiles(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  return files.filter((file) => file.endsWith('.mdx'));
}

/**
 * Read and parse an MDX file
 */
export function readMdxFile(filename: string): MdxEntry {
  const filePath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  const slug = filename.replace(/\.mdx$/, '');

  return {
    frontMatter: {
      ...(data as Omit<FrontMatter, 'slug'>),
      slug,
    },
    content,
    slug,
  };
}

/**
 * Get all entries with their frontmatter and content
 */
export function getAllEntries(): MdxEntry[] {
  const files = getAllMdxFiles();
  const entries = files.map((filename) => readMdxFile(filename));

  // Sort by date, newest first
  return entries.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get a single entry by slug
 */
export function getEntryBySlug(slug: string): MdxEntry | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(contentDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readMdxFile(filename);
}

/**
 * Get entries by category
 */
export function getEntriesByCategory(category: string): MdxEntry[] {
  const allEntries = getAllEntries();
  return allEntries.filter(
    (entry) => entry.frontMatter.category.toLowerCase() === category.toLowerCase()
  );
}
