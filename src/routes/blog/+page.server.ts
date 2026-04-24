import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PER_PAGE = 10;

export function load({ url }: { url: URL }) {
	const postsDir = path.resolve('content/blog');

	if (!fs.existsSync(postsDir)) {
		return { posts: [], page: 1, totalPages: 1, total: 0 };
	}

	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const allPosts = files
		.map((file) => {
			const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
			const { data } = matter(raw);
			const date = data.date ? new Date(data.date).toISOString().slice(0, 10) : '';
			return {
				slug: file.replace('.md', ''),
				title: data.title ?? 'Untitled',
				date,
				summary: data.summary ?? '',
				tags: data.tags ?? []
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));

	const total = allPosts.length;
	const totalPages = Math.ceil(total / PER_PAGE) || 1;
	const rawPage = parseInt(url.searchParams.get('page') ?? '1');
	const page = Math.min(Math.max(1, isNaN(rawPage) ? 1 : rawPage), totalPages);
	const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

	return { posts, page, totalPages, total };
}
