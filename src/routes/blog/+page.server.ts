import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function load() {
	const postsDir = path.resolve('content/blog');

	if (!fs.existsSync(postsDir)) {
		return { posts: [] };
	}

	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const posts = files
		.map((file) => {
			const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
			const { data } = matter(raw);
			return {
				slug: file.replace('.md', ''),
				title: data.title ?? 'Untitled',
				date: data.date ?? '',
				summary: data.summary ?? '',
				tags: data.tags ?? []
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));

	return { posts };
}
